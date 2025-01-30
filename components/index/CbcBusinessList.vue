<template>
  <main
    class="h-dvh pt-28 pb-2 px-0 sm:px-40 bg-rich-black"
  >
    <ul
      class="flex flex-col gap-4 w-full"
    >
      <li
        class="w-full rounded-md p-2 outline outline-2 outline-black bg-white"
        v-for="business in businesses"
        :key="business.id"
      >
        <CbcBusinessesItem :business="business" />
      </li>
    </ul>
  </main>
</template>
<script setup lang="ts">
const { businesses } = useBusiness()

</script>