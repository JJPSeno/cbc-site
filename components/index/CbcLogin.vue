<template>
  <form
    class="flex flex-col"
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
      <button type="submit">Login</button>
      <button >Register</button>
  </form>
</template>
<script lang="ts" setup>
const email = ref('')
const password = ref('')

const body = {
  email: email.value,
  password: password.value
}

</script>