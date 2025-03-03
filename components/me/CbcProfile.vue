<template>
  <div 
    class="flex relative flex-col h-64 w-full max-w-standard mx-auto rounded-3xl shadow-xl"
  > 
    <div
      class="basis-1/2 w-full bg-accent rounded-t-3xl content-end" 
    >
      <div
        class="absolute top-16 left-8 flex"
      >
        <NuxtImg
          preload
          height="128" 
          width="128" 
          src="icons/profile.svg" 
        />
        <h1
          class="relative ml-2 top-6 font-400 text-3xl"
        >
          {{ myProfile.display_name }}
        </h1>
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