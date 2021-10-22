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
    <div class="iconArea">
      <img class="icon2" src="../assets/icon.png" />
    </div>

    <div class="mailArea">
      <p>メールアドレス</p>
      <tr>
        <td>
          <input class="email" type="email" v-model="email" />
        </td>
      </tr>
    </div>

    <div class="passwordArea">
      <p>パスワード</p>
      <tr>
        <td>
          <input class="password" type="password" v-model="password" />
        </td>
      </tr>
    </div>

    <button class="btn" v-on:click="doLogin">ログイン</button>
    <div class="mataha">
      <p>--------------------- または ---------------------</p>
    </div>
    <div class="google">
      <img class="googleIcon" src="../assets/googleLogin.png" />
      <button class="googleButton" @click="googleSignin">
        googleアカウントでログイン
      </button>
    </div>

    <div>
      <router-link to="/Signup" class="signup">新規登録</router-link>
    </div>
    <div class="logout">
      <button v-on:click="log_out">ログアウト</button>
    </div>
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
  width: 40%;
  height: 500px;
  border: solid;
  border-color: #36d9ba;
  border-radius: 80px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 50px;
}
.iconArea {
  height: 53px;
  margin-left: 40%;
  margin-top: 30px;
  margin-bottom: 2px;
}
.icon2 {
  height: 30px;
}
p {
  font-weight: 550;
  font-size: 16px;
  color: #606060;
  margin-left: 20%;
  margin-top: 5px;
  margin-bottom: 5px;
}
input {
  border: 1px solid #606060;
  border-color: #606060;
  border-radius: 4px;
  margin-left: 34%;
  margin-bottom: 5px;
}
input.email {
  padding: 5px 10px;
  font-size: 12px;
  width: 310px;
}
input.password {
  padding: 5px 10px;
  font-size: 12px;
  width: 310px;
}
.btn {
  padding: 8px 40px;
  margin-left: 38%;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 30px;
  font-weight: 600;
  color: #ffffff;
  background-color: #36d9ba;
  border: none;
  transition: 0.3s;
}
.btn:hover {
  transform: translateY(-5px);
  opacity: 0.7;
}
.mataha {
  margin-left: 6%;
}
.mataha p {
  font-weight: 400;
  font-size: 16px;
}
.google {
  border: 1px solid #606060;
  border-color: #606060;
  border-radius: 30px;
  width: 56%;
  margin-left: 24%;
  margin-top: 25px;
  margin-bottom: 5px;
  font-size: 14px;
  padding: 3px 10px;
}
.googleIcon {
  height: 22px;
  float: left;
  margin: 5px 20px 0 15px;
}
.googleButton {
  height: 30px;
}
.signup {
  padding: 8px 40px;
  margin-top: 25px;
  margin-bottom: 100px;
  margin-left: 23%;
  border-radius: 30px;
  font-weight: 600;
  color: #ffffff;
  background-color: #36d9ba;
  border: none;
  transition: 0.3s;
  float: left;
}
.logout {
  padding: 8px 25px;
  margin-left: 5%;
  margin-top: 25px;
  margin-bottom: 100px;
  border-radius: 30px;
  font-weight: 600;
  color: #606060;
  background-color: #fff;
  border: solid 1px #606060;
  transition: 0.3s;
  float: left;
}
</style>
