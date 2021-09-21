<template>
    <div>
        {{ ideaId}}
    </div>
</template>

<script>
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db } from '../main'

export default {
    name: "Contents",
    data: ()=> ({
        idea: null
    }),
    mounted() {
        getDoc(collection(db, "ideas", this.$route.params.id));
        this.fethcIdeas();
    },
}
</script>