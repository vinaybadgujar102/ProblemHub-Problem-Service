import { marked } from "marked";
import sanitizeHtmlLibrary from "sanitize-html";
import TurndownService from "turndown";

async function sanitizieMarkdownContent(markdownContent: string) {
  const turndownService = new TurndownService();

  //1. Convert markdown to HTML
  const convertedHtml = await marked.parse(markdownContent);

  //2. Sanitize HTML
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  console.log(sanitizedHtml);

  //3. Convert the sanitized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
  return sanitizedMarkdown;
}

export default sanitizieMarkdownContent;
