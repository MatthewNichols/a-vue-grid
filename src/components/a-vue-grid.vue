<template>
  <table>
    <thead>
      <th v-for="col in columns" :key="col.title">{{ col.title }}</th>
    </thead>
    <tbody>
      <tr v-for="row in dataRows" :key="row[dataRowIdColumn]">
        <td v-for="col in columns" :key="col.title">{{ row[col.valuePropName] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue';

export interface ColumnDefinition {
  title: string;
  valuePropName: string;
}

export default defineComponent({
  name: 'AVueGrid',
  props: {
    columns: {
      type: Array as PropType<Array<ColumnDefinition>>
    },
    dataRows: {
      type: Array as PropType<Array<any>>
    },
    dataRowIdColumn: {
      type: String,
      default: "id"
    }
  },
  setup: (props) => {
    
  }
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
