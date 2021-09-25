<template>
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
      <button v-on:click="signUp">登録</button>
  </div>
</template>
<script>
// import { firebase } from "firebase/firestore"





</script>

<style scoped>

</style>
