<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> |
    <router-link to="/home">アイデアをみる</router-link> |
    <router-link to="/login">ログイン</router-link> |
    <router-link to="/newchatform">テスト</router-link> |
  </div>
  <div class="google">
    <button @click="googleSignin">googleアカウントでログイン</button>
  </div>
  <div class="sign">
    <table>
      <tr>
        <th>メールアドレス:</th>
      </tr>
      <tr>
        <td><input type="email" v-model="email" /></td>
      </tr>
      <tr>
        <th>パスワード</th>
      </tr>
      <td>
        <input type="password" v-model="password" />
      </td>
    </table>
    <button v-on:click="doLogin">ログイン</button>
  </div>
  <div>
    <router-link to="/Signup">Signup</router-link>
  </div>
  <div class="logout">
    <button v-on:click="log_out">ログアウト</button>
  </div>
  <!-- yokiyoki -->
</template>

<script>
// import { firebase } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider ,signOut } from "firebase/auth";
export default {
  methods: {
    async doLogin() {
      // firebase.auth().signIn
      const auth = getAuth();
      // const user = userCredential.user;
      await signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          //成功時の処理
          alert("ログイン完了");
        })
        .catch(function (error) {
          //失敗の処理
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // alert("ログインに失敗しました");
        });
    },
    async googleSignin() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider);
    },
    async log_out() {
      const auth = getAuth();
      await signOut(auth)
        .then(() => {
          alert("signout");
        })
        .catch(function (error) {
          //  //失敗の処理
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert("ログインに失敗しました");
        });
    }
  }
  }
</script>