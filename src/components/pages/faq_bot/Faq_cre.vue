<template>
<div class="fixed top-[25px] left-[25px] right-[25px] bottom-[15px] flex">
    <Sidebar />
    <div class="flex-1 mx-[17px] bg-white border-1 rounded-[10px] p-[32.5px] h-full">
        <Customiser />
     
    </div>
</div>
</template>
<script setup>
import Sidebar from '@/components/menu/Sidebar.vue';
import Customiser from '@/components/crebot_customise/Customiser.vue';
</script>