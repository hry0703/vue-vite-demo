
<template>
<div>

 122222222222222
 <p>{{asideMenu}}</p>
</div>
</template>


<script setup lang="ts">
import { onMounted, ref,toRefs,onUpdated,onUnmounted } from 'vue'
const asideMenu = ['12','23','34']
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
