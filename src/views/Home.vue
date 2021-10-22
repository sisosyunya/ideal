<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> | 
    <router-link to="/home">アイデアをみる</router-link> | 
    <router-link to="/login">ログイン</router-link> |
  </div>
  <main>
  <div class="title">
      カテゴリ
  </div>
  <div>
      <select v-model="category" class="category">
        <option disabled value="">選択してください▼</option>
        <option>自由研究</option>
        <option>読書感想文</option>
      </select>
  </div>
  </main>

  <div class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../main"
import VCard from "../components/VCard.vue"

export default {
  name: 'Home',
  components: {
    VCard
  },
  data:()=> ({
    ideas: [],
    category: "",
  }),
  mounted() {
    this.fetchIdeas();
  },
  methods: {
    async fetchIdeas() {
      const querySnapshot = await getDocs(collection(db, "ideas"));
      querySnapshot.forEach((doc) => {
        this.ideas.push({ ...doc.data(), id: doc.id });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 100px;
}
.category {
  padding: 5px 10px;
  border :1px solid #606060;
  border-color :#606060;
  border-radius: 4px;
}

select.category {
  //margin-left: 65%;
  margin-bottom: 20px;
}

.spinner{
  
   resize: horizontal;
}

.title{
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: #606060;
  margin-left: 10%;
}

main{
    display: flex;
     margin-left: 60%;
}



::v-deep .card {
  transition: 0.3s;
}
</style>

