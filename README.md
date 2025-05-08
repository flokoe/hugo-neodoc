# Hugo Neodoc Theme

> [!CAUTION]
> This is alpha software; use at your own risk!

A powerful documentation framework on top of [Hugo](https://gohugo.io/).

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Documentation](#documentation)
- [Acknowledgements](#acknowledgements)

## Features

- Clean simple design
- Light and Mobile-Friendly
- Zero initial configuration
- Handy shortcodes
- Dark mode

## Requirements

- Hugo 0.146.0 or higher
- Hugo extended version, [Installation Instructions](https://gohugo.io/installation/)
- NodeJS/NPM to install Tailwind and AlpineJS

## Installation

There are multiple ways to install a theme. I recommend installing this
theme as a Hugo Module:

1. Initialize and enable Hugo modules in your project

    ```bash
    hugo mod init github.com/user/repo
    ```

2. Add this module to your Hugo config

    ```yaml
    module:
      imports:
        - path: github.com/flokoe/hugo-neodoc
    ```

3. Load/update the theme module

    ```bash
    hugo mod get -u
    ```

4. Generate `package.json` and install dependencies

    ```bash
    hugo mod npm pack && npm install
    ```

5. Enjoy your new theme and start writing :tada:

    ```bash
    hugo server -D
    ```

## Documentation

This theme dogfoods itself. The demo page is the documentation at the same
time. So take a look at
[flokoe.github.io/hugo-neodoc](https://flokoe.github.io/hugo-neodoc) for
details about all features and configuration options.

## Acknowledgements

There are many fantastic solutions for static documentation systems. Most
notably [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and
[VitePress](https://vitepress.dev/) which have inspired me to create such a
system for Hugo. So thank you for your great work!
