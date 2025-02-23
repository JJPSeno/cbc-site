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
    <button form="login" type="submit">Login</button>
    <NuxtLink 
      :to="{path: '/login', query: { register: 'true' } }"
      class="w-full text-center"
    >
      Register
    </NuxtLink>
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