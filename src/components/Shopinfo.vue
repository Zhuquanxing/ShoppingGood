<template>
    <div class="shop">
                 <img :src="item.imgUrl" class="shop_img">
                 <div
                 :class="{'shop_content':true, 'shop_content--bordered': history ? false: true}"
                 >
                     <div class="shop_content_title">{{ item.name }}</div>
                     <div class="shop_content_tags">
                      <span  class="shop_content_tag">月售：{{ item.sales }}</span>
                      <span  class="shop_content_tag">起送：{{ item.expressLimit }}</span>
                      <span  class="shop_content_tag">基础运费：{{ item.expressPrice }}</span>
                     </div>
                     <p class="shop_content_highlight">{{ item.slogan }}</p>
                 </div>
              </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
  display: flex;
  padding-top: 12px;
  &_img {
    margin-right: 16px;
    width: 56px;
    height: 56px;
}
  &_content {
    flex: 1;
    padding-bottom: 12px;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }
    &_title {
      line-height: 22px;
      font-size: 16px;
      color: $content-fontcolor;
  }
    &_tags {
      margin-top: 8px;
      line-height: 18px;
      font-size: 13px;
      color: $content-fontcolor;
  }
    &_tag {
      margin-right: 16px;
  }
    &_highlight {
      margin: 8px 0 0 0;
      line-height: 18px;
      font-size: 13px;
      color: $highlight-fontColor;
  }
  }
}
</style>
