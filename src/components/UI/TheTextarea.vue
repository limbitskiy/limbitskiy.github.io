<template>
  <textarea
    :cols="cols"
    :rows="rows"
    :value="modelValue"
    :placeholder="placeholder"
    @input="this.$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: "TheTextarea",
  props: {
    cols: {
      required: false,
    },
    rows: {
      required: false,
    },
    placeholder: {
      required: true,
    },
    modelValue: {
      required: false,
    },
  },
};
</script>

<style>
textarea {
  height: 250px;
}
</style>
