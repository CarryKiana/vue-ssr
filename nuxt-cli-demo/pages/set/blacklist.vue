<template>
  <div class="blacklist-page" v-loading="loading">
    <div class="page-title">
      <div class="left">黑名单管理</div>
      <div class="right" @click="showFileDialog">导入</div>
      <input type="file" style="display:none;" ref="importfile" @change="importIpBlacklist">
    </div>
    <div class="page-content">
      <div class="page-search">
        <el-select v-model="query.deviceType" placeholder="请选择终端" @change="queryChange">
          <el-option
            :label="item.label"
            :value="item.value"
            v-for="(item,index) in deviceTypeArr"
            :key="index"
          ></el-option>
        </el-select>
        <div class="search-box">
          <el-input
            placeholder="搜索ip地址"
            v-model.trim="query.ip"
            @keydown.enter.native="queryChange"
            clearable
          ></el-input>
          <i class="btn-clearall"></i>
          <i class="icon-search" @click="queryChange"></i>
        </div>
      </div>
      <div class="gcloud-table">
        <el-table :data="list" stripe>
          <el-table-column label="ID" prop="id"></el-table-column>
          <el-table-column label="IP" prop="ip"></el-table-column>
          <el-table-column label="终端" prop="deviceType">
            <template slot-scope="scope">
              <span>{{scope.row.deviceType | deviceTypeFilter}}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" prop="createTime">
            <template slot-scope="scope">
              <span>{{scope.row.createTime | timeFilter}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="handle del" @click="delIpBlacklistById(scope.row.id)">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-line" v-if="count">
        <el-pagination
          class="page-box"
          background
          :page-size="query.pageSize"
          :current-page.sync="query.pageNo"
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next,slot,jumper"
          :total="count"
          @current-change="pageChange"
        >
          <span class="page-info">共{{Math.ceil(count/query.pageSize)}}页共{{count}}条信息</span>
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { parseTime } from "@/utils/parseTime";
import { inputValid } from "@/utils/inputvalid";
export default {
  name: "blacklist",
  meta: { access: [1] },
  asyncData({ app, req, res }) {
    // console.log(app.$cookiz.getAll());
    // return app.$axios
    //   .post(
    //     "http://192.168.1.228:8080/gimc-dsp-webapp/ipBlacklist/findByPage",
    //     {
    //       deviceType: undefined,
    //     ip: "",
    //     pageNo: 1,
    //     pageSize: 10
    //     }
    //   )
    //   .then(res => {
    //     return {list: res.data.data.list, count: res.data.data.count}
    //   }).catch(err=> {
    //     // console.log(err)
    //   });
  },
  // fetch({ app, store }) {
  //   let data = app.$cookiz.getAll();
  //   store.dispatch('saveUserInfo', {
  //     JSESSIONID: data.JSESSIONID,
  //     loginName: data.gimc_dspadmin_set_loginName,
  //     sessionId: data.gimc_dspadmin_set_sessionId,
  //     userId: data.gimc_dspadmin_set_userId,
  //     userType: data.gimc_dspadmin_set_userType,
  //     phone: data.gimc_dspadmin_set_userPhone,
  //     remember: data.gimc_dspadmin_set_remember.toString() == 'true'
  //   })
  // },
    // middleware: 'auth',
  data() {
    return {
      query: {
        deviceType: undefined,
        ip: "",
        pageNo: 1,
        pageSize: 10
      },
      deviceTypeArr: [
        { label: "PC端", value: 2 },
        { label: "移动端", value: 1 },
        { label: "未知", value: 0 }
      ],
      list: [],
      count: undefined,
      loading: false
    };
  },
  filters: {
    timeFilter(time) {
      return parseTime(time);
    },
    deviceTypeFilter(type) {
      let typeMap = {
        2: "PC端",
        1: "移动端",
        0: "未知"
      };
      return type
        .split("|")
        .map(item => {
          return typeMap[item] || "";
        })
        .join("|");
    }
  },
  mounted() {
    this.getIpBlacklist();
    // console.log(this.list)
  },
  methods: {
    // 获取黑名单列表
    getIpBlacklist() {
      if (!inputValid(this.query.ip)) {
        return;
      }
      this.$api.blacklist.getIpBlacklist(this.query).then(res => {
        if (res.ret == 0) {
          this.list = res.data && res.data.list ? res.data.list : [];
          this.count = res.data && res.data.count ? res.data.count : undefined;
        } else {
          this.$DataMessage(res.msg);
        }
      });
    },
    // 搜索参数改变
    queryChange() {
      this.query.pageNo = 1;
      this.getIpBlacklist();
    },
    // 分页
    pageChange(val) {
      this.query.pageNo = val;
      this.getIpBlacklist();
    },
    // 删除黑名单
    delIpBlacklistById(id) {
      let data = { id };
      this.$api.blacklist.delIpBlacklistById(data).then(res => {
        if (res.ret == 0) {
          this.$DataMessage("删除成功");
          this.queryChange();
        } else {
          this.$DataMessage(res.msg);
        }
      });
    },
    // 打开文件选择框
    showFileDialog() {
      this.$refs.importfile.value = "";
      this.$refs.importfile.click();
    },
    // 导入黑名单
    importIpBlacklist(e) {
      this.loading = true;
      let formdata = new FormData();
      formdata.append("file", e.target.files[0]);
      this.$api.blacklist.importIpBlacklist(formdata).then(res => {
        if (res.ret == 0) {
          this.$DataMessage("导入成功");
          this.queryChange();
        } else {
          this.$DataMessage(res.msg);
        }
        this.loading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.blacklist-page {
  .page-title {
    line-height: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 20px;
    .left {
      color: #666;
      font-size: 16px;
      font-weight: bold;
      padding-left: 20px;
      display: inline-block;
    }
    .right {
      border: 1px solid #3a78ff;
      color: #3a78ff;
      float: right;
      width: 130px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin: 10px 20px;
      padding-left: 20px;
      font-size: 14px;
      background: url(~@/assets/images/icon-import.png) no-repeat 40px center;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .page-content {
    background-color: #fff;
    padding: 20px;
    .page-search {
      margin-bottom: 20px;
    }
    .handle {
      &.del {
        &:hover {
          opacity: 0.7;
          color: $baseRed;
        }
      }
    }
  }
}
</style>


