<template>
  <section class="phase phase-1">
    <h2>Usuario ou Instrutor?</h2>
    <div>
      <button
        type="button"
        @click="proceedToNext"
        :value="type"
        v-for="type in userTypes"
        :key="type.id"
      >
        {{ type }}
      </button>
    </div>
    <span class="progress-bar"></span>
  </section>
</template>

<script>
export default {
  computed: {
    props: {
      userType: {
        type: String,
        default: function() {
          return "";
        },
      },
    },
    userTypes() {
      return this.$store.state.userTypes;
    },
  },

  methods: {
    proceedToNext(e) {
      this.$store.commit("changeDefaultView");
      this.$store.commit("getUserType", e.target.value);
      this.$emit("update:userType", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  &::before {
    width: 25%;
  }
}
</style>
