<script setup>
import { Sun, Moon } from '@lucide/vue'
import { useTheme } from '../composables/useTheme.js'

const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    id="theme-toggle"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="theme-toggle-btn"
    :class="isDark ? 'is-dark' : 'is-light'"
  >
    <span class="icon-wrap">
      <!-- Moon icon (shown in dark mode) -->
      <Moon
        class="toggle-icon moon-icon"
        :class="{ 'icon-visible': isDark, 'icon-hidden': !isDark }"
        :size="18"
        stroke-width="2"
      />
      <!-- Sun icon (shown in light mode) -->
      <Sun
        class="toggle-icon sun-icon"
        :class="{ 'icon-visible': !isDark, 'icon-hidden': isDark }"
        :size="18"
        stroke-width="2"
      />
    </span>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 9999;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

/* Dark mode button style */
.theme-toggle-btn.is-dark {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e5e7eb;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.theme-toggle-btn.is-dark:hover {
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transform: scale(1.07);
}

/* Light mode button style */
.theme-toggle-btn.is-light {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #374151;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
}

.theme-toggle-btn.is-light:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  transform: scale(1.07);
}

/* Icon container */
.icon-wrap {
  position: relative;
  width: 18px;
  height: 18px;
}

/* Both icons sit on top of each other */
.toggle-icon {
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.icon-visible {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.icon-hidden {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}
</style>
