<template>
  <div class="card" @click="() => (isModal = true)">
    <h3 class="card__title">{{ idea.title }}</h3>
  </div>
  <div v-show="isModal" class="overlay">
    <div class="modal_wrap">
      <button class="modal__close" @click="reload() ; () => (isModal = false)">×</button>
      <div class="modal">
        <div v-show="Making" class="text">
          <h3 class="modal__title">{{ idea.title }}<br>￥{{ idea.price }}</h3>
          <button @click="deleteIdea" :disabled="deleteIsLoading">削除</button>
          <button class="modal__buy" @click="Makenew">購入</button>
        </div>
        <div class="modaling" v-show="Making ===false">
          <h3 class="modal__reeffect">{{ idea.title }}<br>{{ idea.description }}<br>￥{{ idea.price }}</h3>
        </div>
      </div>
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
    Making: true
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
        this.Making = false
        this.isModal = true
        const Making = await getDoc(doc(db, "ideas", this.idea.id));
      console.log(Making.data());
    },
    async reload() {
      this.$router.go({ path: "/", force: true });
    }
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
  background: #F1FFFA;
  border-top: 18px solid #36D9BA;
  box-shadow: 0 3px 4px rgb(0 0 0 / 32%);
}
.card:hover {
  opacity: 0.5;
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
  width: 550px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  padding-top: 50px;
  padding-left: 65px;
  padding-bottom: 100px;
  line-height: 20px;
}
.modal__wrap {
  position: relative;
}
.modal__close {
  position: absolute;
  top: 10%;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgb(243, 222, 29, 0.7);
  border: 1px solid #333;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 24px;
  margin-right: 25%;
  padding: 0;
  cursor: pointer;
}
.modal__close:hover {
  background-color: rgb(243, 222, 29);
  box-shadow: 1px 1px 12px rgba(243, 222, 29,.65);
}
button {
  margin-left: 15%;
  background-color: rgb(247, 207, 77);
  padding: 5px 10px;
  width: 16%;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 100px;
}
button.modal__buy {
  margin-left: 38%;
  width: 16%;
  padding: 5px 10px;
  background-color: #36D9BA;
  border-radius: 5px;
  font-weight: 600;
  color: #ffffff;
}
</style>