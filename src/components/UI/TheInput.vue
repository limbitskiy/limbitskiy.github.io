<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="this.$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "TheInput",
  props: {
    placeholder: {
      required: true,
    },
    modelValue: {
      required: false,
    },
  },
};
</script>
