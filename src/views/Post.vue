<template>
    <div class="post">
      <p>タイトル</p>
      <input class="title" v-model="title" placeholder="タイトル" />
      <p>内容</p>
      <input class="description" v-model="description" placeholder="詳細" />
      <p>販売価格</p>
      <input class="price" v-model="price" placeholder="価格" type="number" />
      <button @click="addIdea">登録</button>
    </div>
</template>

<script>
import { addDoc, collection } from "firebase/firestore";
import { db } from '../main';

export default {
    name: "Post",
    data: ()=> ({
        title: "",
        description: "",
        price: null
    }),
    methods: {
        async addIdea() {
            await addDoc(collection(db, "ideas"), {
                title: this.title,
                description: this.description,
                price: this.price
            })
            this.$router.push("/")
        },
    }
}
</script>

<style scoped>
.post {
    width: 80%;
    height: 600px;
    border: solid;
    border-color: #61F0AD;
    border-radius: 80px;
    margin-right: auto;
    margin-left: auto;
}

.post p {
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #606060;
}

input.title {
  width: 78%;
  padding: 8px 10px;
  
}

input.description {
  width: 78%;
  padding: 8px 10px;
}


</style>