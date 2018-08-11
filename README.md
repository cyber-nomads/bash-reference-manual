# Bash Reference Manual
Official GNU Bash Reference Manual's visual improvement

### About the Technical Part
- We use Sass
- We follow BEM naming conventions
- We use Gulp to automatize the workflow


### NPM Tasks

- `npm run build` runs the build process

### Gulp Tasks

**Main commands**
- `gulp default` runs build
- `gulp build` runs html & css tasks
- `gulp html` runs html linter & minification
- `gulp sass:watch` runs watcher for sass to css

**Individual Tasks**
- `clean` removes build files
- `html_beutifier` runs html beutifier
- `html:linter` runs html linter
- `css` runs post-css (nano, prefixer, etc...)
- `sass` runs transpilation to css

**Dependencies Graph**
```
├─┬ default
│ └── build
├── clean
├─┬ build
│ ├── html
│ └── css
├─┬ html
│ └── html:beutifier
├── html:beutifier
├── html:linter
├── sass
├── sass:watch
└── css
```