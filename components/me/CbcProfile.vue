<template>
  <div 
    class="flex relative flex-col h-64 w-full max-w-standard mx-auto rounded-3xl shadow-xl overflow-hidden"
  > 
    <div
      class="basis-1/2 w-full bg-accent rounded-t-3xl flex" 
    >
      <h1
        class="relative font-400 text-6xl content-center w-full text-center"
      >
        {{ myProfile.displayName }}
      </h1>
      <div
        class="absolute flex w-full rounded-full"
      >
      <CbcAvatar
        class="ml-10 mt-10"
        size="lg"
        src="misc/test.jpg"
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