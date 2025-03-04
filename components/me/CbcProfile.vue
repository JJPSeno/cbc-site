<template>
  <div 
    class="flex relative flex-col h-64 w-full max-w-standard mx-auto rounded-3xl shadow-xl overflow-hidden"
  > 
    <div
      class="basis-1/2 w-full bg-accent rounded-t-3xl flex" 
    >
      <h1
        class="relative font-400 text-6xl content-center w-full"
      >
        {{ myProfile.display_name }}
      </h1>
      <div
        class="absolute flex w-full"
      >
        <NuxtImg
          class="relative -left-24 -top-20"
          preload
          height="400" 
          width="400" 
          src="icons/profile.svg" 
        />
      </div>
    </div> 
    <div
      class="basis-1/2 w-full bg-neutral rounded-b-3xl" 
    >
    </div> 
  </div>
</template>
<script setup lang="ts">
const { myProfile } = useProfile()

</script>