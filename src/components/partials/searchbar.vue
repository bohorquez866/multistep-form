<template>
  <div class="searchbar-wrapper ">
    <input
      @keyup.enter="getFilteredUSers"
      v-model="searchbarValue"
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Pesquise pelo usuario"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchbarValue: "",
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    getFilteredUSers() {
      let x = this.users.filter((filtered) => {
        return filtered.name.toLowerCase().includes(this.searchbarValue);
      });
      console.log(x);

      this.$store.commit("getFilteredUsers", x);
    },
  },
};
</script>
