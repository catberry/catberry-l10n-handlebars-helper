# [Handlebars](http://handlebarsjs.com/) helper for [Catberry](https://github.com/catberry/catberry) localization [plugin](https://github.com/catberry/catberry-l10n)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/catberry/main?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

## Installation

```bash
npm install catberry-l10n-handlebars-helper --save
```

## Description
You can use Handlebars helper that puts localized value wherever you want:

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

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/main) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-l10n-handlebars-helper/issues)
* [Submit a PR](https://github.com/catberry/catberry-l10n-handlebars-helper/blob/develop/CONTRIBUTING.md)

Denis Rechkunov <denis@rdner.de>
