<script>
export default {
  name: "TheBtn",
  props: {
    color: {
      required: true,
    },
    href: {
      required: false,
    },
    id: {
      required: false,
    },
    onclick: {
      required: false,
    },
  },
  computed: {
    btnStyle() {
      return "--btn-color:" + this.color;
    },
  },
};
</script>

<template>
  <a :href="href" :style="btnStyle" :id="id" :onclick="onclick">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
a {
  cursor: pointer;
  font-size: var(--font-small);
  font-weight: 600;
  border: 1px solid var(--btn-color);
  border-radius: var(--border-radius);
  color: var(--btn-color);
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  display: grid;
  place-items: center;

  &:hover {
    background-color: var(--accent-color1);
    color: white;
  }
}
</style>
