<template>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            Main

            <h1>{{ msg }}</h1>
            <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
            <p>
                Recommended IDE setup:
                <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
                +
                <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
            </p>

            <p>See <code>README.md</code> for more information.</p>

            <p>
                <a href="https://vitejs.dev/guide/features.html" target="_blank">
                Vite Docs
                </a>
                |
                <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
            </p>

            <button type="button" @click="count++">count is: {{ count }}</button>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test hot module replacement.
            </p>
        </el-main>
      </el-container>
    </el-container>
</template>
<script  lang="ts">
import { onMounted, ref,toRefs } from 'vue'
export default {
    props: {
        msg: String
    },
    setup(props,context) {
        const { msg } = toRefs(props)
        const count = ref(0)

        // onMounted(() => {
        //     console.log('onMounted')
        // }),

        return {
            msg,
            count
        }
    }
}
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
