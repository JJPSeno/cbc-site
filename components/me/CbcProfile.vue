<template>
  <div 
    class="flex relative flex-col h-64 w-full rounded-3xl shadow-xl"
  > 
    <div
      class="basis-1/2 w-full bg-slate-200/50 rounded-t-3xl" 
    >
      <NuxtImg
        preload
        class="absolute top-16 left-8"
        height="128" 
        width="128" 
        src="icons/profile.svg" 
      />
    </div> 
    <div
      class="basis-1/2 w-full bg-black/50 rounded-b-3xl" 
    >
    </div> 
  </div>
</template>
<script setup lang="ts">
const { myProfile } = useProfile()

</script>