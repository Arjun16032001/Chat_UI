<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <IconField class="search">
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" class="box" />
        </IconField>

    
    </div>
</template>

<script setup>
import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';




const value1 = ref(null);

</script>

<style scoped>
.search{
    width: 100%;
    /* margin-top: 15px; */
}
.box{
    width: 100%;
}
</style>
