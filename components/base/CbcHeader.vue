<template>
  <section
    class="fixed w-full h-24 pb-0.5 px-0 sm:px-40 flex justify-between bg-primary"  
  >
    <div
      class="flex items-center justify-center px-16 bg-white outline outline-2 outline-black border-t-2 border-black"
    >
      Header
    </div>
    <nav
      class="flex *:flex *:items-center *:justify-center *:px-8 *:bg-white *:outline *:outline-2 *:outline-black *:border-t-2 *:border-black"
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