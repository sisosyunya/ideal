<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/post">Post</router-link> | 
    <router-link to="/login">Login</router-link> |
    <router-link to="/entrance">Entrance</router-link> |
  </div>
    <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="user.userId" />
        <label>Password</label>
        <input type=password placeholder=password v-model="user.password" />
        <button type="submit">Sign In</button>
    </form>
    <div class="login">
        
        </div>
</template>
<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    doLogin() {
      this.$store.dispatch("auth", {
        userId: this.user.userId,
        userToken: 'dummy token'
      });
      this.$router.push(this.$route.query.redirect);
    }
  }
};
</script>