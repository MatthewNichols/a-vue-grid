<template>
    <tr>
        <td v-for="col in displayColumns" :key="col.title" :class="col.rowClass">
            {{ renderCellValue(dataRow, col) }}
        </td>
    </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ColumnDefinition, ColumnDataType } from "../types";

export default defineComponent({
    name: 'AVGGridRow',
    props: {
        columns: {
            type: Array as PropType<Array<ColumnDefinition>>,
            required: true
        },
        dataRow: {
            type: Object as PropType<any>
        },
        dataRowIdColumn: {
            type: String,
            default: "id"
        }
    },
    methods: {
        renderCellValue(row: any, column: ColumnDefinition): string {
            return row[column.valuePropName];
        }
    },
    computed: {
        displayColumns(): ColumnDefinition[] {
            return this.columns.filter((c) => c.display === undefined || c.display === true);
        }
    }
});
</script>

<style lang="scss" scoped>
$border: 1px solid #000;

tr {
    td {
      border: $border;
    }
}
</style>