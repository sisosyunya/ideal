<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> | 
    <router-link to="/home">アイデアをみる</router-link> | 
        <router-link to="/login">ログイン</router-link> |
               <router-link to="/chat">チャット</router-link> |

  </div>
    <div class="post">
      <div class="space"></div>
      <p>タイトル</p>
      <input class="title" v-model="title" placeholder="タイトル" />
      <p>カテゴリ</p>
      <select v-model="category" class="category">
        <option disabled value="">選択してください▼</option>
        <option>自由研究</option>
        <option>読書感想文</option>
      </select>
      <p>内容</p>
      <textarea class="description" v-model="description" placeholder="詳細"></textarea>
      <p>販売価格</p>
      <input class="price" v-model="price" placeholder="価格" type="number" />
      <button class="btn" @click="addIdea" :disabled="deleteIsLoading">投稿</button>
      <div v-show="checklogin === true">
      </div>
      <div v-show="checklogin === false">
        <p>ログインしてください</p>
        <router-link to="/login" tag="button">ログインする</router-link>
        <p>アカウントを持っていない方はこちら</p>
        <router-link to="/signup" tag="button">新規登録</router-link>
      </div>
    </div>
</template>
<script>
import { addDoc, collection } from "firebase/firestore";
import { db } from '../main';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "Post",
    data: ()=> ({
        title: "",
        category: "",
        description: "",
        price: null,
        deleteIsLoading:false
    }),
    methods: {
        async addIdea() {
            console.log("aaa")
            this.deleteIsLoading = true,
            await addDoc(collection(db, "ideas"), {
                title: this.title,
                description: this.description,
                price: this.price
            })
            this.$router.push("/")
            this.deleteIsLoading = false
        },
    }
}



// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

</script>
<style scoped>
.category {
  padding: 5px 10px;
  border :1px solid #606060;
  border-color :#606060;
  border-radius: 4px;
}
input {
    border :1px solid #606060;
    border-color :#606060;
    border-radius: 4px;
}
textarea {
    border :1px solid #606060;
    border-color :#606060;
    border-radius: 4px;
    resize: vertical;
}
.post {
    width: 80%;
    height: 600px;
    border: solid;
    border-color: #36D9BA;
    border-radius: 80px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 80px;
}
.space {
  height: 40px;
}
.post p {
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #606060;
  margin-left: 10%;
  margin-top: 20px;
}
input.title {
  width: 78%;
  padding: 8px 10px;
  margin-left: 10%;
  margin-bottom: 20px;
}
select.category {
  margin-left: 10%;
  margin-bottom: 20px;
}
textarea.description {
  width: 78%;
  padding: 8px 10px;
  margin-left: 10%;
  margin-bottom: 20px;
}
input.price {
  width: 30%;
  padding: 8px 10px;
  margin-left: 10%;
  margin-bottom: 20px;
  float: left;
}
.btn {
  padding: 8px 40px;
  margin-left: 80%;
  border-radius: 30px;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #36D9BA;
  border: none;
  transition: 0.3s;
}
.btn:hover {
  transform: translateY(-5px);
  opacity: 0.7;
}
</style>