<template>
  <TheInput v-model="name" />
  <TheInput v-model="prof" />
  <TheBtn @click="addSkill">Add skill</TheBtn>
</template>

<script>
export default {
  name: "TheSettings",
  data() {
    return {
      name: "",
      prof: "",
    };
  },
  methods: {
    addSkill() {
      this.$store.commit("addSkill", {
        name: this.name,
        profficiency: this.prof,
      });
    },
  },
};
</script>

<style></style>
