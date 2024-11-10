<template>
    <div class="flex flex-col">
        <div class="flex flex-row items-center pb-[25px]">
    <p class="text-[20px] font-[600]">Cha Bot</p>
    <Search class="ml-[30px]"/>
</div>
<div>
    <Create_bot />
</div>
<div class="w-[260.85px] h-[265.25px] absolute top-[418px] "><img src="\src\assets\Frame.svg" alt=""></div>
</div>
</template>
<script setup>
import Search from '../menu/Search.vue'; 
import Create_bot from './Create_bot.vue';



</script>