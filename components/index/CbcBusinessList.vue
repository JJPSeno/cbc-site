<template>
  <ul
    class="flex flex-col gap-4 w-full max-w-standard mx-auto"
  >
    <li
      class="w-full rounded-md p-2 shadow-xl bg-primary"
      v-for="business in businesses"
      :key="business.id"
    >
      <CbcBusinessesItem :business="business" />
    </li>
  </ul>
</template>
<script setup lang="ts">
const { businesses } = useBusiness()

</script>