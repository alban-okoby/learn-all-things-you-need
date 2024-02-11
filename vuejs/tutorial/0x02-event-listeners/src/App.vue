<script>
export default {
  // The reactive state goes here
  data() {
    return {
      message: "Event Listeners",
      changeMe: "Change Me",
      titleClass: "title",
    };
  },
  methods: {
    toggleColor() {
      if (this.titleClass == "title") {
        this.titleClass = "title-dark";
      } else {
        this.titleClass = "title";
      }
    },
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
  <br />
  <button :class="titleClass" @click="toggleColor">{{ changeMe }}</button>
</template>

<style>
  button {
    color: white;
    padding: 0.5rem 0.5rem;
    border-radius: .5rem;
    outline: none;
  }
  .title {
    background-color: red;
  }
  .title-dark {
    background-color: blue;
  }
</style>
