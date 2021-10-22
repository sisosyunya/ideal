<template>
  <router-view />
</template>

<script>
import "ress";

export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.atama {
  height: 70px;
  width: 100%;
  background-color: #6ae5cd;
}

.icon {
  margin-top: 15px;
  margin-left: 3%;
  height: 40px;
}
</style>
