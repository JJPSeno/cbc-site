<template>
  <Avatar>
    <AvatarImage
      :src="props.src" 
      :alt="`${displayName}'s avatar'`"
    />
    <!-- <AvatarFallback>{{ initials }}</AvatarFallback> -->
  </Avatar>
</template>
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
interface Prop {
  src?: string
  displayName: string
}

const props = withDefaults(defineProps<Prop>(), {
  src: 'images/icons/profile.svg',
})

const initials = computed(() => {
  return props.displayName?.charAt(0) || ""
})
</script>