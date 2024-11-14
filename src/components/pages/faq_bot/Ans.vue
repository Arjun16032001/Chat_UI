<template>
     
    <div class="flex flex-row gap-3  mt-[0px]" v-if="!checked">
      <p class="text-[#A2A1A8] text-[14px] font-[400]">Add Answer</p>
      <ToggleSwitch
        class="!mt-[2.2px]"
        v-model="checked"
        :pt="{
          slider: '!w-[30px] !h-[17px]',
          handle: '!w-[12px] !h-[12px] !top-[43%]',
        }"
      />
    </div>
    <div class="flex flex-row" v-if="checked">
      <IftaLabel class="!pr-[16px] flex-1">
        <InputText
          id="ans"
          v-model="ans"
          variant="filled"
          :pt="{
            root: '!w-full !h-[55px] !border-[1px] !border-[#7152F3] ',
          }"
        />
        <label for="ans" class="ml-[0px] !top-[1px]">Answer</label>
      </IftaLabel>
      <Button
        @click="delButton"
        icon="pi pi-trash"
        :pt="{
          icon: '!text-black mr-[10px] !text-[29px] !text-[#B5B4B9]',
          root: '!bg-white !border-[0px] ',
        }"
      />
    </div>
</template>

<script setup>
import ToggleSwitch from "primevue/toggleswitch";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import "primeicons/primeicons.css";
import Button from "primevue/button";

const ans = ref("");
const checked = ref(false);

function delButton() {
  checked.value = false;
  ans.value = "";
}
</script>