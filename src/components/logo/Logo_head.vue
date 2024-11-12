<template>
      <div class="absolute right-[-15px] top-[20px] bg-white rounded-2xl" :class="{'right-[30px]': props.was}">
        <Button
          icon="pi pi-bars"
          severity="help"
          rounded
          variant="outlined"
          aria-label="Favorite"
          @click="buttonClick"
        />
      </div>
   
</template>
<script setup>
import Button from "primevue/button";
import { inject } from "vue";

const props = defineProps(['was'])

const buttonClick = inject("clicker");
</script>
<style>

</style>
