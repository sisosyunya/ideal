<template>
  <div class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../main"
import VCard from "../components/VCard.vue"

export default {
  name: 'Test',
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
        this.ideas.push(doc.data());
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
