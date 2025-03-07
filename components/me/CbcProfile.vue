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
        {{ myProfile.display_name }}
      </h1>
      <div
        class="absolute flex w-full rounded-full"
      >
      <Avatar>
        <AvatarImage
          class="w-20 h-20"
          src="misc/test.jpg" 
          :alt="`${myProfile.display_name}'s avatar'`" />
        <AvatarFallback>{{ initials }}</AvatarFallback>
      </Avatar>
      </div>
    </div> 
    <div
      class="basis-1/2 w-full bg-neutral rounded-b-3xl" 
    >
    </div> 
  </div>
</template>
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
const { myProfile } = useProfile()
const initials = computed(() => {
  return myProfile.value.display_name?.charAt(0) || ""
})

</script>