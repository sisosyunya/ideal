<template>
  <div class="atama">
    <img class="icon" src="../assets/icon.png" />
  </div>

  <div id="nav">
    <router-link to="/">トップ</router-link> |
    <router-link to="/post">アイデアをだす</router-link> |
    <router-link to="/home">アイデアをみる</router-link> |
    <router-link to="/login">ログイン</router-link> |
    <router-link to="/mypage">マイページ</router-link> |
    <br>
      <router-link to="/buy">購入した商品</router-link> |
  </div>
  <div class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>

  <button class="btn" v-on:click="getttt">チェック</button>
</template>
<script>
import { getDocs, collection, where, query } from "@firebase/firestore";
import VCard from "../components/VCard.vue";
import { db } from "../main";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default {
  name: "Mypage",
  components: {
    VCard,
  },
  data: () => ({
    ideas: [],
    // uid: null,
    category: "",
    auth: getAuth(),
  }),
  //   mounted() {
  //     this.getttt();
  //   },

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!完成したらmountedにしてボタンを消す!!!!!!!!!!!!!!!!!!!!!!!
  methods: {
    async getIdea(user) {
      const uid = user.uid;
      console.log("foiajoifal");
      const q = query(collection(db, "ideas"), where("user", "==", uid));
      console.log("uuu");
      const querySnapshot =await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.ideas.push({ ...doc.data(), id: doc.id });
        console.log("aaaa");
      });
    },
    async getttt() {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.getIdea(user);
          console.log("iiibuigiii");
        } else {
          console.log("rrrrr");
        }
      });
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 100px;
}
</style>
