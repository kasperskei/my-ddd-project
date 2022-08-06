export const parseHtml = (html: string): DocumentFragment => document.createRange().createContextualFragment(html)
