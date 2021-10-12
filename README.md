# Alpine Focal

Add focal point alignment of images to your Alpine 3.x components with a custom directive.

![GitHub](https://img.shields.io/github/license/lefrancois/alpine-focal?color=red&style=flat-square)
![Build size Brotli](https://img.badgesize.io/lefrancois/alpine-focal/master/dist/cdn.min.js.svg?compression=gzip&style=flat-square&color=green)
[![](https://data.jsdelivr.com/v1/package/npm/@lefrancois/alpine-focal/badge)](https://www.jsdelivr.com/package/npm/@lefrancois/alpine-focal)
[![](https://img.shields.io/discord/492260310414262274.svg?color=7289da&label=lefrancois&logo=discord&style=flat-square)](https://discord.gg/fnBQBdVdSZ)
[![](https://img.shields.io/twitter/follow/lefrancois?style=flat-square)](https://www.twitter.com/lefrancois)

> This package only supports Alpine v3.x.

## About

This plugin adds a new `x-focal` directive to Alpine that allows to easliy align your images to keep focus on the selected part of the image.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script
    src="https://cdn.jsdelivr.net/npm/@lefrancois/alpine-focal@1/dist/cdn.min.js"
    defer
></script>
```

### NPM

```bash
npm install @lefrancois/alpine-focal
```

Add the `x-focal` directive to your project by registering the plugin with Alpine.

```js
import Alpine from "alpinejs";
import Focal from "@lefrancois/alpine-focal";

Alpine.plugin(Focal);

window.Alpine = Alpine;
window.Alpine.start();
```

## Usage

Attach the `x-focal` directive on an image element and enter the point (unsing px or % informations) to keep in focus while containing the image.

```html
<div x-data>
    <img 
        src="..." 
        width="400px" 
        height="600px" 
        x-focal="10% 80%"
        >
    </img>
</div>
```

Optinally you can use set the third parameter to true (`x-focal="100px 100px true"`) to get a preview image where you can set the focal point with an easy click on the image. Note: Just copy and paste the value to the `x-focal` attribute of the image element in production. ;) This is just a helper for your development.

## License

Copyright (c) 2021 Michael Lefrancois

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
