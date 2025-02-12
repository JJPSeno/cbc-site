<template>
  <div
    v-bind="$attrs"
    class="my-4"
  >
    <label>
      <p
        v-if="!!label"
      >
        <span
          class="text-sm font-bold"
        >
          {{ label }}
        </span>
        <span
          v-if="isRequired"
          class="text-red-500"
        >
          *
        </span>
      </p>
      <p
        v-else
      >
        &#x200b;
      </p>
      <input
        v-model="modelValue"
        :type="type"
        :placeholder="!!placeholder?placeholder:''"
        class="w-full mt-2 p-2 bg-white h-11 rounded-xl"
      >
    </label>
    <div class="absolute mt-1 text-nowrap text-xs text-red-500">
      <slot name="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  label?: string
  placeholder?: string
  type?: string
  isRequired?: boolean
}

withDefaults(defineProps<Prop>(), {
  label: '',
  placeholder: '',
  type: 'text',
  isRequired: false
})

const modelValue = defineModel<string | number>()
</script>
