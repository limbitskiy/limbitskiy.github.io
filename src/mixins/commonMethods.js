export default {
  computed: {
    about() {
      return this.$store.state.about;
    },
    avatar() {
      return this.$store.state.avatar;
    },
    myPages() {
      return this.$store.state.myPages;
    },
    skillsList() {
      return this.$store.state.skills;
    },
    experience() {
      return this.$store.state.experience;
    },
    showModal() {
      return this.$store.state.showModal;
    },
    locales() {
      return this.$store.state.locales;
    }
  },
};
