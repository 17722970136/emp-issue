<template>
    <div class="p-container">
        <div class="p-header">
            <!-- count 没有响应式 -->
           <h1> {{ name }}-{{ count }}</h1>
        </div>
        <div class="p-main">
            <!-- 这里有 slot 问题 -->
            <!-- <slot></slot> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
const name = 'container';
import { ref } from 'vue';
const count = ref(1);

setInterval(() => {
    count.value++;
}, 500)
</script>