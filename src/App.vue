<script setup>
import HeroSection from './components/HeroSection.vue'
import StackMarquee from './components/StackMarquee.vue'
import BentoGrid from './components/BentoGrid.vue'
import ContactSection from './components/ContactSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
    <!-- Fixed theme toggle — always visible over all sections -->
    <ThemeToggle />

    <main>
      <HeroSection />
      <StackMarquee />
      <BentoGrid />
    </main>

    <ContactSection />
  </div>
</template>
