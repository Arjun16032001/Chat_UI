<template>

<button
      @click="askQues"
      v-if="show_ques"
      class="flex flex-col w-full border-[1.5px] rounded-[6px] border-[#7152F3] px-[16px] py-[7px] whitespace-nowrap "
    >
      <p class="text-[14px] font-[300] text-[#A2A1A8]">Question </p>
    </button>
    <IftaLabel v-if="show_question" class=" !pt-[7px]">
      <InputText
        id="ques"
       v-model="title"
        variant="filled"
        :pt="{
          root: 'w-full h-[55px] !border-[1px] !border-[#7152F3] ',
        }"
      />
      <label for="ques" class="ml-[-3px]">Question</label> </IftaLabel
    >


</template>

<script setup>
import { ref } from 'vue';
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";

const show_ques = ref(true);
const show_question = ref(false);



function askQues() {
  show_ques.value = false;
  show_question.value = true;
}


const title = defineModel('title')


</script>