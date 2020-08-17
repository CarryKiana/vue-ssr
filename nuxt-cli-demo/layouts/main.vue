<template>
  <div class="main">
    <left-nav class="left"></left-nav>
    <div class="right">
      <main-header></main-header>
      <nuxt/>
    </div>
  </div>
</template>
<script>
import leftNav from "@/components/leftnav";
import mainHeader from "@/components/header";
export default {
    middleware: 'auth',
  components: {
    leftNav,
    mainHeader
  }
};
</script>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: #eeeff2;
  display: flex;
  .left {
    flex: 0 0 180px;
    width: 180px;
  }
  .right {
    flex: auto;
    width: calc(100% - 180px);
    min-width: 820px;
  }
}
</style>

