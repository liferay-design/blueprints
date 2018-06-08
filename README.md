# Blueprints

[![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

## Setup

1.  Make sure you have [node and npm](https://nodejs.org/en/download/) installed (Node V < 9):

```sh
node -v && npm -v
```

2.  Install our global dependencies:

```sh
[sudo] npm i -g electric-cli
```

3.  Install our local dependencies:

```sh
npm i
```

### New?

Start with [this amazing set up process](https://github.com/naoki-evan-hisamoto/phresh-n-clean/blob/master/README.md#set-up), core things you'll need are:

1.  Homebrew
1.  Node + NPM
1.  Homebrew Cask
1.  Git

For this specific repo, because we're using Electric you need to use [n](https://github.com/tj/n) to install Node 8.0.

## Usage

- Build the site, serve it locally, and watch for any changes:

```
electric run
```

- Deploy to production (send build files to `master` branch)&mdash;you'll need to be added to the WeDeploy project for this site to do this&mdash;if you aren't, you'll have to [send a pull request](https://help.github.com/articles/creating-a-pull-request/)):

```
electric deploy
```
