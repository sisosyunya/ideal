<template>
  <div class="container">
    <v-card v-for="(idea, i) in ideas" :key="i" :idea="idea" />
  </div>

  <button class="btn" v-on:click="getttt">チェック</button>
</template>
<script>
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs,collection, where, query } from "@firebase/firestore";
import VCard from "../components/VCard.vue";
import { db } from "../main";


export default {
  name: "Mypage",
  components: {
    VCard,
  },
  data: () => ({
    ideas: [],
    // uid: null,
    category: "",
  }),
  //   mounted() {
  //     this.getttt();
  //   },

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!完成したらmountedにしてボタンを消す!!!!!!!!!!!!!!!!!!!!!!!
  methods: {
    async getttt(user) {
      //   const auth = getAuth();
      //   onAuthStateChanged(auth).then(() => {
      const uid = user.uid;
      console.log("iiii");
      const q = query(collection(db, "ideas"), where("user", "==", uid));
      console.log('uuu');
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.ideas.push({ ...doc.data(), id: doc.id });
        console.log("aaaa");
      });
      //   })
    },
  },
};
</script>

      // const auth = getAuth();
      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     // User is signed in, see docs for a list of available properties
      //     // https://firebase.google.com/docs/reference/js/firebase.User
      //     // ...
      //     const uid = user.uid;
      //     console.log(uid);
      //     const querySnapshot = await getDocs(collection(db, "ideas"));
      //     querySnapshot.forEach((doc) => {
      //       this.ideas.push({ ...doc.data(), id: doc.id });
      //     });
      //   } else {
      //     // User is signed out
      //     // ...
      //     alert("losing");
      //   }
      // });