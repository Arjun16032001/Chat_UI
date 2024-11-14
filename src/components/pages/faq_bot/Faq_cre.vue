<template>
  <div class="fixed top-[25px] left-[25px] right-[25px] bottom-[15px] flex">
    <Sidebar />
    <div
      class="mx-[17px] bg-white border-1 rounded-[10px] p-[32.5px] h-full overflow-auto"
    >
      <div class="flex flex-row">
        <Customiser />
        <div 
          class="flex flex-col justify-between px-[20px] border-[1px] border-[#DEDEDE] rounded-[10px] ml-[45px] items-center pt-[14.5px]"
        >
        <Faq_cre2 v-if="show_cre2" />
        <div v-if="show_first" class="flex flex-col gap-[123.76px]">
          <div class="px-[345px]">
            <Button
              @click="goQues"
              icon="pi pi-plus"
              label="Add Questions"
              class="!w-full whitespace-nowrap !border-[0px] !bg-[#7152F3] py-[7px] !text-[14px] !rounded-[31px]"
            />
          </div>
          <div class="flex flex-col items-center gap-3">
            <img
              src="\src\assets\Chatbot.svg"
              alt=""
              class="w-[413.11px] h-[260.61px]"
            />
            <p class="text-[#A2A1A8]">Add Question to train your chat bot</p>
          </div>
        </div>
          <div class="border-t-[1px] border-[#DEDEDE] w-full flex flex-row justify-between px-[15px]">
            <div class="flex flex-row py-[10px] ">
                <button @click="visible = true" class="bg-[#A3D139] text-[16px] font-[500] text-white px-[13.5px] py-[8px] rounded-[10px]">Test Bot</button>
            </div>
            <div class="flex flex-row py-[10px] pl-[15px] gap-2">
                <button class="bg-white text-[16px] font-[500] text-black px-[13.5px] py-[8px] rounded-[10px] border-[1px] border-[#DEDEDE]">Cancel</button>
                <button class="bg-[#7152F3] text-[16px] font-[500] text-white px-[13.5px] py-[8px] rounded-[10px] border-[1px] border-[#DEDEDE]">Next</button>
                <Modalbot v-model:visible="visible" />
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/menu/Sidebar.vue";
import Customiser from "@/components/crebot_customise/Customiser.vue";
import Button from "primevue/button";
import { ref } from "vue";
import Faq_cre2 from "./Faq_cre2.vue";
import Dialog from 'primevue/dialog';
import Modalbot from "@/components/modal/Modalbot.vue";


const show_first = ref(true)
const show_cre2 = ref(false)

const visible = ref(false);

function goQues(){
   show_first.value = false
   show_cre2.value = true
}

</script>
