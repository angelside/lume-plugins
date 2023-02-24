import yaml from "lume/core/loaders/yaml.ts";

// _config.ts
/*
import addBackLink from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/add_backlink/mod.ts";

// ...

.use(addBackLink({
    file: "./src/_data/links.yml",
}))
*/

// src/_data/links.yml
/*
/page1/:
  - This is a test <a href="https://google.com">Link</a>
  - Hello world
/page2/:
  - This is a test 2
  - Link test 2
*/

// links.njk
// {% include 'links.njk' %}
/*
{% if backlinkFromPreprocess | length -%}
    {% for link in backlinkFromPreprocess %}
        <li class="text-xs">{{ link | safe }}</li>
    {% endfor %}
{%- endif %}
*/

interface Options {
    file: string;
}

export default function (options: Options) {

    const dataPromise = yaml(options.file);

    function addBackLink(url: string): Promise<Array<string>> {
        return dataPromise.then(data => {
            return data[url];
        });
    }

    return (site: Site) => {
        site.preprocess([".html"], async (page) => {
            page.data.backlinkFromPreprocess = await addBackLink(page.data.url as string);
        });
    };
}
