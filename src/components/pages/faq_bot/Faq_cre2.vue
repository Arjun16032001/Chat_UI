<template>
  <div class="flex flex-col">
    <Ques v-model:title="noteTitle" />
    <br />
    <Ans />
    <div class="px-[338.94px] pt-[14px]">
      <Button
        @click="addSubques"
        icon="pi pi-plus"
        label="Add Sub Questions"
        class="!w-full whitespace-nowrap !border-[0px] !bg-[#7152F3] py-[7px] !text-[14px] !rounded-[31px]"
      />
    </div>
    <br />
    
   <Acco v-model:acco="accoTitle" />

  </div>
</template>

<script setup>
import ToggleSwitch from "primevue/toggleswitch";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import { provide, ref } from "vue";
import "primeicons/primeicons.css";
import Ques from "./Ques.vue";
import Ans from "./Ans.vue";
import Acco from "./Acco.vue";
import { nanoid } from 'nanoid' 


const questions = ref([])

function addSubques() {
  questions.value.push({ id: nanoid() })  
}

console.log('hi',questions.value)

const noteTitle = ref('')
const accoTitle = ref('')



provide('question',questions)

</script>
