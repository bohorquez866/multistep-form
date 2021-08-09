<template>
  <div class="searchbar-wrapper ">
    <input
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Pesquise pelo usuario"
    />

    <button class="add-user" @click="addUser">Adicionar</button>
  </div>
</template>

<script>
export default {
  methods: {
    addUser() {
      this.$store.commit("changeDefaultView");
    },
  },
};
</script>
