<template>
    <div class="card" @click="() => isModal = true">
        <h3 class="card__title">{{ idea.title }}</h3>
    </div>
    <div v-show="isModal" class="overlay">
        <div class="modal_wrap">
            <button class="modal__close" @click="() => isModal = false">×</button>
            <div class="modal">
                <h3 class="modal__title">{{ idea.title }}<br>￥{{idea.price}} </h3>
                <button @click="deleteIdea" :disabled="deleteIsLoading">削除</button>
                <button class="modal__buy" >購入する</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getDoc, doc, deleteDoc ,  } from "firebase/firestore"
import { db } from "../main"
export default {
    props: ["idea"],
    data: ()=> ({
        isModal: false,
        deleteIsLoading: false
    }),
    // ここから下はしようしていない←なにこれ
    methods: {
        async fetchIdea() {
            const docSnap = await getDoc(doc(db, "ideas", this.idea.id));
            console.log(docSnap.data())
        },
        async deleteIdea() {
            this.deleteIsLoading = true
            await deleteDoc(doc(db, "ideas", this.idea.id));
            this.$router.go({ path: "/", force: true})
            this.deleteIsLoading = false
        }
        // async buyIdea(){
            
        // }
    }
}
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
    background : #f1fffa;
    border-top: 6px solid #42b983;
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
    min-width: 200px;
    max-width: 380px;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 15px;
}

.modal__wrap {
    position: relative;
}
.modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
    border-radius: 9999px;
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
</style>