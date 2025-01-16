<template>
  <div 
    class="bg-pink-500/50"
  >
    <CbcHeader />
    <ul
      class="flex flex-col gap-2 h-dvh w-full bg-slate-500/50"
    >
      <li
        class="w-full rounded-md outline outline-2 outline-red-900 bg-green-500/50"
        v-for="bus in businesses"
        :key="bus.id"
      >
        {{ bus.companyName }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { businesses } = useBusiness()

</script>
