<template>
  <section
    class="fixed w-full h-24 pb-0.5 px-0 sm:px-40 flex justify-between items-center bg-accent"
  >
    <div
      class="flex items-center justify-center px-16 bg-primary h-20"
    >
      Header
    </div>
    <nav
      class="flex basis-3 gap-2 *:flex *:items-center *:justify-center *:px-8 h-16 *:rounded-lg *:bg-primary"
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
      <NuxtLink
        to="/login"
      >
        Login
      </NuxtLink>
    </nav>
  </section>
</template>