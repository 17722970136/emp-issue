<template>
    <div class="p-container">
        APP 1 {{ count }}
        <Container>
            插槽内容
        </Container>
    </div>
</template>

<script lang="ts" setup>
import { Container } from './bus_comp';

</script>