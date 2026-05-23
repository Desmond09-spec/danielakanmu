<script setup>
const stacks = [
  'Vue.js',
  'Tailwind CSS',
  'JavaScript/Typescript',
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Supabase',
  'WebRTC',
  'mDNS',
  'Git / GitHub',
  'Vercel',
  'OWASP',
  'HTML5',
  'CSS3',
]

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...stacks, ...stacks]
</script>

<template>
  <div 
    class="relative w-full overflow-hidden border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0a0a0a]/50 py-4 flex items-center my-16 md:my-24"
    style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
  >
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
