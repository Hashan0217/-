<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
}
export default {
  name: 'App',


  created() {
    // console.log('App created')
    // this.$router.push('/home')
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;

  /* 隐藏滚动条 */
  #app {
    background-color: #dfdfdf69;
    padding: 0;
    overflow: hidden;
    /* 隐藏滚动条 */
  }
}
</style>
