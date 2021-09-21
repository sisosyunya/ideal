<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>
  <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> | 
    <router-link to="/home">アイデアをみる</router-link> | 
  </div>
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
    ideas: []
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
}

::v-deep .card {
  transition: 0.3s;
}
</style>

