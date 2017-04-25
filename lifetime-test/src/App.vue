<template>
  <div id="app">
    <!--<router-link to="/"><img src="./assets/logo.png"></router-link>-->
    <!--<router-link to="/">Router->/</router-link>-->
    <div class="layout">
      <Row type="flex">
        <i-col span="5"
               class="layout-menu-left">
          <Menu active-name="1-2"
                theme="dark"
                width="auto"
                :open-names="['1']">
            <div class="layout-logo-left"></div>
            <Submenu name="1">
              <template slot="title">
                <router-link to="/">
                  <Icon type="ios-navigate"></Icon>
                  首页
                </router-link>
              </template>
              <router-link to="/"><Menu-item name="1-1">去首页</Menu-item></router-link>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                question
              </template>
              <router-link to="/question/0"><Menu-item name="2-1">q1</Menu-item></router-link>
              <router-link to="/question/17"><Menu-item name="2-2">q18</Menu-item></router-link>
            </Submenu>
            <Submenu name="3" v-if="$store.state.total.score">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                result
              </template>
              <router-link to="/result"><Menu-item name="3-1">result</Menu-item></router-link>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="19">
          <div class="layout-header">
            <div v-if="$route.params.id">
            <Steps :current=" parseInt($route.params.id) ">
              <Step v-for="n in 18" :key="n" :title=" 'q' + n ">
                <!--<router-link :to="{ name: 'question', params: { id: n }}"></router-link>-->
              </Step>
            </Steps>
            </div>
          </div>
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="#">首页</Breadcrumb-item>
              <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
              <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
          <div class="layout-copy">
            2011-2016 &copy; test {{year}}
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
          //year: ''
      }
  },
  methods: {

  },
  created: function () {
    var a = new Date()
    this.year = a.getFullYear() 
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-size: 20px;
}

.ivu-menu a{
  color: #fff !important;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
</style>
