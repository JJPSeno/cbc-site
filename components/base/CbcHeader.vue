<template>
  <section
    class="w-full h-24 pb-0.5 flex justify-between bg-rich-black text-white"  
  >
    <div
      class="flex items-center justify-center px-16 bg-blue-500/50 border-red-500 border-2"
    >
      Header
    </div>
    <nav
      class="flex *:flex *:items-center *:justify-center *:px-8 *:bg-orange-500/50 *:border-red-500 *:border-2"
    >
      <NuxtLink
        to="/"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/me"
      >
        Profile
      </NuxtLink>
    </nav>
  </section>
</template>