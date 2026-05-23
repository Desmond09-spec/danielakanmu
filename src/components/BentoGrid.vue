<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'RuthKadiri247',
    description: 'A YouTube channel platform featuring a large collection of Nollywood movies and short videos. Starring Ruth Kadiri and other Nigerian actors with over 3 million subscribers.',
    image: '/images/ruthkadiri247_white-border.png',
    liveLink: 'https://ruthkadiri247.vercel.app',
    githubLink: 'https://github.com/RuthKadiri247',
    spanCols: 2
  },
  {
    title: 'AlexisTradeLinks',
    description: 'Electronics, expert inverter/CCTV installations, computer sales/servicing, and mobile/web app development.',
    image: '/images/AlexisTradeLinks_profile.png',
    liveLink: 'https://alexis-trade-links.vercel.app',
    spanCols: 1
  },
  {
    title: 'Gloss and Garb',
    description: 'Handmade lip glosses & beauty essentials. Enhancing natural beauty with unique products.',
    image: '/images/glossandgarb.png',
    liveLink: 'https://glossandgarb.vercel.app',
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
