<script setup>
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <section class="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center pt-20 overflow-hidden bg-white dark:bg-[#0a0a0a]">
    
    <!-- LAYER 1: Left Faded Portrait -->
    <div class="absolute left-0 top-0 bottom-0 w-1/2 md:w-5/12 z-0 hidden md:block opacity-40 dark:opacity-20 pointer-events-none mix-blend-luminosity">
      <img 
        src="/images/profile-pic-portrait.png" 
        alt="Daniel Akanmu Portrait" 
        class="w-full h-full object-cover object-left-top"
        style="mask-image: linear-gradient(to right, black 20%, transparent 100%); -webkit-mask-image: linear-gradient(to right, black 20%, transparent 100%);"
      />
    </div>

    <!-- LAYER 2: Right Slanted iPhone -->
    <div 
      class="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 z-0 hidden md:block pointer-events-none opacity-60 dark:opacity-40"
      v-motion
      :initial="{ y: -20 }"
      :enter="{ y: 20, transition: { duration: 4000, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }"
    >
      <div 
        class="w-[300px] h-[600px] bg-black rounded-[50px] border-[8px] border-gray-800 dark:border-gray-700 shadow-2xl relative overflow-hidden"
        style="transform: perspective(1200px) rotateY(-25deg) rotateX(10deg) rotateZ(-5deg); transform-style: preserve-3d;"
      >
        <!-- Dynamic Island / Notch -->
        <div class="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
        
        <!-- Screen Content (Placeholder) -->
        <div class="w-full h-full bg-gray-900 rounded-[42px] overflow-hidden relative">
          <img 
            src="https://placehold.co/1170x2532/1a1a1a/ffffff?text=Project+App" 
            alt="Project Screenshot" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Volume / Power buttons (subtle details) -->
        <div class="absolute -left-[10px] top-24 w-[2px] h-8 bg-gray-700 rounded-l-md"></div>
        <div class="absolute -left-[10px] top-36 w-[2px] h-12 bg-gray-700 rounded-l-md"></div>
        <div class="absolute -left-[10px] top-52 w-[2px] h-12 bg-gray-700 rounded-l-md"></div>
        <div class="absolute -right-[10px] top-40 w-[2px] h-16 bg-gray-700 rounded-r-md"></div>
      </div>
    </div>

    <!-- LAYER 3: Foreground Content -->
    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', stiffness: 50 } }"
      class="max-w-4xl mx-auto relative z-10"
    >
      <!-- Micro-Status Badge -->
      <div class="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-sm">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-xs font-medium tracking-wide uppercase text-gray-600 dark:text-gray-300">Available for freelance</span>
      </div>
      
      <h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-gradient" style="text-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        Software Engineer <br/> & Frontend Specialist.
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md">
        I build immersive frontend experiences, real-time systems, and modern web applications designed to feel fast, intentional, and engaging.
      </p>

      <!-- Action Pills -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="#projects" 
          class="flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg hover:opacity-80 transition-opacity w-full sm:w-auto justify-center shadow-xl"
        >
          View Selected Work <ArrowRight class="w-5 h-5" />
        </a>
        <a 
          href="mailto:digitechfrontendwebdevelopment@gmail.com" 
          class="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/50 backdrop-blur-md text-black dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>
