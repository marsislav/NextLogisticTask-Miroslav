// Initialize jQuery and SCSS compiler
let mix = require("laravel-mix");

mix.js("src/app.js", "dist/")
    .sass("src/app.scss", "dist/")
    .autoload({
        jquery: ["$", "window.jQuery"],
    });
