<?php

use Gettext\Translation;
use Gettext\Translations;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Console\Application;

class ExtractCommand extends AbstractCatalogCommand
{
    private $extractorOptions = ['functions' => [
        't' => 'gettext',
        'x' => 'pgettext',
        'n' => 'ngettext'
    ]];

    protected function configure()
    {
        $this
            ->setName('extract')
            ->setDescription('Extract translatable strings into a translation table (.po format).')
            ->addOption("locale", "l", InputOption::VALUE_REQUIRED | InputOption::VALUE_IS_ARRAY, "set one or more locales to maintain by using the -l/--locale option")
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $files = $this->getSourceFiles();

        foreach ($this->getLocalesFromPackage() as $locale)
        {
            if ($locale !== static::DEFAULT_LOCALE)
            {
                $catalogFile = sprintf("%s/%s/%s.po", $this->workdir, static::TRANSLATIONS_DIR, $locale);
                $catalog = $this->createCatalog($locale, $catalogFile, $files);
                $this->filesystem->dumpFile($catalogFile, $catalog->toPoString());
            }
        }
    }

    private function getLocalesFromPackage() : array
    {
        $packageJson = $this->getPackageJson();
        $locales = (isset($packageJson["l10n"]) && isset($packageJson["l10n"]["locales"]) && is_array($packageJson["l10n"]["locales"]))
            ? $packageJson["l10n"]["locales"]
            : [];
    }

    private function getSourceFiles() : array
    {
        $files = [];
        $finder = (new Finder())->in($this->workdir)
            ->name("*\.js")
            ->name("*\.mjs")
            ->notPath('|' . static::TRANSLATIONS_DIR . '/|')
            ->notPath('|node_modules|');

        foreach ($finder as $file)
        {
            $filePath = $file->getRealpath();
            $alias = str_replace("{$this->workdir}/", "", $filePath);
            $files[$filePath] = $alias;
        }

        return $files;
    }

    private function createCatalog(string $locale, string $catalogFile, array $files) : Translations
    {
        if (! preg_match('|^[a-z]{2}-[A-Z]{2}|', $locale))
        {
            throw new Exception("Invalid locale: $locale");
        }

        $oldCatalog = ($this->filesystem->exists($catalogFile))
            ? $this->deleteReferences(Translations::fromPoFile($catalogFile))
            : new Translations();

        $catalog = new Translations();
        $catalog->deleteHeaders();
        $catalog->setLanguage(str_replace("-", "_", $locale));

        foreach ($files as $file)
        {
            $catalog->addFromJsCodeFile($file, $this->extractorOptions);
        }

        $catalog->mergeWith($oldCatalog, 0);

        return $catalog;
    }

    private function deleteReferences(Translations $translations) : Translations
    {
        foreach ($translations as $translation)
        {
            $translation->deleteReferences();
        }

        return $translations;
    }
}
