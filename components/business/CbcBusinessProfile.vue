<template>
  <div>
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