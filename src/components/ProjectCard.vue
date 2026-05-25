<script setup>
import { computed } from 'vue'
import { ExternalLink, Code } from '@lucide/vue'
import { useTheme } from '../composables/useTheme.js'

const { isDark } = useTheme()

const props = defineProps({
  title: String,
  description: String,
  /** Fallback image used when no dark/light specific variant is supplied */
  image: String,
  /** Image to show in dark mode. Falls back to image if not provided. */
  darkImage: String,
  /** Image to show in light mode. Falls back to image if not provided. */
  lightImage: String,
  liveLink: String,
  githubLink: String,
  spanCols: {
    type: Number,
    default: 1
  }
})

const displayImage = computed(() =>
  isDark.value
    ? (props.darkImage || props.image)
    : (props.lightImage || props.image)
)
</script>

<template>
  <div 
    class="glass rounded-3xl overflow-hidden group relative flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    :class="[`md:col-span-${spanCols}`]"
  >
    <!-- Image Header -->
    <div class="h-64 overflow-hidden relative">
      <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
      <img :src="displayImage" :alt="title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    
    <!-- Content Content -->
    <div class="p-8 flex flex-col flex-grow justify-between">
      <div>
        <h3 class="text-2xl font-bold mb-3 tracking-tight">{{ title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6 text-sm md:text-base">
          {{ description }}
        </p>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex gap-4 mt-auto">
        <a 
          v-if="liveLink"
          :href="liveLink" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover:opacity-80 transition-opacity"
        >
          <ExternalLink class="w-4 h-4" /> Visit
        </a>
        
        <a 
          v-if="githubLink"
          :href="githubLink" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 font-medium text-sm transition-colors"
        >
          <Code class="w-4 h-4" /> Code
        </a>
      </div>
    </div>
  </div>
</template>

