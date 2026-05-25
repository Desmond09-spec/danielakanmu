import { ref } from 'vue'

// Single shared reactive ref — one source of truth for the whole app
const isDark = ref(
  typeof document !== 'undefined'
    ? document.documentElement.classList.contains('dark')
    : true
)

// MutationObserver keeps isDark in sync whenever the html class changes
// (handles toggle clicks, page load, and any external changes)
if (typeof window !== 'undefined') {
  const observer = new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
}

export function useTheme() {
  function toggle() {
    const next = !isDark.value
    isDark.value = next
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return { isDark, toggle }
}
