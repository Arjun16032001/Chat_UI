<template>
  <div class="top public-sans">
    <div>
      <img
        src="\src\assets\Objects.png"
        alt=""
      />
    </div>
    <div class="heading flex flex-row">
      <div v-if="props.was">
        <h2 class="logo_head">CHAT</h2>
        <p class="logo_head2">bot</p>
      </div>
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
    </div>
  </div>
</template>
<script setup>
import Button from "primevue/button";
import { inject } from "vue";

const props = defineProps(['was'])

const buttonClick = inject("clicker");
</script>
<style>
.logo_head {
  font-family: Public Sans;
  font-size: 19.77px;
  line-height: 14.83px;
  font-weight: 800;
  margin: 0;
}

.logo_head2 {
  font-family: Public Sans;
  font-size: 15.65px;
  font-weight: 300;
  line-height: 14.83px;
  margin: 0;
}
.heading {
  margin-left: 10px;
  margin-top: 5px;
}

.top {
  display: flex;
  margin-left: 24px;
  margin-top: 24px;
}
</style>
