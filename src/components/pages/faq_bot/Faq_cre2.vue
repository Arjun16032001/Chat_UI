<template>
    <div class="flex flex-col ">
    <button @click="askQues" v-if="show_ques" class="flex flex-col border-[1.5px] rounded-[6px] border-[#7152F3] px-[16px] py-[7px] whitespace-nowrap  mx-[20px]">
        <p class="text-[14px] font-[300] text-[#A2A1A8]">Question</p>
    </button>
    <IftaLabel v-if="show_question" class="!px-[16px] !py-[7px]">
                <InputText id="email" v-model="email" variant="filled" :pt="{
                    root: 'w-full h-[55px] !border-[1px] !border-[#7152F3] '
                }" />
                <label for="email">Question</label>
            </IftaLabel><br>
            <IftaLabel></IftaLabel>
    <div class="flex flex-row gap-3 ml-[21px] mt-[7px]">
            <p class="text-[#A2A1A8] text-[14px] font-[400]">Add Answer</p>
        <ToggleSwitch class="!mt-[2.2px]"  v-model="checked" :pt="{
            slider: '!w-[30px] !h-[17px]',
            handle: '!w-[12px] !h-[12px] !top-[41%]'
        }" />
    </div>
    <div class="px-[338.94px] pt-[14px]">
            <Button
              @click="goQues"
              icon="pi pi-plus"
              label="Add Sub Questions"
              class="!w-full whitespace-nowrap !border-[0px] !bg-[#7152F3] py-[7px] !text-[14px] !rounded-[31px]"
            />
          </div>
    </div>
    
</template>

<script setup>
import ToggleSwitch from 'primevue/toggleswitch';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import IftaLabel from 'primevue/iftalabel';
import { ref } from 'vue';

const show_ques = ref(true)
const show_question = ref(false)

function askQues(){
    show_ques.value = false
    show_question.value = true
}

</script>