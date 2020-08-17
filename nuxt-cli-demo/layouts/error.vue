<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{error.message}}</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link :to="user.userType==1?'/set/user':'/main'">首 页</nuxt-link>
  </div>
</template>
<script>
import { mapGetters } from "Vuex";
export default {
  props: ["error"],
  layout: "blog",
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    // console.log(this.user);
  },
  methods: {}
};
</script>

