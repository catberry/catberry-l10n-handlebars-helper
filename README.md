# [Handlebars](http://handlebarsjs.com/) helper for [Catberry](https://github.com/catberry/catberry) localization [plugin](https://github.com/catberry/catberry-l10n)

[![NPM](https://nodei.co/npm/catberry-l10n-handlebars-helper.png)](https://nodei.co/npm/catberry-l10n-handlebars-helper/)

## Description
You can use Handlebars helper that puts localized value anywhere you want:

```html
{{l10n "SOME_LOCALIZATION_KEY" "en-us" 5}}
```

* first found string - localization key
* first found number - pluralization count (optional)
* second found string - current user localization (optional)

Let's say we have such localization dictionary:

```json
{
	"COMMENT": ["comment", "comments"]
}
```

And we use such helper parameters:

```html
{{l10n "COMMENT" "en-us" 1}}
```
It outputs `comment` word.

```html
{{l10n "COMMENT" "en-us" 5}}
```
It outputs `comments` word.

Also, if you do not specify `locale` value into helper arguments it will take
`locale` value from template data context.

```html
{{l10n "COMMENT" 5}}
```

Also, you can use it without plural count

```html
{{l10n "COMMENT"}}
```

## Contribution
If you have found a bug, please create pull request with [mocha](https://www.npmjs.org/package/mocha) 
unit-test which reproduces it or describe all details in an issue if you can not
implement test. If you want to propose some improvements just create an issue or
a pull request but please do not forget to use `npm test` to be sure that your
code is awesome.

All changes should satisfy this [Code Style Guide](https://github.com/catberry/catberry/blob/4.0.0/docs/code-style-guide.md).

Also your changes should be covered by unit tests using [mocha](https://www.npmjs.org/package/mocha).

Denis Rechkunov <denis.rechkunov@gmail.com>