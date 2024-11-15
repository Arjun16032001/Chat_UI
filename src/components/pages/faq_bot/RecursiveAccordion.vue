<template>
    <Accordion v-model:value="activeIndex" value="0">
      <AccordionPanel
        v-for="(question, index) in questions"
        :key="question.id"
        :value="index"
        class="!border-[3px] !rounded-[12px] !mt-4"
      >
      <AccordionHeader
        class="!text-black"
        :pt="{
          root: '!relative !pl-[34px] !p-[0px]',
          toggleicon: '!absolute !left-[10px]',
        }"
        > {{ question.title || 'Sub Question' }}
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
                <Ques v-model:title="question.title" />
              </div>
              <div class="mt-[7px] flex-[50%]">
                <Ans />
              </div>
            </div>
            <br />
          </div>
  
          <!-- Button to add sub-questions -->
          <div class="w-full flex items-center justify-center">
            <button
              @click="addmoreSub(question)"
              class="flex flex-row gap-3 items-center"
            >
              <i
                class="pi pi-plus !text-[18px] !text-[#7152F3]"
                style="color: black;"
              ></i>
              <p class="text-[#7152F3]">Add Sub Questions</p>
            </button>
          </div>
  
          <!-- Recursive Sub-Questions -->
          <RecursiveAccordion v-if="question.subQuestions" :questions="question.subQuestions" />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </template>
  
  <script setup>
  import Button from "primevue/button";
  import Accordion from "primevue/accordion";
  import AccordionPanel from "primevue/accordionpanel";
  import AccordionHeader from "primevue/accordionheader";
  import AccordionContent from "primevue/accordioncontent";
  import Ques from "./Ques.vue";
  import Ans from "./Ans.vue";
  
  const props = defineProps({
    questions: Array,
  });
  
  function delques(id) {
    props.questions = props.questions.filter((item) => item.id !== id);
  }
  
  function addmoreSub(question) {
    if (!question.subQuestions) {
      question.subQuestions = [];
    }
    question.subQuestions.push({ id: Date.now(), title: "", subQuestions: [] });
    console.log('hi',questions.value)
  }
  </script>
  