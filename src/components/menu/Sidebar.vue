<template>
    <div class="col1">
        <div class="col2">
            <div class="card1":style="{
                gap: was ? '40px' : '2px'
            }">
                <img src="C:\Users\Arjun\Desktop\fi_bot\vue-project\src\assets\Ellipse 12.png" alt="">
                <p v-if="was">Kate Russel</p>
                <select name="name" id="name" class="border-white">
                </select>
            </div>
            <Search />
            <p class="text-gray-500">Home</p>
            <Sbcard :label="was ? 'Chatbots' : ''"/>

            <div class="mt-[80px] mb-[15px] border-t w-full">
                <p class="text-[14px] text-gray-500 pl-[11px]">Preferences</p>
                <Button :pt="{
                    //   root: '!bg-red-500 !border-blue-500',
                    label: 'text-[14px] text-black',
                    icon: 'text-black'
                    // OR { class: 'text-xl' }
                }" icon="pi pi-cog" aria-label="Save" label="Settings" class="!bg-white !border-transparent" /><br>
                <Button :pt="{
                    //   root: '!bg-red-500 !border-blue-500',
                    label: 'text-[14px] text-black',
                    icon: 'text-black'
                    // OR { class: 'text-xl' }
                }" icon="pi pi-question-circle" aria-label="Save" label="Help Center" class="!bg-white !border-transparent" /><br>
                <Button :pt="{
                    //   root: '!bg-red-500 !border-blue-500',
                    label: 'text-[14px] text-black',
                    icon: 'text-black'
                    // OR { class: 'text-xl' }
                }" icon="pi pi-sign-out" aria-label="Save" label="Logout" class="!bg-white !border-transparent" /><br>
                <div class="flex flex-row justify-between p-[10px] border-2 rounded-[12px] items-center bg-gray-200">
                    <span class="pi pi-moon"></span>
                    <p class="text-[14px]">Dark Mode</p>
                <ToggleSwitch  v-model="checked" class="" />
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
import { inject, provide,ref} from 'vue';


const was = inject('is')
// const where = computed(() => was.value);

console.log('asddas',was)

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
</style>