<template>
  <div 
    class="relative flex flex-col h-64 w-full rounded-none md:max-w-standard md:mx-auto md:rounded-3xl shadow-none md:shadow-xl overflow-hidden border-b border-gray-400"
  > 
    <div
      class="relative basis-1/2 w-full bg-accent flex" 
    />
    <div
      class="relative basis-1/2 w-full bg-neutral"
    />
    <div
      class="absolute w-full h-full flex items-center ml-44"
    >
      <CbcAvatar
        class="mr-4"
        size="xl"
        src="misc/test3.png"
        as="img"
      />
      <div
        class="flex mb-20 items-end"
      >
        <h1
          class="font-400 text-6xl mr-4"
        >
          {{ myProfile.displayName }}
        </h1>
        <p
          class="mb-2"
        >
          {{ myProfile.email }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { myProfile } = useProfile()

</script>