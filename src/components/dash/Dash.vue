<template>
    <div class="flex flex-col gap-4 ">
            <div class="flex flex-row items-center pb-[25px]">
                <p class="text-[20px] font-[600]">Chat Bot</p>
                <Search class="ml-[30px]" />
            </div>
        <div class="flex overflow-auto h-[140px] flex-wrap gap-5">
            <div class="relative">
                <Create_bot />
                <!-- <Drop_down v-if="show_drop" class="absolute top-0 z-[100]" /> -->
            </div>
            <Bots />
        </div>
        <div class="flex flex-row gap-[2rem] font-[600] text-[20px]">
            <img src="@/assets/Frame.svg" alt="" class="w-[260.85px] h-[265.25px] ml-[5px] mt-[50px]">
            <Dash_vid class="mt-[50px]"/>
        </div>
    </div>
</template>

<script setup>
import Search from '../menu/Search.vue';
import Create_bot from './Create_bot.vue';
import Bots from './Bots.vue';
// import Drop_down from './Drop_down.vue';
import { inject, provide,ref } from 'vue';
import Dash_vid from './Dash_vid.vue';

const show_drop = ref(false);

// function dropDown(){
//    show_drop.value=!show_drop.value
// }
// function closeDrop(){
//    show_drop.value=false
// }

// provide('drop',dropDown)
// provide('close',closeDrop)

</script>