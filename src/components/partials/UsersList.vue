<template>
  <div class="list">
    <h3 v-if="!userList">Nenhum dado disponivel</h3>
    <ul>
      <li><strong>Name</strong></li>
      <li><strong> Localidade</strong></li>
      <li><strong>Contacto</strong></li>
      <li><strong>Role</strong></li>
    </ul>
    <user v-for="item in userList" :key="item" :user-info="item" />
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.getters.filteredUsers;
    },
  },
};
</script>
