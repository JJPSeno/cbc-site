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
const businesses = ref<Business[]>([
  {
    id: "b0237536-0d2f-4140-9f22-45ecc5c6b767",
    companyName: "Juan's Sari-Sari Store",
    address: "123 Mabuhay St, Quezon City",
    contactInfo: {
      email: "juansari@email.com",
      phoneNumber: "09*********",
    }
  },
  {
    id: "819006bf-13f8-4bb8-8c26-5b666ceb36ca",
    companyName: "Pedro's Carinderia",
    address: "456 Bayanihan Ave, Manila",
    contactInfo: {
      email: "pedrocarinderia@email.com", 
      phoneNumber: "09*********"
    },
  },
  {
    id: "9e719a5d-a45e-4e44-b201-42f8a0197934",
    companyName: "Maria’s Laundry Service",
    address: "789 Laban St, Cebu City",
    contactInfo: {
      phoneNumber: "09*********"
    },
  },
])
</script>
