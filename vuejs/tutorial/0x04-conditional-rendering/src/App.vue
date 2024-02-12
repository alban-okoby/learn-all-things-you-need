<script>
export default {
  // The reactive state goes here
  data() {
    return {
      isUser: true,
    };
  },
  methods: {
    toggleContent() {
      this.isUser = !this.isUser;
    }
  }
};
</script>

<template>
  <button @click="toggleContent">Toggle</button>
  <h1 v-if="isUser">Public content + Member content</h1>
  <h1 v-else>Only Public content </h1>
</template>
