<script>
export default {
  mounted() {
    this.$refs.pElementRef.textContent = 'monté avec succès'
  },
}
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>