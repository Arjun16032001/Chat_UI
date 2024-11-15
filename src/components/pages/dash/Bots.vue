<template>
   <button  @click="toggle" class="bg-white border-[#A2A1A833] border-[2px] w-[190px] h-[120px] rounded-[10px] pl-[10px]  text-left" >
    <div class="mb-[1px] overflow-hidden" >
        <div class="flex flex-row justify-between relative">
        <p class="font-['lexend'] ">Website Bot</p>
        <p class="absolute top-[-14px] left-[145px] text-[25px]">...</p>
    </div>
        <div class="flex flex-row">
        <img src="\src\assets\Bulb.png" alt="" class="w-[33.29px] h-[37.7px] mt-[40px]">
        <img src="\src\assets\bots.png" alt="" class="ml-[48px] w-[110.05px] h-[87.91px]">
    </div>
</div>
</button>
<Popover ref="op" :pt="{
    content: '!p-[0px]',
    root: '!top-[130.66px] !left-[573px] ',
}">
   <div class="flex flex-col p-[10px] items-start text-black text-[16px] font-[300] gap-[7px]">
    <button>Duplicate</button>
    <button>Copy Story ID</button>
    <button>Delete Story</button>
    <button>Rename</button>

   </div>
</Popover>



</template>


<script setup>
import { ref } from "vue";
import Popover from 'primevue/popover';

const op = ref();
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
    op.value.toggle(event);
}
</script>

<style>
.p-popover::before {
  display: none;
}
</style>