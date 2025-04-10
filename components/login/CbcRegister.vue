<template>
  <CbcForm
    id="register"
    class="text-black pt-40 md:pt-10"
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
      v-model="confirmPassword"
      label="Confirm Password"
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
    <CbcCheckbox
      class="text-black"
    />
    <button
      class="w-full text-center bg-accent mt-3 p-4 rounded-full text-black"
      form="register" type="submit"
    >
      Submit
    </button>
  </CbcForm>
</template>
<script lang="ts" setup>
import CbcCheckbox from '../base/CbcCheckbox.vue'
import { z } from 'zod'

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Invalid email.' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please confirm your password.' }),
    displayName: z
      .string()
      .min(1, { message: 'Display name is required.' }),
    firstName: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters.' })
      .max(50, { message: 'First name is too long.' })
      .regex(/^[a-zA-Z]+$/, { message: 'First name must contain only letters.' }),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters.' })
      .max(50, { message: 'Last name is too long.' })
      .regex(/^[a-zA-Z]+$/, { message: 'Last name must contain only letters.' }),
    bio: z
      .string()
      .max(500, { message: 'Bio must be under 500 characters.' })
      .optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })
)

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const displayName = ref('')
const firstName = ref('')
const lastName = ref('')
const bio = ref('')

const body = {
  email: email.value,
  password: password.value,
  confirmPassword: confirmPassword.value,
  displayName: displayName.value,
  firstName: firstName.value,
  lastName: lastName.value,
  bio: bio.value,
}

</script>