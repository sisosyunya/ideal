<template>
  <div class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>

  <button class="btn" v-on:click="getttt">チェック</button>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs } from "@firebase/firestore";
import VCard from "../components/VCard.vue";
import { db } from "../main";
import { collection } from "firebase/firestore";

export default {
  name: "Mypage",
  components: {
    VCard,
  },
  data: () => ({
    ideas: [],
    uid: "",
    category: "",
  }),
  mounted() {
    this.getttt();
  },
  methods: {
    async getttt() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // ...
          const uid = user.uid;
          console.log(uid);
          const querySnapshot = await getDocs(collection(db, "ideas"));
          querySnapshot.forEach((doc) => {
            this.ideas.push({ ...doc.data(), id: doc.id });
          });
        } else {
          // User is signed out
          // ...
          alert("losing");
        }
      });
    },
  },
};
</script>
