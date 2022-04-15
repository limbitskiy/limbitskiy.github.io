<template>
  <ul class="skill-list">
    <li v-for="skill in skills" :key="skill">
      <p>{{ skill.name }}</p>
      <!-- <progress max="100" :value="skill.prof"></progress> -->
      <TheProgressBar :prof="skill.prof" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheSkills",
  props: ["skills"],
};
</script>

<style lang="scss" scoped>
progress {
  transition: 0.3s;
}

p {
  margin: 0;
}

li {
  margin-bottom: 1rem;
}

.skill-list {
  margin-left: 1.5rem;
  list-style: disc;
}
</style>
