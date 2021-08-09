<template>
  <h2>informações de especialidade</h2>
  <article class="phase">
    <div>
      <label for="especialidade">Especialidade</label>

      <input
        type="text"
        name="especialidade"
        placeholder="Especialidade"
        @input="onChangeValue($event)"
        :value="
          $store.getters.user ? $store.getters.user.especiality.join() : ''
        "
      />

      <input type="submit" @click="startOver" value="Enviar" />
    </div>

    <div v-for="item in specialities" :key="item.id">
      <input type="button" :value="item" />
    </div>
  </article>
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
  },
  data() {
    return {
      specialty: "",
    };
  },
  methods: {
    onChangeValue(e) {
      this.specialty = e.target.value;
    },
    startOver() {
      this.$store.commit("startOver");
    },
  },
  watch: {
    specialities(newValue) {
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
