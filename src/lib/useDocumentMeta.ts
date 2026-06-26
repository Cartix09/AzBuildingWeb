import { useEffect } from 'react'

/** Sets <title> and meta description per page for basic SEO. */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const full = `${title} — AZBUILDING MMC`
    document.title = full
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
