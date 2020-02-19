# WDP Team project

## Description:
 This project is about creating an example website of an online shop, created from a free PSD template, in order for the participants to learn how to code front-end.

## Demo

.....

## Init project

 Clone a project and use command `npm install` to install all dependencies;

after that you can use command `npm run watch`.

 You find all necessary files in:  `src/` to start working on the project.

## NPM Scripts

3 main scripts are available to speed up your work:

- `build`: it is based on files found in folder: `src` it builds project in folder: `dist`
- `watch`: runs `browser-sync`, and keeps on the watch changing in: `src` then rebuild project.
- `code-quality`: it' s automatically formatting the files in: `src/`
  according to the accepted code formatting convention and checks errors in JS.

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
