<template>
  <div v-if="sold" class="card" @click="() => (isModal = true)">
    <h3 class="card__title">{{ idea.title }}</h3>
  </div>
  <div v-else class="card">
    <h3 class="card__title">sold out</h3>
  </div>
  <div v-show="isModal" class="overlay">
    <div class="modal_wrap">
      <button class="modal__close" @click="() => (isModal = false)">
        <span class="model__X">×</span>
      </button>
      <!-- <div class="modal"> -->
      <div v-show="Making" class="text modal">
        <h2 class="modal__title">{{ idea.title }}</h2>
        <p>価格</p>
        <h3 class="modal__price">{{ idea.price }}</h3>
        <button @click="deleteIdea" :disabled="deleteIsLoading">削除</button>
        <button class="modal__buy" @click="checklogin">購入</button>
      </div>
      <div class="modaling modal" v-show="Making === false">
        <h2 class="modal__title_2">{{ idea.title }}</h2>
        <p>内容</p>
        <h3 class="modal__description_2">{{ idea.description }}</h3>
        <p>価格</p>
        <h3 class="modal__price_2">{{ idea.price }}</h3>
      </div>
      <!-- </div> -->
      <!-- v-on ディレクティブを使うことで、DOM イベントの購読、イベント発火時の JavaScript の実行が可能になります。 -->
    </div>
  </div>
</template>
<script>
import {
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { db } from "../main";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
export default {
  props: ["idea"],
  data: () => ({
    isModal: false,
    deleteIsLoading: false,
    Making: true,
    sold: true,
    auth: getAuth(),
    soldout: "",
  }),
  // ここから下はしようしていない←なにこれ
  methods: {
    //Vcardを追加する関数
    async fetchIdea() {
      const docSnap = await getDoc(doc(db, "ideas", this.idea.id));
      console.log(docSnap.data());
    },
    async deleteIdea() {
      this.deleteIsLoading = true;
      await deleteDoc(doc(db, "ideas", this.idea.id));
      this.$router.go({ path: "/", force: true });
      this.deleteIsLoading = false;
    },
    async Makenew() {
      this.Making = false;
      this.isModal = true;
      this.sold = false;
      const Making = await getDoc(doc(db, "ideas", this.idea.id));
      console.log(Making.data());
      await updateDoc(collection(db, "ideas", "soldout"), {
        soldout: this.soldout,
      });
    },
    async checklogin() {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.Makenew;
          console.log("aaa");
        } else {
          console.log("false");
          alert("false");
        }
      });
    },
    async reload() {
      this.$router.go({ path: "/", force: true });
    },
  },
};
</script>
<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  height: 230px;
  margin-block: 10px;
  margin-right: 20px;
  margin-left: 20px;
  background: #f1fffa;
  border-top: 18px solid #36d9ba;
  box-shadow: 0 3px 4px rgb(0 0 0 / 32%);
}

.card__title {
  padding-left: 16px;
  padding-right: 10px;
}

.card:hover {
  opacity: 0.6;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(-0.1875em);
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 550px;
  height: 300px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 50px 10% 100px 10%;
  line-height: 20px;
}

.text.modal {
  padding: 50px 10% 5px 10%;
}

.text.modal p {
  margin-left: 0;
  margin-top: 10px;
}

.modaling {
  width: 550px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 50px 10% 120px 10%;
  line-height: 20px;
}

.modal__wrap {
  position: relative;
}

.modal__close {
  position: absolute;
  top: 8%;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 24px;
  margin-right: 25%;
  padding: 0;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
}

.modal__close:hover {
  background-color: #cbc9c9;
}

.modal p {
  font-weight: 600;
  font-size: 16px;
  color: #36d9ba;
  margin-bottom: 10px;
}

.modal__title {
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 25px;
}

.modal__title_2 {
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 25px;
}

.modal__description_2 {
  margin-bottom: 30px;
  word-wrap: break-word;
}

.modaling p {
  font-weight: 600;
  font-size: 16px;
  color: #36d9ba;
  margin-bottom: 10px;
  margin-left: 0;
}

button {
  margin-left: 15%;
  background-color: #ffffff;
  padding: 5px 10px;
  width: 16%;
  border: solid 1px #333;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 60px;
}

button.modal__buy {
  margin-left: 38%;
  width: 16%;
  padding: 5px 10px;
  border: none;
  background-color: #36d9ba;
  border-radius: 5px;
  font-weight: 600;
  color: #ffffff;
  transition: 0.3s;
}

button.modal__buy:hover {
  transform: translateY(-5px);
  opacity: 0.7;
}
</style>
