
<template>
  <CbcForm
    id="register"
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
    <CbcInput
      v-model="displayName"
      label="Display Name"
      class="grow"
      :is-required="true"
    >
      <!-- <template #error>
        {{ isSubmitted?errors.password:'' }}
      </template> -->
    </CbcInput>
    <CbcInput
      v-model="firstName"
      label="First Name"
      class="grow"
    >
      <!-- <template #error>
        {{ isSubmitted?errors.password:'' }}
      </template> -->
    </CbcInput>
    <CbcInput
      v-model="lastName"
      label="Last Name"
      class="grow"
    >
      <!-- <template #error>
        {{ isSubmitted?errors.password:'' }}
      </template> -->
    </CbcInput>
    <button form="register" type="submit">Submit</button>
  </CbcForm>
</template>
<script lang="ts" setup>
const email = ref('')
const password = ref('')
const displayName = ref('')
const firstName = ref('')
const lastName = ref('')

const body = {
  email: email.value,
  password: password.value,
  displayName: displayName.value,
  firstName: firstName.value,
  lastName: lastName.value
}

</script>