<template>
<div class="docker">
        <div
        v-for="(item, index) in dockerList"
        :class="{'docker_item':true, 'docker_item--active': index===0 }"
        class="docker_item "
        :key="item.icon">
          <div class="iconfont" v-html="item.icon" />
          <div class="docker_title">{{ item.text }}</div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe630;', text: '首页' },
      { icon: '&#xe67b;', text: '购物车' },
      { icon: '&#xe69e;', text: '订单' },
      { icon: '&#xe639;', text: '我的   ' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../style/viriables.scss';
.docker {
      display: flex;
      box-sizing: border-box;
      position: absolute;
      padding: 0 18px;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 49px;
      border-top: .01px solid $content-bgColor;
      color: $content-fontcolor;
      background-color: #fff;
    }
    .docker_item {
     flex: 1;
     text-align: center;
     .iconfont {
      margin: 7px 0 2px 0;
        font-size: 20px;
      }
    }
    .docker_item--active {
      color: #1FA4FC;
    }
    .docker_title {
      font-size: 20px;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
</style>
