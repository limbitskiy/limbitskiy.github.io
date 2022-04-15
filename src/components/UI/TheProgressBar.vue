<template>
    <progress max="100" :value="progress" />
</template>
<script>
export default {
    name: "TheProgressBar",
    data() {
        return {
            progress: 0
        }
    },
    props: ["prof"],
    mounted() {
        const interval = setInterval(() => {
            if (this.progress < this.prof) {
                this.progress += 1

            } else {
                clearInterval(interval)
            }
        }, 10)
    }
}
</script>
<style lang="scss" scoped>
</style>