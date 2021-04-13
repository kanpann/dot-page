import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'
import { Post } from './posts'
import { getByteLength, substrToByte } from './common-util'
import hljs from 'highlight.js'
const md = require("markdown-it")({
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  }
});

const postsDirectory: string = path.join(process.cwd(), 'posts')

export const getFileNames = (): string[] => { return fs.readdirSync(postsDirectory) }

export const getPostData = (fileName: string): GrayMatterFile<string> => {
  const fullPath: string = path.join(postsDirectory, fileName)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  return matter(fileContents);
}
export const getContents = async (content: string): Promise<string> => {
  return md.render(content);
}
export const sort = (posts: Post[]) => {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
export const getExcept = (target: string, maxByte: number): string => {
  const except: string = substrToByte(target, maxByte);
  return except + (getByteLength(target) > maxByte ? '...':'')
}