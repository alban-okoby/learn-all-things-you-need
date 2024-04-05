<script>
export default {
  // The reactive state goes here
  data() {
    return {
      message: 'Declarative Rendering',
      titleClass: 'title'
    }
  }
 
}
</script>

<template>
  <h1> {{ message }}  </h1> <br>
  <button :class="titleClass"> {{ message }}  </button>
</template>
