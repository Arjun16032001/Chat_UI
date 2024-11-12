<template>
    <div class="flex flex-col justify gap-2 bg-[#3517B4] pt-[7.37px] pl-[7.37px] pr-[7.37px] pb-[7.37px] rounded-[10px] w-[302px] h-fit">
        <button @click="closeDrop" class="pi pi-times text-left" style="color: white;"></button>
        <p class="text-white">Create</p>
        <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
            <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
            <div class="flex flex-col text-left">
            <p class="text-white text-[16px]">Blank Bot</p>
            <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later</p>
        </div>
        </button>
        <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
            <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
            <div class="flex flex-col text-left">
            <p class="text-white text-[16px]">Blank Bot</p>
            <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later</p>
        </div>
        </button>
        <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
            <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
            <div class="flex flex-col text-left">
            <p class="text-white text-[16px]">Blank Bot</p>
            <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later</p>
        </div>
        </button>
        <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
            <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
            <div class="flex flex-col text-left">
            <p class="text-white text-[16px]">Blank Bot</p>
            <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later</p>
        </div>
        </button>
    </div>

</template>
<script setup>
import 'primeicons/primeicons.css'
import { inject } from 'vue';

const closeDrop = inject('close')

</script>