<template>
  <ul class="portfolio-list">
    <li v-for="link in props.links" :key="link">
      <a :href="link.address"
        >{{ link.name }} (<span class="accent-text">{{ link.tech }}</span
        >)</a
      >
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(["links"])

</script>

<style lang="scss" scoped>
// ul {
//   margin-left: 1rem;
// }

li {
  margin-bottom: 0.5rem;
}
</style>
