<template>
    <div class="page-selector">
        <button @click="changePageHandler(PageChangeTypes.First)">&lt;&lt;</button>
        <button @click="changePageHandler(PageChangeTypes.Previous)">&lt;</button>
        <span class="page-number-display"> {{ currentPageDisplay }} </span>
        <button @click="changePageHandler(PageChangeTypes.Next)">&gt;</button>
        <button @click="changePageHandler(PageChangeTypes.Last)">&gt;&gt;</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { PageChangeTypes } from "../types";

export default defineComponent({
    name: 'AVGPageSelector',
    props: {
        currentPageIndex: {
            type: Number,
            default: 0
        }
    },
    emits: { 
        pageChange(payload: { pageChange: PageChangeTypes }) {
            return true;
        } 
    },
    setup() {
        return {
            PageChangeTypes
        }
    },
    methods: {
        changePageHandler(pageChange: PageChangeTypes) {
            this.$emit("pageChange", { pageChange });
        }
    },
    computed: {
        currentPageDisplay(): number {
          return this.currentPageIndex + 1;
        }
    }
});
</script>

<style lang="scss" scoped>

</style>