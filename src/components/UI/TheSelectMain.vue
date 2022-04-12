<template>
  <div class="select-item">
    <label><slot></slot></label>
    <select @change="changeCategory($event)">
      <option disabled selected>Выберите значение:</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TheSelectMain",
  emits: ["update:modelValue", "reset"],
  props: ["options", "modelValue"],
  methods: {
    changeCategory($event) {
      this.$emit("update:modelValue", $event.target.value);
      this.$emit("reset");
    },
  },
};
</script>

<style lang="scss" scoped>
.select-item {
  display: flex;
  flex-direction: column;
  gap: 5px;

  select {
    height: 45px;
    border: none;
    border-radius: 8px;
    background-color: white;
    padding-inline: 5px;
    font-size: 1rem;
    font-family: var(--font-roboto);
    color: grey;
  }
}
</style>
