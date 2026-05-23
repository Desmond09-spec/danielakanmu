<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'StreamBible',
    description: 'An open-source, high-performance, offline-resilient web application designed to instantly display multilingual Bible verses on church livestreams with zero latency.',
    image: '/images/streambible-dark.png',
    liveLink: 'https://streambible.vercel.app',
    githubLink: 'https://github.com/Desmond09-spec/streambible',
    spanCols: 2
  },
  {
    title: 'Noble Apparel',
    description: 'Bespoke fashion consultations and tailored luxury garments. Discover vibrant statement pieces and high-end cultural wear.',
    image: '/images/NOBLE-APPAREL-dark.png',
    liveLink: 'https://nobleapparel.vercel.app',
    spanCols: 1
  },
  {
    title: 'Potio Beauty',
    description: 'A custom-built e-commerce frontend showcasing botanical skincare elixirs with a luxurious glassmorphism design system.',
    image: '/images/potiobeauty.png',
    liveLink: 'https://potio-elegance-3d1f0904.vercel.app',
    spanCols: 1
  },
  {
    title: 'Keelz Treats',
    description: 'Based in Ibadan, offering delicious Nigerian small chops like spring rolls and samosas for all gatherings and events.',
    image: '/images/keelztreats.png',
    liveLink: 'https://keelztreats.vercel.app',
    spanCols: 1
  },
  {
    title: 'Luxuria by Tiannah',
    description: 'Elegant jewelry like necklaces and watches, crafted to tell your unique story.',
    image: '/images/luxuriabytiannah.png',
    liveLink: 'https://luxuriabytiannah.vercel.app',
    spanCols: 1
  }
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-24" id="projects">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', stiffness: 50, delay: 200 } }"
      class="mb-16"
    >
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Selected Work.</h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light">A collection of platforms and digital experiences.</p>
    </div>
    
    <div 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="project.title"
        v-bind="project"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
      />
    </div>
  </section>
</template>
