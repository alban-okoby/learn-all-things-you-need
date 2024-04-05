<script>
export default {
  // Déclaration des évènement
  emits: ["response"],
  created() {
    // emit Arg
    this.$emit("response", "Message du composant enfant");
  },
};
</script>
