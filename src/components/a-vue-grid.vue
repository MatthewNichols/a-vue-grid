<template>
  <table class="a_vue_grid">
    <thead>
      <th v-for="col in columns" :key="col.title">{{ col.title }}</th>
    </thead>
    <tbody>
      <tr v-for="row in displayRows" :key="row[dataRowIdColumn]">
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
    },
    rowsPerPage: {
      type: Number,
      default: 10
    }
  },
  computed: {
    displayRows(): any[] {
      return this.dataRows?.filter((row, index) => index < this.rowsPerPage) || [];
    }
  }
})
</script>

<style scoped lang="scss">
$border: 1px solid #000;

table.a_vue_grid {
  border-collapse: collapse;

  th {
    border: $border;
  }

  td {
    border: $border;
  }
}
</style>
