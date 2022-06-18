<template>
    <div class="locale-picker">
        <img @click="this.$emit('changeLocale', locale.name)" v-for="locale in props.languages" :key="locale"
            :src="locale.flag" :alt="locale.name">
    </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps(['languages'])
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