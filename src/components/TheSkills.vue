<template>
  <ul class="skill-list">
    <li v-for="skill in props.skills" :key="skill">
      <p>{{ skill.name }}</p>
      <TheProgressBar :prof="skill.prof" />
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
import TheProgressBar from "@/components/UI/TheProgressBar";

const props = defineProps(["skills"])

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
  list-style: disc;
  padding-left: 1rem;
}
</style>
