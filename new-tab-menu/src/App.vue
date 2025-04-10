<template>
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
