<template>
  <div id="app">
    <Header></Header>
    <Tabbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header';
import Tabbar from './components/Tabbar';

export default {
  name: 'App',
  methods: {},
  components: {
    Header,
    Tabbar,
  },
};
</script>
<style lang="scss"></style>
