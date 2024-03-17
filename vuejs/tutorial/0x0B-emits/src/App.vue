<script>
import Child from './components/child.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
      childMsg: 'Hello du parent'
    }
  },

}
</script>

<template>
  <h2> Composant parent </h2>
  <Child @response="(msg) => childMsg = msg"/>
  <p> {{childMsg }} </p>
</template>