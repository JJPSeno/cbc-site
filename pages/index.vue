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
        v-for="bus in buses"
        :key="bus.id"
      >
        {{ bus.a }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">

const buses = ref([
{
  id: 0,
  a: '1asdasda',
  b: '1asdasd',
  c: ['1sadasd', '1asdasdas']
},
{
  id: 1,
  a: '2asdasda',
  b: '2asdasd',
  c: ['2sadasd', '2asdasdas']
},
{
  id: 2,
  a: '3asdasda',
  b: '3asdasd',
  c: ['3sadasd', '3asdasdas']
}
])
</script>
