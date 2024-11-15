<template>
  <Dialog
    v-model:visible="visible"
    pt:root:class="!border-0 !bg-transparent !text-black "
    pt:mask:class="backdrop-blur-sm"
  >
    <template #container="{ closeCallback }">
      <header
        class="bg-[#7152F3] flex flex-row gap-5 rounded-t-[12px] p-[20px]"
      >
        <button @click="closeCallback">
          <i class="pi pi-angle-left text-white !text-[30px]"></i>
        </button>
        <div class="flex flex-row gap-4">
          <img src="\src\assets\Ellipse 12.png" alt="" />
          <div class="flex flex-col text-white">
            <p>Bot</p>
            <p class="font-[200]">Active 1hr</p>
          </div>
        </div>
      </header>
      <div
        class="flex flex-col py-[20px] pr-[65px] gap-[10px] pl-[20px] bg-white max-w-[423px] max-h-[643px] rounded-b-[12px] overflow-y-auto"
      >
        <div class="flex flex-row gap-4">
          <img src="\src\assets\thunder.png" alt="" class="w-[32px] h-[32px]" />
          <div class="flex flex-col">
            <p
              class="bg-[#F2F2F2] p-[16px] rounded-[10px] text-[14px] font-[300] leading-[22px]"
            >
              Welcome!<br />
              I’m your virtual assistant, I'm here to help you understand how
              Zia integrates with OpenAI for Zoho. This integration is about
              helping businesses become more efficient, effective, and
              competitive. We're looking forward to making this easier for you.
            </p>
            <br />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row gap-4">
            <img
              src="\src\assets\thunder.png"
              alt=""
              class="w-[32px] h-[32px]"
            />
            <div class="flex flex-col gap-2">
              <p
                class="bg-[#F2F2F2] p-[16px] rounded-[10px] text-[14px] font-[300] leading-[22px]"
              >
                Choose from the options below to explore the integration:Choose
                from the options below to explore the integration:
              </p>
              <div class="flex flex-col bg-[#F2F2F2] p-[16px] rounded-[10px] gap-3">
               <button @click="chatCont" class="bg-white rounded-[10px] py-[10px] px-[15px] justify-between flex flex-row">
                <p>About OpenAI</p>
                <i class="pi pi-angle-right !mt-[4px]"></i>
               </button>
               <button class="bg-white rounded-[10px] py-[10px] px-[15px] justify-between flex flex-row">
                <p>Access Zia's Generative AI</p>
                <i class="pi pi-angle-right !mt-[4px]"></i>
               </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="chat" class="flex flex-col gap-3">
        <div class="flex justify-end">
        <p class=" bg-[#7152F3] p-[10px] rounded-[10px] text-white text-[14px]">About OpenAI</p>
    </div>
    <div class="flex flex-col">
          <div class="flex flex-row gap-4">
            <img
              src="\src\assets\thunder.png"
              alt=""
              class="w-[32px] h-[32px]"
            />
            <div class="flex flex-col gap-2">
              <p
                class="bg-[#F2F2F2] p-[16px] rounded-[10px] text-[14px] font-[300] leading-[22px]"
              >
                Choose from the options below to explore the integration:Choose
                from the options below to explore the integration:
              </p>
              <div class="flex flex-col bg-[#F2F2F2] p-[16px] rounded-[10px] gap-3">
               <button @click="chat= false" class="bg-white rounded-[10px] py-[10px] px-[15px] justify-between flex flex-row">
                <p>Back to Menu</p>
                <i class="pi pi-angle-right !mt-[4px]"></i>
               </button>
              
              </div>
            </div>
          </div>
        </div>
    </div>

      </div>
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import { ref } from "vue";

const chat = ref(false)

function chatCont(){
    chat.value = true
}

</script>
