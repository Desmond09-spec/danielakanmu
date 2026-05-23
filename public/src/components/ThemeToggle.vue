<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun } from '@lucide/vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button 
    @click="toggleDark()" 
    class="fixed top-6 right-6 z-50 p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
    aria-label="Toggle Dark Mode"
  >
    <Moon v-if="!isDark" class="w-5 h-5 text-gray-800" />
    <Sun v-else class="w-5 h-5 text-yellow-300" />
  </button>
</template>
