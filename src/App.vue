<template>
  <div class="atama">
    <img class="icon" src="./assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/post">Post</router-link> | 
    <router-link to="/login">Login</router-link> |
    <router-link to="/entrance">Entrance</router-link> |

  </div>
  <router-view/>
</template>

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
  background-color: #6AE5CD;
}

.icon {
  margin-top: 15px;
  margin-left: 3%;
  height: 40px;
}
</style>
