<template>
  <a-vue-grid id="grid-1" :columns="columns" :dataRows="dataRows" dataRowIdColumn="rowid" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AVueGrid from './components/a-vue-grid.vue'
import { ColumnDefinition } from './types'
import { baseDataRows } from "./data/data-rows";

export default defineComponent({
  name: 'App',
  components: {
    AVueGrid
  },
  setup() {
    const columns = [
      { title: 'Row', valuePropName: 'rowid' },
      { title: 'Col1', valuePropName: 'col1' },
      { title: 'Col2', valuePropName: 'col2', display: true, headerClass: 'col-2-header', rowClass: 'col-2' },
      { title: 'Fake', valuePropName: 'col2', display: false },
    ] as ColumnDefinition[];

    return {
      columns, dataRows: baseDataRows
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

table tr td.col-2 {
  text-align: right;
}
</style>
