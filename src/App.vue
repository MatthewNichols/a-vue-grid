<template>
  <a-vue-grid />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AVueGrid from './components/a-vue-grid.vue'

export default defineComponent({
  name: 'App',
  components: {
    AVueGrid
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
