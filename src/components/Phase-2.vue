<template>
  <h2>informações basicas</h2>
  <article class="phase ">
    <div class="input-wrapper">
      <label for="name">Nome</label>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        :value="$store.getters.user.name"
        @input="$emit('update:name', $event.target.value)"
        required
        ref="inputName"
      />
    </div>

    <div class="input-wrapper">
      <label for="username">Sobrenome</label>
      <input
        type="text"
        name="username"
        placeholder="Sobrenome"
        :value="$store.getters.user.username"
        @input="$emit('update:username', $event.target.value)"
        required
        ref="inputUsername"
      />
    </div>

    <div class="input-wrapper">
      <label for="date">Fecha de Nascimento</label>
      <input
        type="date"
        name="date"
        placeholder="Fecha de Nascimento"
        required
        :value="$store.getters.user.date"
        @input="$emit('update:date', $event.target.value)"
        ref="inputDate"
      />
    </div>

    <div class="input-wrapper">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="email"
        :value="$store.getters.user.email"
        @input="$emit('update:email', $event.target.value)"
        required
        ref="inputEmail"
      />
    </div>

    <div class="input-wrapper">
      <label for="phone">Telefone</label>
      <input
        type="text"
        :value="$store.getters.user.phone"
        @input="$emit('update:phone', $event.target.value)"
        name="phone"
        placeholder="Telefone"
        required
        ref="inputPhone"
      />
    </div>
  </article>

  <div class="btns">
    <button @click.prevent="goBack" type="button" class="add-user">
      Voltar
    </button>

    <button type="button" @click.prevent="proceedToNext" class="add-user">
      Avancar
    </button>
  </div>

  <span class="progress-bar" :class="barClass"></span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      user: {
        name: "",
        username: "",
        date: "",
        email: "",
        phone: "",
      },
      barClass: "",
    };
  },
  computed: {
    userData() {
      return this.$store.getters.user;
    },
    userTypes() {
      return this.$store.state.selectedType;
    },
  },
  mounted() {
    this.checkBar();
  },
  methods: {
    checkBar() {
      if (this.userTypes == "usuario") {
        this.barClass = "user-phase-2 ";
      } else if (this.userTypes == "instrutor") {
        this.barClass = "instructor-phase-2";
      }
    },

    proceedToNext() {
      this.$store.commit("changeDefaultView");
    },
    goBack() {
      this.$store.commit("returnPreviousView");
    },
  },
};
</script>

<style lang="scss" scoped>
.user-phase-2 {
  &::before {
    width: 66%;
  }
}
.instructor-phase-2 {
  &::before {
    width: 50%;
  }
}
</style>
