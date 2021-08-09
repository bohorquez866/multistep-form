<template>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/sass/styles";

h1 {
  margin-top: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
