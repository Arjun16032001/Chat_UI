<template>
    <!-- <button @click="dropDown" class="bg-[#7152F3] w-[190px] h-[120px] rounded-[10px] pl-[20px] text-left" style="color: white">
    <div class="relative">
        <i class="pi pi-plus absolute top-[-50px] left-0 "></i>
        <p class="font-['lexend'] mt-[30px]">Create Bot</p>
    </div>
</button> -->
    <button @click="toggle" class="bg-[#7152F3] w-[190px] h-[120px] rounded-[10px] pl-[20px] text-left"
        style="color: white">
        <div class="relative">
            <i class="pi pi-plus absolute top-[-50px] left-0 "></i>
            <p class="font-['lexend'] mt-[30px]">Create Bot</p>
        </div>
    </button>
    <Popover ref="op" class="p-popover" :pt="{
        content: '!p-0',
        root: 'p-popoverhelll'
    }">
        <div
            class="flex flex-col justify gap-2 bg-[#3517B4] pt-[7.37px] pl-[7.37px] pr-[7.37px] pb-[7.37px] rounded-[10px] w-[302px] h-fit">
            <button @click="toggle" class="pi pi-times text-left" style="color: white;"></button>
            <p class="text-white">Create</p>
            <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
                <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
                <div class="flex flex-col text-left">
                    <p class="text-white text-[16px]">Blank Bot</p>
                    <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later
                    </p>
                </div>
            </button>
            <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
                <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
                <div class="flex flex-col text-left">
                    <p class="text-white text-[16px]">Blank Bot</p>
                    <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later
                    </p>
                </div>
            </button>
            <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
                <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
                <div class="flex flex-col text-left">
                    <p class="text-white text-[16px]">Blank Bot</p>
                    <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later
                    </p>
                </div>
            </button>
            <button class="flex flex-row w-fil bg-[#4F31D0] rounded-[10px] p-[5px] gap-3 justify-center">
                <i class="pi pi-plus-circle !text-[25px] mt-[18px]" style="color: white;"></i>
                <div class="flex flex-col text-left">
                    <p class="text-white text-[16px]">Blank Bot</p>
                    <p class="text-white text-[12px]">Create a blank chatbot, which you can train and customize later
                    </p>
                </div>
            </button>
        </div>

    </Popover>
</template>
<script setup>
import 'primeicons/primeicons.css'
import { Popover } from 'primevue';
import { inject } from 'vue';
import { ref } from "vue";

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
// const dropDown = inject('drop')

</script>
<style scoped>
.p-popover::after,
/* This targets the default arrow */
.p-popover-arrow {
    /* This targets the class name if there’s an arrow element */
    display: none;
}
</style>