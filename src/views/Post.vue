<template>
    <div class="post">
      <input v-model="title" placeholder="タイトル" />
      <input v-model="description" placeholder="詳細" />
      <input v-model="price" placeholder="価格" type="number" />
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