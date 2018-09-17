import marked from 'marked'
import Hljs from '~/plugins/highlight'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight (code) {
    return Hljs.highlightAuto(code).value
  }
})

const renderer = new marked.Renderer()

// 代码解析器（行号处理）
const codeParse = function (code, lang, escaped) {
  if (this.options.highlight) {
    const out = this.options.highlight(code, lang)
    console.log(out)
    if (out != null && out !== code) {
      escaped = true
      code = out
    }
  }
  const lineNums = code.split('\n').map((l, i) => {
    return `<li class="code-line-number">${i + 1}</li>`.replace(/\s+/g, ' ')
  }).join('')
  if (!lang) {
    return `<pre class="code-pre clear">\n<ul class="code-lines">${lineNums}</ul><code>${(escaped ? code : escape(code, true))}\n</code></pre>`.replace('\n', '')
  } else {
    console.log(this.options.langPrefix,escape(lang, true))
    return `<pre data-lang="${lang}" class="code-pre clear">\n<ul class="code-lines">${lineNums}</ul><code class="${this.options.langPrefix}${escape(lang, true)}">${(escaped ? code : escape(code, true))}\n</code></pre>\n`.replace('\n', '')
  }
}
renderer.code = codeParse

export default (content) => {
  return marked(content, { renderer })
}
