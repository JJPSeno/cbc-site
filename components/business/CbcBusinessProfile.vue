<template>
  <div
    class="w-full min-h-screen rounded-md p-2 shadow-xl bg-white flex"
  >
    <div>
      <NuxtImg
        class="aspect-square" src="misc/test.jpg" width="250" height="250"
        preload
      />
    </div>
    <div
      class="flex flex-col"
    >
      <p
        class="p-2"
      >
        Company name: {{ businessProfile?.companyName }}
      </p>
      <p
        class="p-2"
      >
        Address: {{ businessProfile?.address }}
      </p>
      <p
        class="p-2"
      >
        Contact Info:
      </p>
      <div
        class="ml-12"
      >
        <p
          class="p-2"
        >
          {{ businessProfile?.contactInfo.phoneNumber }}
        </p>
        <p
          v-if="businessProfile?.contactInfo.email"
          class="p-2"
        >
          {{ businessProfile?.contactInfo.email }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { businesses } = useBusiness()
const businessProfile = ref(businesses.value.find((b) => b.id == route.params.id))
onMounted(() => {
  console.log(businessProfile.value)
  if (!businessProfile.value) {
    return navigateTo('/business')
  }
})
</script>