<template>
  <table>
    <thead>
      <th>Col</th>
    </thead>
    <tbody>
      <tr>
        <td>Row 1</td>
      </tr>
      <tr>
        <td>Row 2</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'AVueGrid',
  props: {
    
  },
  setup: () => {
    const count = ref(0)
    return { count }
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
