<template>
  <div class="a_vue_grid">
    <table>
      <thead>
        <th v-for="col in columns" :key="col.title">{{ col.title }}</th>
      </thead>
      <tbody>
        <tr v-for="row in displayRows" :key="row[dataRowIdColumn]">
          <td v-for="col in columns" :key="col.title">{{ row[col.valuePropName] }}</td>
        </tr>
      </tbody>
    </table>
    <page-selector @pageChange="pageChangeHandler" :currentPageIndex="currentPage"  />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue';
import { PageChangeTypes, ColumnDefinition } from '../types';
import PageSelector from "./page-selector.vue";

export default defineComponent({
  name: 'AVueGrid',
  components: { PageSelector },
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
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    displayRows(): any[] {
      const skip = this.currentPage * this.rowsPerPage;
      const toIndex = skip + this.rowsPerPage;
      return this.dataRows?.filter((row, index) => index >= skip && index < toIndex) || [];
    },
  },
  methods: {
    pageChangeHandler(pageChange: PageChangeTypes) {
      console.log(pageChange)
      this.currentPage = this.currentPage + 1;
      switch (pageChange as PageChangeTypes) {
        case PageChangeTypes.First:
            this.currentPage = 0;
          break;
      
        case PageChangeTypes.Previous:
            if (this.currentPage !== 0) {
              this.currentPage = this.currentPage - 1;
            } 
          break;
      
        case PageChangeTypes.Next:
            this.currentPage = this.currentPage + 1;
          break;
      
        case PageChangeTypes.Last:
            this.currentPage = 0;
          break;
      
        default:
          break;
      }
    }
  }
})
</script>

<style scoped lang="scss">
$border: 1px solid #000;

.a_vue_grid {
  display: flex;
  flex-direction: column;

  table {
    border-collapse: collapse;
    margin-bottom: 20px;

    th {
      border: $border;
    }

    td {
      border: $border;
    }
  }
}
</style>
