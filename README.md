# Custom lume plugins

[![maintenance-status](https://img.shields.io/badge/maintenance-as--is-yellow.svg?style=for-the-badge)](https://gist.github.com/angelside/364976fbcf7001a5da7e79ad8ed91fec) [![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCw1QzEzLjUsNSw1LDEzLjYsNSwyNC4xYzAsOC4yLDUuMSwxNS4xLDEyLjMsMTcuOWw0LjItMTEuNUMxOC44LDI5LjUsMTcsMjcsMTcsMjQgYzAtMy45LDMuMS03LDctN3M3LDMuMSw3LDdjMCwzLTEuOCw1LjUtNC41LDYuNUwzMC43LDQyQzM3LjksMzkuMiw0MywzMi4zLDQzLDI0LjFDNDMsMTMuNiwzNC41LDUsMjQsNXoiLz48cGF0aCBmaWxsPSIjMmU3ZDMyIiBkPSJNMTcuOSw0My4zbC0wLjktMC40QzkuMiw0MCw0LDMyLjQsNCwyNC4xQzQsMTMsMTMsNCwyNCw0YzExLDAsMjAsOSwyMCwyMC4xIGMwLDguMy01LjIsMTUuOS0xMi45LDE4LjhsLTAuOSwwLjRsLTQuOC0xMy4zbDAuOS0wLjRjMi4zLTAuOSwzLjgtMy4xLDMuOC01LjZjMC0zLjMtMi43LTYtNi02cy02LDIuNy02LDZjMCwyLjUsMS41LDQuNywzLjgsNS42IGwwLjksMC40TDE3LjksNDMuM3ogTTI0LDZDMTQuMSw2LDYsMTQuMSw2LDI0LjFjMCw3LjEsNC4zLDEzLjcsMTAuNywxNi41bDMuNS05LjZDMTcuNiwyOS43LDE2LDI3LDE2LDI0YzAtNC40LDMuNi04LDgtOCBzOCwzLjYsOCw4YzAsMy0xLjYsNS43LTQuMiw3bDMuNSw5LjZDMzcuNywzNy44LDQyLDMxLjMsNDIsMjQuMUM0MiwxNC4xLDMzLjksNiwyNCw2eiIvPjwvc3ZnPg==)](./LICENSE)

> Custom plugins for [lume](https://github.com/lumeland/lume) static site generator. _For my own use but you can use it freely._

## remove_html_comments
> Deletes html comments on pages

**_config.ts**
```typescript
import removeHtmlComments from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/remove_html_comments/mod.ts";

// ...

.use(removeHtmlComments())
```

## add_sponsorlink
> Adds predefined links to predefined pages

**_config.ts**
```typescript
import addSponsorLink from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/add_sponsorlink/mod.ts";

// ...

.use(addSponsorLink({
    file: "./src/_data/sponsor_links.yml",
}))
```

**src/_data/sponsor_links.yml**
```yaml
/page1/:
  - This is a test <a href="https://google.com">Link</a>
  - Hello world
/page2/:
  - This is a test 2
  - Link test 2
```

**sponsor_links.njk**
`{% include 'sponsor_links.njk' %}`

```njk
{% if sponsorlinksFromPreprocess | length -%}
    {% for link in sponsorlinksFromPreprocess %}
        <li class="text-xs">{{ link | safe }}</li>
    {% endfor %}
{%- endif %}
```
