<script setup>
import { useToast } from 'primevue/usetoast';
const toast = useToast();

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>

<template>

  <header>
    
  </header>


  <main>
    <h1 class="w-100 text-center">ADF Puigmadrona Olorda</h1>
    <h3 class="w-100 text-center">Marcadores</h3>
  </main>

  <Toast />
</template>
