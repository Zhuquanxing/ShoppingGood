<template>
<div class="position">
            <span class="iconfont position_icon">&#xe64c;</span>
             广东邮电职业技术学校
             <span class="iconfont position_notice">&#xe8fc;</span>
          </div>
          <div class="search">
            <span class="iconfont">&#xe644;</span>
             <span class="search_text">山姆会员商店优惠商品</span>
          </div>
          <div class="banner">
            <img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt=""/>
          </div>
          <div class="icons">
            <div
            class="icons_item"
            v-for="item in iconsList"
            :key="item.desc">
              <img class="icons_item_img"
              :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
              <p class="icons_item_desc">{{ item.desc }}</p>
            </div>
          </div>
          <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '签到', desc: '签到' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}

</script>

<style lang="scss" scoped>
    @import '../../style/viriables.scss';
    @import '../../style/mixins.scss';
.position {
      position: relative;
      padding: 16px 24px 16px 0;
      line-height: 20px;
      font-size: 16px;
      @include ellipsis;
      .position_icon {
        position: relative;
        top: 1px;
        font-size: 20px;
      }
      .position_notion {
         position: absolute;
         right: 0;
         top: 17px;
         font-size: 20px;
      }
      color: $content-fontcolor;
    }
    .search {
      margin-bottom: 12px;
      line-height: 20px;
      background: $search-bgColor;
      color: $search-fontcolor;
      border-radius: 16px;
      .iconfont {
        position: relative;
        top: 6px;
        display: inline-block;
        padding: 0 12px 0 16px;
        font-size: 20px;
      }
      .search_text {
        display: inline-block;
        font-size: 14px;
      }
    }

    .banner {
      height: 0;
      overflow: hidden;
      padding-bottom: 25.4%;
      .banner_img {
        width: 100%;
      }
    }

    .icons {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;
      .icons_item {
        width: 20%;
      }
      .icons_item_img {
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 auto;
      }
      .icons_item_desc {
        margin: 6px 0 16px 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
    .gap {
      margin: 0 -18px;
      height: 2px;
      background: $content-bgColor;
    }
</style>
