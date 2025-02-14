<template>
  <main
    class="w-1/3"
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
