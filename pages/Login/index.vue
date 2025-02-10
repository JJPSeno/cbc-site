<template>
  <CbcLogin v-if="$route.query.register !== 'true'" />
  <CbcRegister v-else />
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'centered'
})
</script>
