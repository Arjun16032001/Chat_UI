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


    <div>
        <div class="fixed top-[25px] left-[25px] right-[25px] bottom-[15px] flex">
            <div class="column h-full relative" :style="{
                width: is ? '276px' : '100px'
            }">
                <Logo_head :is="is" />
                <Sidebar class="sidebar" />
            </div>
            <div class="flex-1 overflow-auto h-full mx-[17px] bg-white border-1 rounded-[10px] ">
                <Dash />
            </div>

        </div>
        <!-- <button @click="toggle">hello</button> -->

    </div>
</template>
<script setup>
import Logo_head from './logo/Logo_head.vue';
import Sidebar from './menu/Sidebar.vue';
import Dash from './dash/Dash.vue';
import { provide,ref } from 'vue';

const is = ref(true)
function toggle() {
    is.value = !is.value
}

provide('clicker',toggle)
provide('is',is)

</script>
<style>
.column {
    width: 276px;
    border: 1px solid;
    border-color: #EDEEF3;
    background-color: #FFFFFF;
    border-radius: 10px;
    /* margin-left: 25px;
    margin-top: 25px;
    margin-bottom: 25px; */

}
</style>