

<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> | 
    <router-link to="/home">アイデアをみる</router-link> | 
  </div>
    <div class="post">
      <div class="space"></div>
      <p>タイトル</p>
      <input class="title" v-model="title" placeholder="タイトル" />
      <p>カテゴリ</p>
      <select v-model="category" class="category">
        <option disabled value="">選択してください</option>
        <option>自由研究</option>
        <option>読書感想文</option>
      </select>
      <p>内容</p>
      <input class="description" v-model="description" placeholder="詳細" />
      <p>販売価格</p>
      <input class="price" v-model="price" placeholder="価格" type="number" />
      <button class="btn" @click="addIdea" :disabled="deleteIsLoading">投稿</button>
    </div>
</template>

<script>
import { addDoc, collection } from "firebase/firestore";
import { db } from '../main';
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
</script>

<style scoped>

.category {
  border :1px solid black

}

input {
    border :1px solid #606060;
    border-color :#606060;
    border-radius: 4px;

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

input.description {
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
  color: #ffffff;
  background-color: #36D9BA;
  border: none;
  transition: 0.3s;
}

.btn:hover {
  transform: translateY(-5px);
  opacity: 0.7;
}

</style>
