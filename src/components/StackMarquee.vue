<script setup>
const stacks = [
  'Vue.js',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Firebase',
  'Figma',
  'Vercel',
  'HTML5',
  'CSS3'
]

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...stacks, ...stacks]
</script>

<template>
  <div class="relative w-full overflow-hidden border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0a0a0a]/50 py-4 flex items-center my-16 md:my-24">
    
    <!-- Gradient Masks for seamless fade on edges -->
    <div class="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

    <div class="marquee-track flex whitespace-nowrap">
      <!-- The items -->
      <div 
        v-for="(item, index) in marqueeItems" 
        :key="index"
        class="inline-flex items-center"
      >
        <span class="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
          {{ item }}
        </span>
        <span class="mx-6 md:mx-12 text-gray-300 dark:text-gray-700 font-bold opacity-50">•</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  width: max-content;
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
