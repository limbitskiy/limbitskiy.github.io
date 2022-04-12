<template>
  <div class="select-item">
    <label><slot></slot></label>
    <select v-model="defaultValue" @change="changeSubcategory($event)">
      <option value="" selected>Выберите значение:</option>
      <option v-for="(option, key) in options" :key="key" :value="key">
        {{ key }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TheSelectSub",
  data() {
    return {
      defaultValue: "",
    };
  },
  emits: ["update:modelValue"],
  props: ["options", "modelValue"],
  methods: {
    changeSubcategory($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
  watch: {
    options() {
      this.defaultValue = "";
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
