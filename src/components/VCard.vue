<template>
  <div v-if = "sold" class="card" @click="() => (isModal = true)">
    <h3 class="card__title">{{ idea.title }}</h3>
  </div>
  <div v-else  class="card" >
    <h3 class="card__title">sold out</h3>
  </div>
  <div v-show="isModal" class="overlay">
    <div class="modal_wrap">
      <button
        class="modal__close"
        @click="
          
          () => (isModal = false)
        "
      >
        <span class="model__X">×</span>
      </button>
      <!-- <div class="modal"> -->
        <div v-show="Making" class="text modal">
          <h2 class="modal__title">{{ idea.title }}</h2>
          <p>価格</p>
          <h3 class="modal__price">{{ idea.price }}</h3>
          <button @click="deleteIdea" :disabled="deleteIsLoading">削除</button>
          <button class="modal__buy" @click="Makenew">購入</button>
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
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../main";
export default {
  props: ["idea"],
  data: () => ({
    isModal: false,
    deleteIsLoading: false,
    Making: true,
    sold : true
  }),
  // ここから下はしようしていない←なにこれ
  methods: {
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
  padding-top: 50px;
  padding-left: 65px;
  padding-bottom: 100px;
  line-height: 20px;
}

.modaling {
  width: 650px;
  height: 400px;
  background-color: #fff;
  
  border-radius: 5px;
  padding-top: 50px;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 120px;
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
  border :none;
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
    background-color: #CBC9C9;
  
}

.modal p {
  font-weight: 600;
  font-size: 16px;
  color: #36d9ba;
  margin-bottom: 10px;
}

.modal__title {
  margin-bottom: 30px;
}

.modal__title_2 {
  margin-bottom: 30px;
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
}

button {
  margin-left: 10%;
  background-color: #ffffff;
  padding: 5px 10px;
  width: 16%;
  border: solid 1px #333;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 100px;
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
