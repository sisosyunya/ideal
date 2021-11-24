<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> |
    <router-link to="/home">アイデアをみる</router-link> |
    <router-link to="/login">ログイン</router-link> |
        <router-link to="/mypage">マイページ</router-link> |
  </div>

  <div class="signup">
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

    <button class="btn" v-on:click="doSignup">登録</button>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  methods: {
    async doSignup() {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert("登録完了");
          this.$router.push("/");
        })
        .catch(function(error) {
          //失敗の処理
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert("登録できませんでした");
        });
    },
  },
};
</script>

<style coped>
.signup {
  width: 40%;
  height: 340px;
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
  margin-left: 39%;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 30px;
  font-weight: 600;
  color: #ffffff;
  background-color: #36d9ba;
  border: none;
  transition: 0.3s;
}
</style>
