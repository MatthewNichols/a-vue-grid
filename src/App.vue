<template>
  <a-vue-grid :columns="columns" :dataRows="dataRows" dataRowIdColumn="rowid" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AVueGrid, { ColumnDefinition } from './components/a-vue-grid.vue'

export default defineComponent({
  name: 'App',
  components: {
    AVueGrid
  },
  setup() {
    const columns = [
      { title: 'Col1', valuePropName: 'col1' },
      { title: 'Col2', valuePropName: 'col2' },
    ] as ColumnDefinition[];

    const dataRows: any[] = [
      { rowid:"1", col2: "Bye", col1: "Hi" },
      { rowid:"2", col2: "Adios", col1: "hola" },
    ];

    return {
      columns, dataRows
    };
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
