<template>
    <div class="locale-picker">
        <img @click="emit('changeLocale', locale.name)" v-for="locale in props.languages" :key="locale"
            :src="locale.flag" :alt="locale.name">
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['languages'])
const emit = defineEmits(['changeLocale'])
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