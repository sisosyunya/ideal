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
    <div class="title">カテゴリ</div>
    <div>
      <!-- <option>選択してください▼</option> -->
      <!-- <select v-model="category" id="selectCategory" class="category">
        <option disabled value="">選択してください▼</option>
        <option>全て</option>
        <option>自由研究</option>
        <option>読書感想文</option>
        selectCategories[selectedCategory-1].label
      </select> -->
      <select v-model="category" @change="fetchIdeasct(selectCategories[category].label)">
        <option disabled value="">選択してください▼</option>
        <option
          v-for="category in selectCategories"
          :value="category.id"
          :key="category.id"
        >
          {{ category.label }}
        </option>
      </select>

    </div>
    <!-- 関数実行テストボタン -->
    <!-- <button v-on:click="fetchIdeasct('自由研究')">実行</button> -->
  </main>
  <!-- 自由研究表示 -->
  <div v-if="search" class="container">
    <v-card v-for="(ideas, i) in ideas" :key="i" :idea="idea" />
  </div>
  <!-- 読書感想文表示 -->
  <div v-else-if="read" class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>
  <!-- すべて表示 -->
  <div v-else class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../main";
import VCard from "../components/VCard.vue";
import { query, where } from "firebase/firestore";

export default {
  name: "Home",
  // search: false,
  // read: false,
  components: {
    VCard,
  },
  // select = document.getElementById('selectCategory'),
  // select.onchange = function(){
  // alert(this.value);
  // },
  data :()=> {
    return{
      search: false,
      read: false,
      ideas: [],
      selectCategories : [
        { id: 0, label: "自由研究" },
        { id: 1, label: "読書感想文" },
      ],
      category : 0

    }
  },
  mounted() {
    this.fetchIdeas();
  },
  methods: {
    async fetchIdeas() {
      const querySnapshot = await getDocs(collection(db, "ideas"));
      querySnapshot.forEach((doc) => {
        this.ideas.push({ ...doc.data(), id: doc.id });
        console.log({ ...doc.data(), id: doc.id });
      });
    },
    // ひろき作業中↓↓↓↓↓↓↓↓
    async fetchIdeasct(category) {
      // const ideasct = collection(db, "ideas");
      // remove() {
      console.log(this.ideas.length);
      this.ideas.splice(0, this.ideas.length);
      const queryct = query(
        collection(db, "ideas"),
        where("category", "==", category),
      );
      console.log(this.category)
      const queryctSnapshot = await getDocs(queryct);
      queryctSnapshot.forEach((doc) => {
        this.ideas.push({ ...doc.data(), id: doc.id });
        console.log({ ...doc.data(), id: doc.id }),
          console.log(this.search === true);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1024px;
  margin: 0 auto;
}
.category {
  padding: 5px 10px;
  border: 1px solid #606060;
  border-color: #606060;
  border-radius: 4px;
}

select.category {
  //margin-left: 65%;
  margin-bottom: 20px;
}

.spinner {
  resize: horizontal;
}

.title {
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: #606060;
  margin-left: 10%;
}

main {
  display: flex;
  margin-left: 60%;
}

::v-deep .card {
  transition: 0.3s;
}
</style>

