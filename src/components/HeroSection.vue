<script setup>
</script>

<template>
  <section class="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center pt-20">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', stiffness: 50 } }"
      class="max-w-4xl mx-auto"
    >
      <div class="mb-6 inline-block">
        <img src="/images/profile-pic.png" alt="Daniel Akanmu" class="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto" />
      </div>
      
      <h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-gradient">
        Software Engineer <br/> & Frontend Specialist.
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
        I build immersive frontend experiences, real-time systems, and modern web applications designed to feel fast, intentional, and engaging.
      </p>
    </div>
  </section>
</template>
