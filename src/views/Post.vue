<template>
    <div class="post">
      <input class="title" v-model="title" placeholder="タイトル" />
      <input class="description" v-model="description" placeholder="詳細" />
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
    border-radius: 30px;
    margin-right: auto;
    margin-left: auto;
}
</style>