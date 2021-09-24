
<template>
  <Home msg="Hello Vue 3 + TypeScript + Vite" />
</template>


<script setup lang="ts">
import { onMounted, ref,toRefs,onUpdated,onUnmounted } from 'vue'
import Home from './components/Home.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
