<template>
  <div id="app">
    <l-button type='success'>你好</l-button>
    <l-input show-password></l-input>
    <l-button
        icon="el-icon-ice-cream-square"
        circle
        round
        plain
        type="info"
      ></l-button>
      <l-input type="text" placeholder="请输入"  v-model="value" clearable ></l-input>
    <l-input type="password" placeholder="请输入"  v-model="value" show-password></l-input>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
