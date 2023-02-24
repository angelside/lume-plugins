# Custom lume plugins

> Custom plugins for [lume](https://github.com/lumeland/lume) static site generator. _For my own use but you can use it freely._

## remove_html_comments
> Deletes html comments on pages

```typescript
// _config.ts
import addBackLink from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/add_backlink/mod.ts";

// ...

.use(addBackLink({
    file: "./src/_data/links.yml",
}))
```

## add_backlink
> Adds predefined links to predefined pages

```typescript
// _config.ts
import addBackLink from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/add_backlink/mod.ts";

// ...

.use(addBackLink({
    file: "./src/_data/links.yml",
}))


// src/_data/links.yml
/page1/:
  - This is a test <a href="https://google.com">Link</a>
  - Hello world
/page2/:
  - This is a test 2
  - Link test 2


// links.njk
// {% include 'links.njk' %}
{% if backlinkFromPreprocess | length -%}
    {% for link in backlinkFromPreprocess %}
        <li class="text-xs">{{ link | safe }}</li>
    {% endfor %}
{%- endif %}
```
