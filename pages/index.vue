<template>
  <div 
    class="bg-pink-500/50"
  >
    <CbcHeader />
    <ul
      class="flex flex-col gap-2 h-dvh w-full bg-slate-500/50"
    >
      <li
        class="w-full h-24 rounded-md p-2 outline outline-2 outline-red-900 bg-green-500/50"
        v-for="bus in businesses"
        :key="bus.id"
      >
        <div
          class="flex"
        >
          <NuxtImg
            class="h-20 w-20" src="misc/test.jpg" width="40" height="40" 
          />
          <p
            class="ml-2"
          >
            {{ bus.companyName }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { businesses } = useBusiness()

</script>
