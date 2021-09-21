<template>
    <div class="card" @click="() => isModal = true">
        <h3 class="card__title">{{ idea.title }}</h3>
    </div>
    <div v-show="isModal" class="overlay">
        <div class="modal_wrap">
            <button class="modal__close" @click="() => isModal = false">×</button>
            <div class="modal">
                <h3 class="modal__title">{{ idea.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { getDoc, doc } from "firebase/firestore"
import { db } from "../main"

export default {
    props: ["idea"],
    data: ()=> ({
        isModal: false,
    }),
    // ここから下はしようしていない
    methods: {
        async fetchIdea() {
            const docSnap = await getDoc(doc(db, "ideas", this.idea.id));
            console.log(docSnap.data())
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    border-radius: 6px;
    height: 230px;
}

.card:hover {
    opacity: 0.5;
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