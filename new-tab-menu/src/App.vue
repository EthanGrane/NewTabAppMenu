<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  </head>
  
  <Header/>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './views/HelloWorld.vue'
import Header from './views/Layout/Header.vue'
import './assets/styles/styles.css';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>
