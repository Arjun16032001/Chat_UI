<template>
  <Accordion v-model:value="activeIndex" value="0">
    <AccordionPanel
    v-for="(question, index) in questions"
      :key="question.id"
      :value="index"
      
      class="!border-[3px] !rounded-[12px] !mt-4 "
    >
      <AccordionHeader
        class="!text-black"
        :pt="{
          root: '!relative !pl-[34px] !p-[0px]',
          toggleicon: '!absolute !left-[10px]',
        }"
        >About OpenAI
        <Button @click="delques(question.id)"
          icon="pi pi-trash"
          :pt="{
            icon: '!text-black mr-[10px] !text-[20px] !text-[#B5B4B9]',
            root: '!bg-white !border-[0px]  ',
          }"
      /></AccordionHeader>
      <AccordionContent>
        <div class="flex flex-col">
          <div class="flex flex-row gap-3">
            <div class="flex-[50%] w-full">
              {{ title }}
              <Ques v-model:title="title"  />
            </div>
            <div class="mt-[7px] flex-[50%]">
              <Ans />
            </div>
          </div><br>
        </div>
        <div class="w-full flex items-center justify-center">
        <button class="flex flex-row gap-3 items-center">
          <i class="pi pi-plus !text-[18px] !text-[#7152F3] " style="color: black;"></i>
          <p class="text-[#7152F3]">Add Sub Questions</p>
        </button>
        </div>
        
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<script setup>
import Button from "primevue/button";
import { inject, ref } from "vue";
import "primeicons/primeicons.css";
import Ques from "./Ques.vue";
import Ans from "./Ans.vue";

import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";



const title = defineModel('acco')

const questions = inject('question')

function delques(id) {
  questions.value = questions.value.filter(item => item.id !== id)  // Filter out the item with the matching id
  console.log('hi',questions.value)
}


</script>
