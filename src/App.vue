/* eslint-disable */
<template>
  <div id="app">
    <Row>
      <Col span class="parallax"></Col>
    </Row>

    <Row type="flex" justify="center">
      <Col span="12" :xs="24" :lg="12">
        <Menu mode="horizontal">
          <MenuItem name="1">
            <router-link to="/">Главная</router-link>
          </MenuItem>
          <MenuItem name="2">
            <router-link to="/chat">Общение</router-link>
          </MenuItem>
          <MenuItem name="3">
            <router-link to="/news">Новости</router-link>
          </MenuItem>
        </Menu>
      </Col>
    </Row>

    <Row type="flex" justify="center" class-name="mt-3" align="top">
      <Col :xs="24" :xl="16">
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">

            <User></User>

          </Sider>

          <Layout>
            <router-view/>
          </Layout>

          <Sider hide-trigger :style="{background: '#fff'}">
            <h2>News</h2>
          </Sider>
          
        </Layout>
      </Col>
    </Row>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Test from "./components/Test";
import Main from "./components/Main";
import User from "./components/User";

export default {
  name: "App",
  components: {
    Test,
    Main,
    User
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.parallax {
  background: url("http://www.sofali.com.ua/images/618A7687.jpg") no-repeat
    center;
  background-size: cover;
  background-attachment: fixed;
  height: 425px;
}

a {
  color: #2c3e50;
  font-size: 1.1rem;
}

.ivu-layout-content {
  padding: 20px;
}

.ivu-layout-sider {
  padding: 20px;
}

.mt-3 {
  margin-top: 30px;
}
</style>
