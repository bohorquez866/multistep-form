<template>
  <h1>informações de localidade</h1>
  <article class="phase">
    <div class="input-wrapper">
      <label for="street">Rua</label>
      <input
        type="text"
        name="street"
        placeholder="Rua"
        :value="$store.getters.user.street"
        @input="$emit('update:street', $event.target.value)"
      />
    </div>

    <div class="input-wrapper">
      <label for="cep">CEP</label>
      <input
        type="number"
        name="cep"
        placeholder="CEP"
        :value="$store.getters.user.cep"
        @input="$emit('update:cep', $event.target.value)"
      />
    </div>

    <div class="input-wrapper">
      <label for="city">Cidade</label>
      <input
        type="text"
        name="city"
        placeholder="Cidade"
        :value="$store.getters.user.city"
        @input="$emit('update:city', $event.target.value)"
      />
    </div>

    <div class="input-wrapper">
      <label for="state">Estado</label>
      <input
        type="text"
        name="street"
        placeholder="Estado"
        :value="$store.getters.user.state"
        @input="$emit('update:state', $event.target.value)"
      />
    </div>

    <div class="input-wrapper">
      <label for="country">pais</label>
      <input
        type="text"
        name="street"
        placeholder="pais"
        :value="$store.getters.user.country"
        @input="$emit('update:country', $event.target.value)"
      />
    </div>
  </article>
  <div>
    <div class="btns">
      <button @click.prevent="goBack" class="add-user" type="button">
        Voltar
      </button>

      <button
        class="add-user"
        v-if="userTypes == 'instrutor'"
        type="button"
        @click.prevent="proceedToNext"
      >
        Avancar
      </button>

      <button
        class="add-user"
        v-else-if="userTypes == 'usuario'"
        type="button"
        @click.prevent="startOver"
      >
        finalizar
      </button>
    </div>
  </div>
  <span class="progress-bar" :class="barClass"></span>
</template>

<script>
export default {
  data() {
    return {
      locationInfo: {
        street: "",
        cep: "",
        city: "",
        state: "",
        country: "",
      },
      barClass: "",
    };
  },
  props: {
    street: {
      type: String,
      default: "",
    },
    cep: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.checkBar();
  },
  computed: {
    userTypes() {
      return this.$store.state.selectedType;
    },
  },
  methods: {
    checkBar() {
      if (this.userTypes == "usuario") {
        this.barClass = "user-phase-3 ";
      } else if (this.userTypes == "instrutor") {
        this.barClass = "instructor-phase-3";
      }
    },
    goBack() {
      this.$store.commit("returnPreviousView");
    },
    startOver() {
      this.$store.commit("startOver");
      this.$store.commit("addUserInfo", this.user);
    },
    proceedToNext() {
      this.$store.commit("changeDefaultView");
      this.$store.commit("addUserInfo", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-phase-3 {
  &::before {
    width: 100%;
  }
}
.instructor-phase-3 {
  &::before {
    width: 75%;
  }
}
</style>
