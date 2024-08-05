<template>
<div class="docker">
        <div
        v-for="(item, index) in dockerList"
        :class="{'docker_item':true, 'docker_item--active': index=== currentIndex }"
        class="docker_item "
        :key="item.icon"
        >
        <router-link :to="item.to">
          <div class="iconfont" v-html="item.icon" />
          <div class="docker_title">{{ item.text }}</div>
        </router-link>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe630;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe67b;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe69e;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe639;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
    @import '../style/viriables.scss';
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
    }
    .docker_item {
     flex: 1;
     text-align: center;
     a {
        color: $content-fontcolor;
        text-decoration: none;
      }
     .iconfont {
      margin: 7px 0 2px 0;
        font-size: 20px;
      }
    }
    .docker_item--active {
      a {
        color: #1FA4FC;
      }
    }
    .docker_title {
      font-size: 20px;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
</style>
