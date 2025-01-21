<template>
  <ul
    class="flex flex-col gap-4 w-full"
  >
    <li
      class="w-full h-24 rounded-md p-2 outline outline-2 outline-black bg-white"
      v-for="business in businesses"
      :key="business.id"
    >
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
            {{ business.companyName }}
          </p>
          <p>
            {{ business.address }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
const { businesses } = useBusiness()

</script>