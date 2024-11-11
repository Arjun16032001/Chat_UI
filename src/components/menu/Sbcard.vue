<template>
    <button class="button" >
        <img src="\src\assets\Vector.png" alt="" class="logo">
        <label class="butla" >{{ label }}</label>
    </button>
</template>

<script setup>
import { inject, ref } from 'vue';
import { provide } from 'vue';

const {label} = defineProps({
    label : {}
})


</script>
<style scoped>
.button {
    background-color:white;
    font-family: Lexend;
    border: 2px solid;
    border-color: #7152F3;
    border-radius: 12px;
    display: flex;
    gap: 5px;
    padding: 6px 10px;
    align-items: center;
}
.butla{
    color: #7152F3;
    font-size: 14px;
    font-weight: 600;
}


</style>