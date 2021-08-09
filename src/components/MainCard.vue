<template>
  <section class="Card">
    <h1 class="title">Form</h1>
    <pre>{{ userModified }}</pre>
    <default-card v-if="CurrentView == 0" />
    <form @submit.prevent="" v-if="showForm">
      <phase-1 v-if="CurrentView == 1" v-model:userType="userObject.userType" />

      <phase-2
        v-if="CurrentView == 2"
        v-model:name="userObject.name"
        v-model:username="userObject.username"
        v-model:date="userObject.date"
        v-model:email="userObject.email"
        v-model:phone="userObject.phone"
      />

      <phase-3
        v-if="CurrentView == 3"
        v-model:street="userObject.street"
        v-model:cep="userObject.cep"
        v-model:city="userObject.city"
        v-model:state="userObject.state"
        v-model:country="userObject.country"
      />

      <phase-4
        v-if="CurrentView == 4 && selectedType == 'instrutor'"
        v-model:especiality="userObject.especiality"
      />
    </form>
  </section>
  <div v-if="$store.state.success" class="success-message">
    Dados adicionados correitamente
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setUserInfo", this.userObject);
  },
  data() {
    return {
      showForm: true,
      userObject: {
        name: "",
        username: "",
        date: "",
        email: "",
        phone: "",
        street: "",
        cep: "",
        city: "",
        state: "",
        country: "",
        userType: "",
        especiality: [],
      },
    };
  },

  computed: {
    CurrentView() {
      return this.$store.getters.defaultView;
    },
    selectedType() {
      return this.$store.getters.selectedType;
    },
    userModified() {
      return this.$store.getters.user;
    },
  },
  watch: {
    userObject: {
      handler() {
        console.log("hola");
        this.$store.commit("setUserInfo", this.userObject);
      },
      deep: true,
    },
  },
};
</script>
