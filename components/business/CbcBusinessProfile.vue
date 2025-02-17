<template>
  <div
    class="w-full min-h-screen rounded-md p-2 shadow-xl bg-white"
  >
    {{ businessProfile?.companyName }}
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { businesses } = useBusiness()
const businessProfile = ref(businesses.value.find((b) => b.id == route.params.id))
onMounted(() => {
  if (!businessProfile.value) {
    return navigateTo('/business')
  }
})
</script>