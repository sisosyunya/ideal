<template>
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
    }
  }
}


</script>

<style lang="scss" scoped>
</style>