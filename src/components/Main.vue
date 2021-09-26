
<template>
<div @click="change">
    main组件修改  {{count}}
</div>
</template>


<script setup lang="ts">
import { onMounted, ref,toRefs,onUpdated,onUnmounted } from 'vue'
const props = defineProps({
  count: Number
})
const emit = defineEmits(['countChange'])

const change= function(){
    emit('countChange', props.count ? props.count + 1 : 1 )
}
</script>

<style scoped>
div {
  border: 1px solid #f91;
  cursor: pointer;
}
</style>
