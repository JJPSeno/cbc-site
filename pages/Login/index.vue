<template>
  <main
    class="w-full md:w-1/3 max-w-standard"
  >
    <CbcLogin v-if="$route.query.register !== 'true'" />
    <CbcRegister v-else />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'centered'
})
</script>
