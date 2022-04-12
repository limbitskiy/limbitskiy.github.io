<template>
  <ul class="portfolio-list">
    <li v-for="link in links" :key="link">
      <a :href="link.address"
        >{{ link.name }} (<span class="accent-text">{{ link.tech }}</span
        >)</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "LinksList",
  props: {
    links: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
// ul {
//   margin-left: 1rem;
// }

li {
  margin-bottom: 0.5rem;
}
</style>
