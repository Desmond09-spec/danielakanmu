<script setup>
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <section class="relative min-h-screen pt-20 overflow-hidden bg-white dark:bg-[#0a0a0a] flex items-center">
    
    <!-- Mobile Subtle Code Background -->
    <div 
      class="absolute inset-0 flex lg:hidden justify-center items-center overflow-hidden pointer-events-none z-0 select-none opacity-[0.05] dark:opacity-[0.03]" 
      style="mask-image: radial-gradient(circle at center, black 0%, transparent 70%); -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 70%);"
    >
      <div class="font-mono text-justify break-all leading-relaxed text-[10px] sm:text-xs text-black dark:text-white w-[200%] h-[200%] -rotate-[15deg]">
        <span v-for="i in 30" :key="i">/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/ /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/ /&lt;([a-z]+)([^&lt;]+)*(?:&gt;(.*)&lt;\/\1&gt;|\s+\/&gt;)/g /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/ /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/ </span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      
      <!-- Text Content (Left Column) -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', stiffness: 50 } }"
        class="text-center lg:text-left relative z-10 flex flex-col items-center lg:items-start pt-10 lg:pt-0"
      >
        <!-- Recent Release Badge -->
        <a href="https://github.com/Desmond09-spec/streambible" target="_blank" rel="noopener noreferrer" class="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group max-w-full">
          <span class="text-xs font-bold tracking-wide uppercase text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-700 pr-3 whitespace-nowrap shrink-0">Just Shipped</span>
          <span class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors truncate">StreamBible: Open-source zero-latency presentation</span>
          <ArrowRight class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:translate-x-1 shrink-0" />
        </a>
        
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-gradient leading-tight" style="text-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          Software Engineer <br class="hidden lg:block"/> & Frontend Specialist.
        </h1>
        
        <p class="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
          I build immersive frontend experiences, real-time systems, and modern web applications designed to feel fast, intentional, and engaging.
        </p>

        <!-- Action Pills -->
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#projects" 
            class="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg hover:opacity-80 transition-opacity shadow-xl"
          >
            View Selected Work <ArrowRight class="w-5 h-5" />
          </a>
          <a 
            href="mailto:digitechfrontendwebdevelopment@gmail.com" 
            class="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/50 backdrop-blur-md text-black dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      <!-- iPhone Showcase (Hidden on Mobile, Right Column on Desktop) -->
      <div 
        class="hidden lg:flex justify-center items-center w-full z-0 opacity-90 pointer-events-auto"
        v-motion
        :initial="{ y: -20 }"
        :enter="{ y: 20, transition: { duration: 4000, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }"
      >
        <img 
          src="/images/iPhone-frame-capture.png"
          alt="Project Mockup"
          class="w-[300px] md:w-[350px] lg:w-[400px] object-contain shadow-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style="transform: perspective(1200px) rotateY(-25deg) rotateX(10deg) rotateZ(-5deg); transform-style: preserve-3d;"
        />
      </div>

    </div>
  </section>
</template>
