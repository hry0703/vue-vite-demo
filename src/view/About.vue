<template>
    <el-container>
        about
    </el-container>
</template>
<script setup lang="ts" >
import { onMounted, ref,toRefs,onUpdated,onUnmounted,computed,watch } from 'vue'

const plusCount = computed(() => count.value + 1)
const props = defineProps<{
  msg: string
}>()

let count = ref(0)

watch(count, (count, prevCount) => {
  console.log('count',count);
  console.log('prevCount',prevCount);
})



const countChange = function(val:number){
    console.log(val,'---');
    count.value = val
}

onMounted(() => {
    console.log('mounted!')
})


onUpdated(() => {
    console.log('updated!')
})


onUnmounted(() => {
    console.log('unmounted!')
})
    

</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
