<template>
  <ul
    class="flex flex-col gap-4 w-full"
  >
    <li
      class="w-full h-24 rounded-md p-2 outline outline-2 outline-black bg-white"
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