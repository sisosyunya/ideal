<template>
  <div class="about">
    <h1>This is an about page</h1>
        <!-- <Test msg="Welcome to Your Vue.js App"/> -->
        <Test/>
  </div>
</template>
<script>
import Test from "@/components/Test.vue";
//使えるようにする
export default{
  components:{Test}
};
console.log("aaa")
</script>

