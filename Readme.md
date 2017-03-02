This repository provides a starting point for creating modules in the Pino
ecosystem. It is written assuming the module will be a transport. To use
this repository:

1. `git clone https://github.com/pinojs/pino-sapling.git your-module-name`
1. `cd your-module-name && rm -rf .git && git init`
1. Edit the `package.json` to suit your needs: remember to edit the name,
   including the binary name
1. Remove this `README.md` file
1. Rename `Template-README.md` to `README.md` and edit accordingly

# Why a template repository?

The purpose of the template repository is to make it easy for you to write
a module that can be accepted into the `pinojs` organization. Modules within
the organization adhere to the following principles:

+ Run on the current LTS releases of Node.js
+ Follow the [standardjs.com](http://standardjs.com) coding style
+ Written in native JavaScript -- *no transpiling*
+ Performant code is paramount
