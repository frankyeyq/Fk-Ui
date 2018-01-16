<template>
  <div id="app">
    <div class="doc-header">
      <div class="doc-header-logo">这是UI-LOGO</div>
      <ul class="doc-header-nav">
        <li><router-link to="/components">组件</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style lang="scss">
@import './style/common.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.doc-header{
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px #f0f1f2;
    padding: 0 20px;
  .doc-header-logo{
    display: inline-block;
    float: left;
  }
  .doc-header-nav{
    display: inline-block;
    float: right;
    li{
      padding: 0 10px;
      padding-right: 100px;
      text-align: right;
      a:hover{
        color: blue;
      }
    }
  }
}
</style>
