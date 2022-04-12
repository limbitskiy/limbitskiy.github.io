<template>
  <div class="overlay">
    <div class="window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(360, 100%, 100%, 0.3);
  display: grid;
  place-items: center;

  .window {
    position: absolute;
    min-width: 15rem;
    min-height: 15rem;
    border: 1px solid grey;
    background-color: white;
    padding: 1rem;
  }
}
</style>
