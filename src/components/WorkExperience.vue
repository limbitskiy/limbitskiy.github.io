<template>
  <ul class="portfolio-list">
    <li v-for='exp in props.experience' :key="exp">
      <p class="title">{{ $t("experience." + exp + ".title") }}</p>
      <p class="years">{{ $t("experience." + exp + ".years") }}</p>
      <p class="desc">{{ $t("experience." + exp + ".desc") }}</p>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(["experience"])

</script>

<style lang="scss" scoped>
.title {
  font-size: var(--font-big);
  // color: var(--black-color);
  margin: 0;
}

.years {
  font-size: var(--font-small);
  font-style: italic;
  color: var(--lightgrey-text);
  margin-bottom: 0.5rem;
}
</style>
