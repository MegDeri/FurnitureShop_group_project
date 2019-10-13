# WDP Team project

## Opis projektu

DO UZUPEŁNIENIA

## Demo

DO UZUPEŁNIENIA

## Init project

 After clone project use commend `npm install` to install all dependencies.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

All necessary files to start working on the project you find in  `src/`.

## NPM Scripts

3 main scripts are available to speed up your work:

- `build`: it's based on files found in folder: `src` it builds project in folder: `dist`
- `watch`: runs `browser-sync`, and watches changing in: `src` and rebuild project.
- `code-quality`: automatically formats files in: `src/`
  according to the accepted code formatting convention and check errors in JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

DO UZUPEŁNIENIA

# task WDP190504-35

## Description

-CLI for Autoprefixer

- Live CSS Reload & Browser Syncing
  -Wrapper around libsass
  -Use glob patterns to view filesets and run a command when something is added, changed or deleted.

## scripts

watch:sassprefixer - Scirpt launch collection for CSS(3) which prefixes mixins library for Sass/Scss.

watch:browsersync - Browsersync script cuts out repetitive manual tasks. From live reloads to URL pushing, form replication to click mirroring.
