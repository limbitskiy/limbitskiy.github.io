<template>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" :style="`width: ${progress}%`"></div>
    </div>
</template>
<script setup>
import { ref, defineProps, onMounted } from 'vue'

const props = defineProps(['prof'])
let progress = ref(0)

onMounted(() => {
    const interval = setInterval(() => {
        if (progress.value < props.prof) {
            progress.value += 10
        } else {
            clearInterval(interval)
        }
    }, 100)
})
</script>