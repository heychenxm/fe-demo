<template>
    <div ref="container" class="box">box</div>
    <div @click="off">关闭</div>
</template>

<script setup lang="ts">
import { useEventListener } from '../composables/useAddEventListen';
import { ref } from 'vue';

const container = ref()
    const off = useEventListener(container,'click', () => {
        console.log('监听到点击事件');
    });
</script>
<style>
    .box{
        height: 100px;
        width: 100px;
        background: black;
    }
</style>