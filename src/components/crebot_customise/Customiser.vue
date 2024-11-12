<template>
<div class="flex flex-col justify-between gap-[25px]" >
    <div class="flex flex-row gap-4">
        <Button @click="backDash" icon="pi pi-angle-left" severity="success" rounded aria-label="Search" :pt="{
            root:'!bg-[#CEE993] !text-[black] !border-[#CEE993]',
            icon:'!text-[29px]'
        }"/>
        <p class="text-[20px] font-[600] p-[5px]">Create Chat bot</p>

    </div>
    <form  class="gap-4">
       <input type="text" name="" id="" placeholder="Bot name" class="border-[2px] border-[#A2A1A8] rounded-[6px]
       h-[36px] w-full pl-[25px]"><br><br>
       <p>Theme Color</p>
       <div class="flex flex-row gap-4">
       <button class="flex border-[1px]  w-[35px] h-[35px] rounded-[9px] overflow-hidden">
    <div class="w-1/2 h-full bg-[#417EE3]"></div>
    <div class="w-1/2 h-full bg-[#FD9134]"></div>
</button>
<button class="flex border-[1px]  w-[35px] h-[35px] rounded-[9px] overflow-hidden">
    <div class="w-1/2 h-full bg-[#EC0EFF]"></div>
    <div class="w-1/2 h-full bg-[#00B9E2]"></div>
</button>
<div class="relative inline-block">
    <ColorPicker v-model="color"  :pt="{ preview: '!w-[35px] !h-[35px]' }" />
    <span class="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
        <i class="pi pi-pencil"></i> 
    </span>
</div>
</div>
    </form>

</div>

</template>
<script setup>
import Button from 'primevue/button';
import ColorPicker from 'primevue/colorpicker';
import { useRouter } from 'vue-router';


const router = useRouter();
// console.log('asdasd',router)

function backDash(){
    router.push('/')

}



</script>