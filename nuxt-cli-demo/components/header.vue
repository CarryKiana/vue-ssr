<template>
  <div class="a-header">
    <div class="title">系统管理</div>
    <div class="right-wrap">
      <div class="welcome">
        您好~
        <span>12321321321321</span>
      </div>
      <div class="exit" @click="changepass">修改密码</div>
      <div class="exit" @click="logout">退出</div>
    </div>
  </div>
</template>
 
 
<script>
// import { mapGetters } from "Vuex";
export default {
  name: "aheader",
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["user"])
  },
  filters: {
    // userNameFilter(user) {
    //   return (
    //     user.loginName ||
    //     (user.phone
    //       ? user.phone.replace(/^(\w{3})(\w{4})(\w*)$/, "$1****$3")
    //       : "")
    //   );
    // }
  },
  mounted() {
    // console.log(1);
    // console.log(this);
  },
  methods: {
    logout() {
      //   this.$api.login.logout().then(res => {
      //     if (res.ret == 0) {
      //       this.$store.dispatch("delUserInfo");
      //       this.$router.push({ path: "/" });
      //     } else {
      //       this.$gidMessage(res.msg);
      //     }
      //   });
    },
    // 前往修改密码
    changepass() {
      //   this.$router.push({ path: "/changepass" });
    }
  }
};
</script>
<style lang="scss" scoped>
.a-header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgba(102, 102, 102, 0.2);
  background: #fff;
  .title {
    float: left;
    width: 120px;
    height: 60px;
    text-align: center;
    background: #eeeff2;
    border-right: 1px solid rgba(102, 102, 102, 0.2);
    border-bottom: 1px solid #eeeff2;
    color: #666;
    font-weight: bold;
  }
  .right-wrap {
    margin-right: 22px;
    float: right;
    div {
      float: left;
      margin-left: 20px;
      &.exit {
        cursor: pointer;
        color: #000;
      }
    }
  }
}
</style>
