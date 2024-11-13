<template>

    <div class="column h-full relative transition-width" :style="{
        width: was ? '276px' : '100px'
    }">
        <Logo :logo="was" />    
        <Logo_head :was="was" />
        <div class="col1">
            <div class="col2">
                <div class="card1" :style="{
                    gap: was ? '28px' : '0px'
                }">
                    <img src="\src\assets\Ellipse 12.png" alt="" class="w-[40px] h-[40px]">
                    <div class="flex flex-col">
                        <p v-if="was">Kate Russel</p>
                        <p v-if="was" class="text-[14px] font-[400] text-[#83899F]">Project Manager</p>
                    </div>
                    <select name="name" id="name" class="border-white bg-white">
                    </select>
                </div>
                <Search :class="was ? 'w-full' : 'w-[10px]'" />
                <p class="text-gray-500" v-if="was">Home</p>
                <Sbcard :label="was ? 'Chatbots' : ''" :class="was ? 'w-[full]' : 'w-[44px]'" />

                <div class="mt-[159px] mb-[15px] border-t w-full">
                    <p class="text-[14px] text-gray-500 pl-[11px] absolute top-[355px] left-[8px]"
                        v-if="was">Preferences</p>
                    <Button :pt="{
                        //   root: '!bg-red-500 !border-blue-500',
                        label: 'text-[14px] text-black',
                        icon: was ? '!text-black !text-[16px]' : '!text-black !text-[24px]'
                        // OR { class: 'text-xl' }
                    }" icon="pi pi-cog" aria-label="Save" class="!bg-white !border-transparent"
                        :label="was ? 'Settings' : ''" /><br>
                    <Button :pt="{
                        //   root: '!bg-red-500 !border-blue-500',
                        label: 'text-[14px] text-black',
                        icon: was ? '!text-black !text-[16px]' : '!text-black !text-[24px]'
                        // OR { class: 'text-xl' }
                    }" icon="pi pi-question-circle" aria-label="Save" class="!bg-white !border-transparent"
                        :label="was ? 'Help Center' : ''" /><br>
                    <Button :pt="{
                        //   root: '!bg-red-500 !border-blue-500',
                        label: 'text-[14px] text-black',
                        icon: was ? '!text-black !text-[16px]' : '!text-black !text-[24px]'
                        // OR { class: 'text-xl' }
                    }" icon="pi pi-sign-out" aria-label="Save" class="!bg-white !border-transparent"
                        :label="was ? 'Logout' : ''" /><br>
                    <div v-if="was"
                        class="flex flex-row justify-between p-[10px] border-2 rounded-[12px] items-center bg-gray-200">
                        <span class="pi pi-moon"></span>
                        <p class="text-[14px]" v-if="was">Dark Mode</p>
                        <ToggleSwitch v-model="checked" class="" v-if="was" />
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<script setup>


import Search from './Search.vue';
import Sbcard from './Sbcard.vue';
import Button from 'primevue/button';
import ToggleSwitch from 'primevue/toggleswitch';
import { inject, provide, ref } from 'vue';
import Logo_head from '../logo/Logo_head.vue';
import Logo from '../logo/Logo.vue';


const was = ref(false)
function toggle() {
    was.value = !was.value
}

provide('clicker', toggle)
// provide('is', was)

</script>
<style scoped>
.col1 {
    margin-left: 18px;
    margin-right: 18px;
    gap: 16px;
    margin-top: 30px;
}

.col2 {
    width: 100%;
    height: 100%;
    border: 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.home {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: #83899F;
}

.card1 {
    display: flex;
    gap: 40px;
    border: 1px solid;
    padding: 10px 1px;
    border-color: #E6E7EC;
    border-radius: 10px;
}

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
.transition-width {
  transition: width 0.5s ease; /* Adjust timing and easing as needed */
}
</style>