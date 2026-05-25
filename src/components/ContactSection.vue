<script setup>
import { Mail, MessageCircle } from '@lucide/vue'
</script>

<template>
  <section class="py-24 px-6 border-t border-gray-200 dark:border-gray-800">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', stiffness: 50 } }"
      class="max-w-4xl mx-auto text-center"
    >
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Ready when you are.</h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
        Currently accepting select freelance projects, contract roles, and full-time engineering opportunities. Whether you want to build a refined digital experience from scratch or elevate an existing system, let's start the conversation.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="mailto:digitechfrontendwebdevelopment@gmail.com" 
          class="flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg hover:opacity-80 transition-opacity w-full sm:w-auto justify-center"
        >
          <Mail class="w-5 h-5" /> Email Me
        </a>
        
        <a 
          href="https://wa.me/2349161735844" 
          class="flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] text-black dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto justify-center"
        >
          <MessageCircle class="w-5 h-5 text-green-500" /> WhatsApp
        </a>
      </div>
      
      <div class="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Daniel Akanmu. All rights reserved.</p>
        
        <div class="flex gap-6">
          <a href="https://github.com/Desmond09-spec" target="_blank" rel="noopener noreferrer" class="hover:text-amber-600 dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/thedanielakanmu" target="_blank" rel="noopener noreferrer" class="hover:text-amber-600 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.x.com/thedanielakanmu" target="_blank" rel="noopener noreferrer" class="hover:text-amber-600 dark:hover:text-white transition-colors">Twitter (X)</a>
          <a href="https://vm.tiktok.com/ZMSb5ee6w/" target="_blank" rel="noopener noreferrer" class="hover:text-amber-600 dark:hover:text-white transition-colors">TikTok</a>
        </div>
      </div>
    </div>
  </section>
</template>
