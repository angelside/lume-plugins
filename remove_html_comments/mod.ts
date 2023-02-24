// _config.ts
/*
import removeHtmlComments from "https://raw.githubusercontent.com/angelside/lume-plugins/develop/remove_html_comments/mod.ts";

.use(removeHtmlComments())
*/
export default function () {

    function removeHtmlComments(content: string): string {
        content = content.replace(/<\!--.+?-->/sg,"");
        return content
    }

    return (site: Site) => {
        site.process([".html"], (page) => {
            page.content = removeHtmlComments(page.content as string);
        });
    };
}
