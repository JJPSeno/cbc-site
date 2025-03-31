<template>
  <div 
    class="flex flex-col h-64 w-full rounded-none md:max-w-standard md:mx-auto md:rounded-3xl shadow-none md:shadow-xl overflow-hidden border-b border-gray-400"
  > 
    <div
      class="basis-1/2 w-full bg-accent flex" 
    >
      <div
        class="relative flex w-full rounded-full items-center justify-center"
      >
        <CbcAvatar
          class="absolute translate-y-12"
          size="xl"
          src="misc/test.jpg"
        />
      </div>
    </div> 
    <div
      class="basis-1/2 w-full bg-neutral" 
    >
    <h1
        class="relative font-400 text-6xl content-center w-full text-center"
      >
        {{ myProfile.displayName }}
      </h1>
    </div> 
  </div>
</template>
<script setup lang="ts">
const { myProfile } = useProfile()

</script>