<template>
    <div class=" w-[445px] h-[500px] mt-[90.75px] flex flex-col gap-[40px]">
        <Logo :logo="true" class="!ml-[0px] !mt-[0px]" />
        <div>
        <div class="flex flex-row gap-3 ">
            <p class="text-[30px] font-[600] leading-[40px]">Welcome</p>
            <img src="\src\assets\WelcomebackFabiana (1).png" alt="">
        </div>
        <p class="text-[#A2A1A8] text-[16px] font-[400] leading-[24px]">Please login here</p>
    </div>
        <form @submit.prevent="" class="gap-4">
            <IftaLabel>
                <InputText id="email" v-model="email" variant="filled" :pt="{
                    root: 'w-full h-[55px] !border-[1px] !border-[#7152F3]'
                }" />
                <label for="email">Email address</label>
            </IftaLabel><br>
            <IftaLabel>
                <Password class="pass" v-model="pass" style="width: 100%;" toggleMask  />
                <label for="password">Password</label>
            </IftaLabel>
        </form>
        <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-2">
            <Checkbox v-model="checked" binary :pt="{
                box:'!bg-[#7152F3] !border-[#7152F3]'
            }" />
            <p class="text-[16px] font-[300]">Remember me</p>
        </div>
        <button class="text-[#7152F3]">Forgot Password?</button>
        </div>
        <button class="bg-[#7152F3] w-full h-[56px] rounded-[10px] text-[white]">Login</button>



    </div>
</template>
<script setup>
import Logo from '@/components/logo/Logo.vue';
import InputText from 'primevue/inputtext';
import IftaLabel from 'primevue/iftalabel';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';




</script>

<style >
   .pass input {
    width: 100% !important;
    border-color:#7152F3 ;
}

</style>
