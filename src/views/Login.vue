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
  <div class="login">
    <div class="loginMargin">
      
        <table>
          <tr>
            <th>メールアドレス</th>
          </tr>
          <tr>
            <td><input class="mail" type="email" v-model="email" /></td>
          </tr>
          <tr>
            <th>パスワード</th>
          </tr>
          <td>
            <input class="password" type="password" v-model="password" />
          </td>
        </table>

        <button class="btn" v-on:click="doLogin">ログイン</button>
      
      <div class="google">
        <button @click="googleSignin">googleアカウントでログイン</button>
      </div>
    </div>
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
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
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
        .catch(function(error) {
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
        .catch(function(error) {
          //  //失敗の処理
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert("ログインに失敗しました");
        });
    },
  },
};
</script>

<style scoped>
.login {
  width: 35%;
  height: 400px;
  border: solid;
  border-color: #36d9ba;
  border-radius: 80px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
}
.loginMargin {
  margin: 20px 10% 0 10%;
}
.icon2 {
  height: 25px;
  padding-left: 25%;
}
.sign {
  width: 100%;
}
.sign th {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #606060;
  padding-left: 20%;
}
.mail {
  border: 1px solid #606060;
  border-color: #606060;
  border-radius: 4px;
  resize: vertical;
}
.password {
  border: 1px solid #606060;
  border-color: #606060;
  border-radius: 4px;
  resize: vertical;
}
.btn {
  padding: 8px 25px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  background-color: #36d9ba;
  border: none;
  transition: 0.3s;
}
.btn:hover {
  transform: translateY(-5px);
  opacity: 0.7;
}
</style>
