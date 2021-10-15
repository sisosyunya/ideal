<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
      <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> | 
    <router-link to="/home">アイデアをみる</router-link> | 
        <router-link to="/login">ログイン</router-link> |
  </div>
  <div class="sign">
      <table>
          <tr>
              <th>メールアドレス:</th>
          </tr>
          <tr>
              <td><input type="email" v-model="mailaddress"/></td>
         </tr>
         <tr>
             <th>パスワード</th>
            </tr>
            <td>
            <input type="password" v-model="password"></td>
      </table>
      <button v-on:click="doLogin">ログイン</button>
  </div>
  <div>
      <router-link to="/Signup">Signup</router-link>
  </div>
</template>
<script>
// import { firebase } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default{
  methods:{
   async doLogin(){
      // firebase.auth().signIn
        const auth = getAuth();
        // const user = userCredential.user;
        await signInWithEmailAndPassword(auth,this.email,this.password);
      }
    }
  }




</script>

<style scoped>

</style>
