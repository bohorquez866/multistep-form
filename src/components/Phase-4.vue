<template>
  <h2>informações de especialidade</h2>
  <article class="phase phase-4">
    <label for="especialidade">Especialidade</label>
    <div>
      <span>
        <input
          type="text"
          name="especialidade"
          placeholder="Especialidade"
          :value="arraySpecialities.join(', ')"
        />
      </span>
      <input role="button" @click="startOver" class="add-user" value="Enviar" />
    </div>

    <input
      class="checkbox"
      type="checkbox"
      id="crossfit"
      name="crossfit"
      value="crossfit"
      v-model="arraySpecialities"
    />
    <label for="crossfit"> Crossfit </label>
    <input
      class="checkbox"
      type="checkbox"
      id="abdomen"
      name="abdomen"
      value="abdomen"
      v-model="arraySpecialities"
    />
    <label for="abdomen"> Abdomen </label>
  </article>
  <button @click="goBack" class="add-user back">Voltar</button>
  <span class="progress-bar user-phase-4"></span>
</template>

<script>
export default {
  props: {
    especiality: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  computed: {
    specialities() {
      return this.specialty.split(",");
    },

    sp() {
      return this.$store.getters.user;
    },
    sps() {
      return this.$store.getters.specialities;
    },
  },
  data() {
    return {
      specialty: "",
      arraySpecialities: this.$store.getters.user
        ? this.$store.getters.user.especiality
        : [],
      crossfitController: false,
      abdomenController: false,
    };
  },
  methods: {
    onChangeValue(e) {
      this.specialty = e.target.value;
    },
    goBack() {
      this.$store.commit("returnPreviousView");
    },

    startOver() {
      let obj = {
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
      };
      this.$store.commit("showAlert");
      this.$store.commit("setUserInfo", obj);
      this.$store.commit("pushUserToUsers", this.$store.state.user);
      this.$store.commit("startOver");
    },
  },
  watch: {
    arraySpecialities(newValue) {
      this.$emit("update:especiality", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-phase-4 {
  &::before {
    width: 100%;
  }
}
</style>
