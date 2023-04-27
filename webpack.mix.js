/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for your application, as well as bundling up your JS files.
|
*/

let mix = require('laravel-mix');

mix.setPublicPath('public');
mix.setResourceRoot('../')

mix
    .js('src/js/main.js', 'js')
    .sass('src/scss/main.scss', 'css');