<template>
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> | 
    <router-link to="/home">アイデアをみる</router-link> | 
    <router-link to="/login">ログイン</router-link> |
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
    <div class="sign">
      <table>
          <tr>
              <th>メールアドレス:</th>
          </tr>
          <tr>
              <td><input type="email" v-model="email"></td>
         </tr>
         <tr>
             <th>パスワード</th>
            </tr>
            <td>
            <input type="password" v-model="password"></td>
      </table>
      <button v-on:click="doSignup">登録</button>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default{
  methods:{
    async doSignup(){
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(()=>{
        alert('登録完了')
      })
      .catch(function(error){
        //失敗の処理
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert('ログインできませんでした')
      }
      )
    }
  }
}


</script>

<style lang="scss" scoped>
</style>