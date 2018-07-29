# cr4f73d
[![Build Status](https://travis-ci.org/crftd/cr4f73d.svg?branch=master)](https://travis-ci.org/crftd/cr4f73d)

cr4f73d Github Pages website

## Pre-Requirements

https://github.com/creationix/nvm


## Setup

Install node 10.7

```bash
nvm install 10.7 && nvm use 10.7
```

Resolve dependencies

```bash
yarn
```

Start [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

```bash
yarn start
```

## Mockups

[Here](https://invis.io/PZN87WC5YBU)  👻 🙃

Also should include content form https://crftd.github.io/

## Deployment

Code style check runs on every commit. Tagged commits will trigger deployment to https://crftd.github.io/cr4f73d/

🚀 Use `npm versoins` command to manage versions

🚀 Follow [semver](https://semver.org/)

This will update version in package.json and create commit named as venison number:

```bash
npm version patch
```

Push tagged commit:
```bash
git push --follow-tags
```
