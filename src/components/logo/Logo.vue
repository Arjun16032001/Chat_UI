<template>
    <div class="top public-sans">
    <div>
      <img
        src="\src\assets\Objects.png"
        alt=""
        :style="imgStyle"
      />
    </div>
    <div class="heading flex flex-row">
      <div v-if="props.logo">
        <h2 class="logo_head" :style="textStyleh">CHAT</h2>
        <p class="logo_head2" :style="textStylep">bot</p>
      </div>
    </div>
    
</div>
</template>
<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps(['logo'])

const imgStyle = route.path.includes('/login') ? { height: '39.5px', width: '55.3px' } : 
                 route.path.includes('/') ? {height: '32.54px', width: '45.56px' } : {};

const textStyleh = route.path.includes('/login') ? { color: '#7152F3', fontSize:'24px' } : 
route.path.includes('/') ? { color: 'black'  } : {};

const textStylep = route.path.includes('/login') ? { color: '#7152F3', fontSize:'19px',lineHeight:'26px' } : 
route.path.includes('/') ? { color: 'black'  } : {};



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