<template>
    <div class="locale-picker">
        <img @click="this.$emit('changeLocale', locale.name)" v-for="locale in languages" :key="locale"
            :src="locale.flag" :alt="locale.name">
    </div>
</template>
<script>
export default {
    name: 'TheLocalePicker',
    props: ['languages'],
}
</script>
<style lang="scss" scoped>
.locale-picker {
    display: flex;
    gap: .3rem;

    >* {
        cursor: pointer;
        width: 15px;
    }
}
</style>