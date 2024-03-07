<template>
    <div class="p-container">
        <div class="p-header">
           <h1> {{ name }}</h1>
        </div>
        <div class="p-main">
            <!-- 这里有 slot 问题 -->
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
const name = 'container';
</script>