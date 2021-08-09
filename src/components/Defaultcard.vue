<template>
  <article class="default-view">
    <searchbar />
    <users-list />
    <button class="add-user" @click="addUser">Adicionar</button>
  </article>
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
