<template>
  <NuxtLink
    :to="`/business/${props.business.id}`"
  >
    <div
      class="flex"
    >
      <NuxtImg
        class="h-20 w-20 border-2 border-black" src="misc/test.jpg" width="40" height="40"
        preload
      />
      <div
        class="ml-2"
      >
        <p
          class="text-xl"
        >
          {{ props.business.companyName }}
        </p>
        <p>
          {{ props.business.address }}
        </p>
        <p>
          <span 
            v-for="contact in props.business.contactInfo" 
            class="mr-2"
          >
            {{ contact }}
          </span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{business: Business}>()

</script>