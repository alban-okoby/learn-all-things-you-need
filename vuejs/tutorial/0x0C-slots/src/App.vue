<script>
import Child from './components/child.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
      childMsg: 'Hello depuis le parent'
    }
  },

}
</script>

<template>
  <!-- <h2> Composant parent </h2> -->
  <Child> Message: {{ childMsg }}  </Child>
</template>