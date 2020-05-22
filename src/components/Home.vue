<template>
  <div>
    <el-container class="home-container">
      <!-- Header -->
      <el-header>
        <div>
          <img src="../assets/logo.png" alt style="width:30px;height:30px" />
          <span>电商管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <!-- Aside -->
      <el-container>
        <el-aside width="200px">
          <!-- 侧边菜单栏区域 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id" v-for="item in menusList" :key="item.id">
              <!-- 一级菜单模板区 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="1-4-1" v-for="item2 in item.children" :key="item2">
                <i class="el-icon-location"></i>
                <span>{{item2.authName}}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- Main -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
    data(){
        return{
            //左侧菜单
            menusList:[]
        }
    },
    created(){
        this.getMenuList();
    },
  methods: {
      async getMenuList(){
        const { data: res } = await this.$http.get('menus')
        console.log(res)
        if(res.meta.status !== 200)return this.$message.error("获取数据失败:"+res.meta.msg)
        this.menusList = res.data
      },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
.home-container {
  height: 900px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background: #3d3741;
  color: #ffffff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background: #333744;
}
.el-main {
  background: #eaedf1;
}
</style>