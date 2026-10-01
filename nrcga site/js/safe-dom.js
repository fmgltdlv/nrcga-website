/**
 * Shared DOM safety helpers for the public static site.
 */
;(function (global) {
  function escapeHtml(text) {
    return String(text ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  }

  function isSafeHttpUrl(value) {
    try {
      const url = new URL(String(value || '').trim())
      return url.protocol === 'http:' || url.protocol === 'https:'
    } catch {
      return false
    }
  }

  function isDangerousScheme(value) {
    return /^(javascript|data|vbscript):/i.test(String(value || '').trim())
  }

  function isRelativeDocumentPath(value) {
    const raw = String(value || '').trim()
    if (!raw || isDangerousScheme(raw)) return false
    if (raw.startsWith('//')) return false
    if (/^[a-z][a-z0-9+.-]*:/i.test(raw)) return false
    if (raw.startsWith('#')) return true
    return /^(\.\/|\.\.\/|[a-zA-Z0-9])/.test(raw)
  }

  function safeHref(value) {
    const raw = String(value || '').trim()
    if (!raw) return '#'
    if (isDangerousScheme(raw)) return '#'
    if (raw.startsWith('//')) return '#'
    if (raw.startsWith('/') && !raw.startsWith('//')) return raw
    if (raw.startsWith('#')) return raw
    if (isSafeHttpUrl(raw)) return raw
    if (isRelativeDocumentPath(raw)) return raw
    return '#'
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, '&#39;')
  }

  global.NRCGA_safeDom = {
    escapeHtml,
    escapeAttr,
    isSafeHttpUrl,
    safeHref,
  }
})(typeof window !== 'undefined' ? window : globalThis)
