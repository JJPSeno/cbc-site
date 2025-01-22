<template>
  <div
    class="flex"
  >
    <NuxtImg
      class="h-20 w-20 border-2 border-black" src="misc/test.jpg" width="40" height="40" 
    />
    <div
      class="ml-2"
    >
      <p
        class="text-xl"
      >
        {{ props.business.companyName }}
      </p>
      <p>
        {{ props.business.address }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{business: Business}>()

</script>