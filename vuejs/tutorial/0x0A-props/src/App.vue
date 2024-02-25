<script>
import Child from './components/child.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
      greeting: 'Hello du parent'
    }
  },
  props: {
    msg: String
  }

}
</script>

<template>
  <Child :msg="msg"/>
</template>