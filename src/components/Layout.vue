<template>
    <!-- <div class="fixed top-[10px] left-[10px] right-[10px] bottom-[10px] bg-red-500 flex">
        <div class="bg-blue-500 overflow-auto h-full"
         :style="{
            width: is ? '250px' : '100px'
        }">
            <button @click="toggle">hello</button>
            <div class="h-[800px] bg-black" >
                sidebar
            </div>
        </div>
        <div class="bg-green-500 flex-1 overflow-auto h-full">
            <div class="h-[200vh]">
                child contents
            </div>
        </div>
    </div> -->

    <div class="fixed top-[25px] left-[25px] right-[25px] bottom-[15px] flex">
        <div>
            <Sidebar class="sidebar" />
        </div>
        <div class="flex-1 overflow-auto h-full mx-[17px] bg-white border-1 rounded-[10px] p-[32.5px] ">
            <Dash />
        </div>
    </div>


    <!-- <button @click="toggle">hello</button> -->


</template>
<script setup>
import Sidebar from './menu/Sidebar.vue';
import Dash from './dash/Dash.vue';
import { provide, ref } from 'vue';




</script>
<style></style>