<template>
  <section
    id="header"
    class="fixed w-full h-24 pb-0.5 px-0 sm:px-40 bg-accent"
  >
    <section
      class="max-w-standard flex justify-between items-center absolute w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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
  </section>
</template>