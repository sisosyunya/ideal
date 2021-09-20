<template>
  <div class="header">
    <button @click="getCities()">aaaa</button>
  </div>
</template>

<script>
// Initialize Cloud Firestore through Firebase
// import { Ideal } from "firebase/app";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String,
  // },

  setup() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const config = {
      apiKey: "AIzaSyCODHhpDEhMhk7ryXa5dedTgpJfky6oWwM",
      authDomain: "ideal-fd71f.firebaseapp.com",
      projectId: "ideal-fd71f",
      storageBucket: "ideal-fd71f.appspot.com",
      messagingSenderId: "605617409648",
      appId: "1:605617409648:web:dec3fc5a767d33160aaeb5",
      measurementId: "G-MSC207V7S9",
    };
    const firebaseApp = initializeApp(config, "exercise-vue");
    const firestore = firebaseApp.firestore();
    firestore.settings({ timestampsInSnapshots: true });
    const db = getFirestore(firebaseApp);

    // Get a list of cities from your database
    async function getCities() {
      //   const citiesCol = collection(db, "cities");
      //   const citySnapshot = await getDocs(citiesCol);
      //   const cityList = citySnapshot.docs.map((doc) => doc.data());
      //   return cityList;
      // }
      // Initialize Firebase
      // const app = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(app);

      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return {
      getCities,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



