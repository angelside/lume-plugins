import yaml from "lume/core/loaders/yaml.ts";

// _config.ts
/*
import addSponsorLink from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/add_sponsorlink/mod.ts";

// ...

.use(addSponsorLink({
    file: "./src/_data/sponsor_links.yml",
}))
*/

// src/_data/sponsor_links.yml
/*
/page1/:
  - This is a test <a href="https://google.com">Link</a>
  - Hello world
/page2/:
  - This is a test 2
  - Link test 2
*/

// sponsor_links.njk
// {% include 'sponsor_links.njk' %}
/*
{% if sponsorslinkFromPreprocess | length -%}
    {% for link in sponsorlinksFromPreprocess %}
        <li class="text-xs">{{ link | safe }}</li>
    {% endfor %}
{%- endif %}
*/

interface Options {
    file: string;
}

export default function (options: Options) {

    const dataPromise = yaml(options.file);

    function addSponsorLink(url: string): Promise<Array<string>> {
        return dataPromise.then(data => {
            return data[url];
        });
    }

    return (site: Site) => {
        site.preprocess([".html"], async (page) => {
            page.data.sponsorlinksFromPreprocess = await addSponsorLink(page.data.url as string);
        });
    };
}
