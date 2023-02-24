/*
import removeHtmlComments from "./plugins/remove_html_comments.ts";

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
