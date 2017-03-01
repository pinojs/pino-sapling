> This repository provides a starting point for creating modules in the Pino
> ecosystem. It is written assuming the module will be a transport. To use
> this repository:
>   1. `git clone https://github.com/pinojs/pino-sapling.git your-module-name`
>   2. `cd your-module-name && rm -rf .git && git init`
>   3. Edit the `package.json` to suit your needs: remember to edit the name,
>      including the binary name
>   4. Remove this header to the Readme and then edit accordingly

# <your-module-name-here>

This is a transport for the [Pino](https://github.com/pinojs/pino) logger.
You can use it like so:

```sh
$ npm install -g <your-module-name-here>
$ node the-app.js | <your-module-name-here>
```
