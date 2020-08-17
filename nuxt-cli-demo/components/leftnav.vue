<template>
  <div class="leftnav">
    <div class="logo"></div>
    <el-row>
      <el-col>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          background-color="#676D7F"
          text-color="#fff"
        >
          <!-- <el-menu-item index="/main">
            <i class="g-icon g-icon-msg"></i>
            首页
          </el-menu-item>
          <el-submenu index="/report">
            <template slot="title">
              <i class="g-icon g-icon-cms"></i>
              报表管理
            </template>
            <el-menu-item index="/report/adv">广告主报表</el-menu-item>
            <el-menu-item index="/report/flow">流量报表</el-menu-item>
          </el-submenu>
          <el-submenu index="/set">
            <template slot="title">
              <i class="g-icon g-icon-setting"></i>
              系统设置
            </template>
            <el-menu-item index="/set/user">账号管理</el-menu-item>
            <el-menu-item index="/set/blacklist">黑名单管理</el-menu-item>
          </el-submenu>-->
          <template
            v-for="(item, index) in nav.filter(child => { return child.access.indexOf(+user.userType) != -1; })"
          >
            <el-menu-item :key="index" v-if="!item.children" :index="item.path">
              <i class="g-icon" :class="item.icon"></i>
              {{item.name}}
            </el-menu-item>
            <el-submenu v-else :key="index" :index="item.path">
              <template slot="title">
                <i class="g-icon" :class="item.icon"></i>
                {{item.name}}
              </template>
              <el-menu-item
                v-for="(child,childIndex) in item.children.filter(child => { return child.access.indexOf(+user.userType) != -1; })"
                :key="childIndex"
                :index="child.path"
              >{{child.name}}</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { backRoutes } from "@/router/router";
import { mapGetters } from "Vuex";

export default {
  name: "leftnav",
  data() {
    return {
      //   routes: backRoutes
      nav: [
        { path: "/main", name: "首页", icon: "g-icon-msg", access: [2, 3] },
        {
          path: "/report",
          name: "报表管理",
          icon: "g-icon-cms",
          access: [2, 3],
          children: [
            {
              path: "adv",
              name: "广告主报表",
              access: [2, 3]
            },
            {
              path: "flow",
              name: "流量报表",
              access: [2, 3]
            }
          ]
        },
        {
          path: "/set",
          name: "系统设置",
          icon: "g-icon-setting",
          access: [1],
          children: [
            {
              path: "user",
              name: "账号管理",
              access: [1]
            },
            {
              path: "blacklist",
              name: "黑名单管理",
              access: [1]
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    showItem(item) {
      //   return item.meta.access.indexOf(+this.user.userType) != -1;
    }
  }
};
</script>
<style lang="scss" scoped>
.leftnav {
  width: 180px;
  // height: 100vh;
  background-color: #676d7f;
  .logo {
    width: 138px;
    height: 60px;
    cursor: pointer;
    margin: 10px;
    background: url(~@/assets/images/logo.png) center no-repeat;
  }
  .el-menu {
    width: 180px;

    .title {
      font-size: 16px;
    }

    .g-icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 5px;

      &.g-icon-msg {
        background: url(~@/assets/images/icon-bell.png) no-repeat;
      }

      &.g-icon-setting {
        background: url(~@/assets/images/icon-setting.png) no-repeat;
      }

      &.g-icon-cms {
        background: url(~@/assets/images/icon-cms.png) no-repeat;
      }
    }
  }

  .el-submenu {
    min-width: 180px;
    .el-submenu__title {
      border-left: 4px solid transparent;
    }

    .el-submenu__icon-arrow {
      top: 30px;
      width: 12px;
      height: 12px;
      background: url(~@/assets/images/icon-down.png) no-repeat;
    }

    .el-icon-arrow-down:before {
      display: none;
    }
  }

  .el-menu-item {
    min-width: 180px;
    border-left: 4px solid transparent;
    color: #b5b9c6 !important;

    &.oneitem {
      color: #fff !important;
    }

    &.is-active {
      background-color: rgb(75, 79, 93) !important;
      border-left: 4px solid #e05155;
      color: #fff !important;
      font-weight: bold;
    }
  }
}
</style>
