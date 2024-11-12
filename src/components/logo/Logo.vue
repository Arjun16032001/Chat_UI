<template>
    <div class="top public-sans">
    <div>
      <img
        src="\src\assets\Objects.png"
        alt=""
      />
    </div>
    <div class="heading flex flex-row">
      <div v-if="props.logo">
        <h2 class="logo_head">CHAT</h2>
        <p class="logo_head2">bot</p>
      </div>
    </div>
    
</div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps(['logo'])
</script>

<style>
.heading {
  margin-left: 10px;
  margin-top: 5px;
}

.top {
  display: flex;
  margin-left: 24px;
  margin-top: 24px;
}
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
</style>