<template>
  <div
    class="glass rounded-3xl overflow-hidden md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row"
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, type: 'spring', stiffness: 50 } }"
  >
    <!-- Profile Photo -->
    <div class="lg:w-64 xl:w-72 shrink-0 relative overflow-hidden bg-gray-100 dark:bg-gray-900">
      <img
        src="/images/profile-pic.png"
        alt="Daniel Akanmu"
        class="w-full h-56 lg:h-full object-cover object-top"
      />
      <!-- Subtle gradient fade on the right edge (desktop only) -->
      <div class="hidden lg:block absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-black/40 to-transparent pointer-events-none"></div>
    </div>

    <!-- Content -->
    <div class="p-8 lg:p-10 flex flex-col justify-between flex-grow">
      <div>
        <!-- Section label -->
        <span class="text-xs font-bold tracking-[0.18em] uppercase text-amber-600 dark:text-amber-400 mb-3 block">
          About
        </span>

        <h2 class="text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">
          Daniel Akanmu
        </h2>
        <p class="text-gray-400 dark:text-gray-500 text-sm font-medium mb-6 tracking-wide">
          Software Engineer &middot; Ibadan, Nigeria
        </p>

        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-light max-w-2xl">
          I build digital experiences and shape brand identities. I focus on intentional minimalism, fluid interactions, and robust systems built for real-world performance. My work spans high-performance frontend development, UI/UX, and visual identity — operating at the intersection of engineering and design.
        </p>
      </div>

      <!-- Stats row -->
      <div class="flex flex-wrap items-center gap-x-6 gap-y-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
        <div class="flex flex-col gap-0.5">
          <span class="text-2xl font-extrabold tracking-tight leading-none">3+</span>
          <span class="text-[11px] text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest">
            Years exp.
          </span>
        </div>

        <div class="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>

        <div class="flex flex-col gap-0.5">
          <span class="text-2xl font-extrabold tracking-tight leading-none">10+</span>
          <span class="text-[11px] text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest">
            Projects
          </span>
        </div>

        <div class="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>

        <div class="flex flex-col gap-0.5">
          <span class="text-2xl font-extrabold tracking-tight leading-none text-emerald-500">Open</span>
          <span class="text-[11px] text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest">
            To work
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
