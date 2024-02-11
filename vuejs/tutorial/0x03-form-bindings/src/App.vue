<script>
export default {
  // The reactive state goes here
  data() {
    return {
      chap: "Form Bindings",
      text: "",
    };
  },
};
</script>

<template>
  <h1>{{ chap }}</h1>
  <br />
  <input v-model="text" />
  <p>{{ text }}</p>
</template>
