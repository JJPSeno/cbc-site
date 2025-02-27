<template>
  <CbcForm
    id="login"
  >
    <CbcInput
        v-model="email"
        label="Email"
        placeholder="email@example.com"
        class="grow"
        :is-required="true"
    >
      <!-- <template #error>
        {{ isSubmitted?errors.email:'' }}
      </template> -->
    </CbcInput>
    <CbcInput
      v-model="password"
      label="Password"
      class="grow"
      :is-required="true"
    >
      <!-- <template #error>
        {{ isSubmitted?errors.password:'' }}
      </template> -->
    </CbcInput>
    <button 
      class="w-full text-center bg-accent p-4 rounded-full text-black"
      form="login" 
      type="submit"
    >
      Login
    </button>
    <section
      class="flex align-middle w-full"
    >
      <p
        class="inline-block grow content-center text-black"
      >
        New to Cebu Business Connect?
      </p>
      <NuxtLink 
        :to="{path: '/login', query: { register: 'true' } }"
        class="grow text-center bg-accent p-2 rounded-xl text-black"
      >
        Register
      </NuxtLink>
    </section>
  </CbcForm>
</template>
<script lang="ts" setup>
const email = ref('')
const password = ref('')

const body = {
  email: email.value,
  password: password.value
}

</script>