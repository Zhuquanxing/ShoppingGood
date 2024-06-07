
<template>
  <div class="nearby">
              <h3 class="nearby title">附近店铺</h3>
              <div class="nearby_item"
              v-for="item in nearbyList"
              :key="item.id">

                 <img :src="item.imgUrl"
                 class="nearby_item_img" alt="" />
                 <div class="nearby_content">
                     <div class="nearby_content_title">{{ item.title }}</div>
                     <div class="nearby_content_tags">
                      <span class="nearby_content_tag"
                      v-for="(innerItem, innerIndex) in item.tags"
                      :key="innerIndex">{{ innerItem }}</span>
                     </div>
                     <p class="nearby_content_highlight">{{ item.desc }}</p>
                 </div>
              </div>
            </div>
  </template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尼玛',
      tags: ['月售999+', '起送￥1w', '基础运费￥1w'],
      desc: 'SSSVIP尊享满100000元减1元运费劵'
    }, {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尼玛',
      tags: ['月售999+', '起送￥10w', '基础运费￥1w'],
      desc: ' SSSVIP尊享满100000元减1元运费劵 '
    }]
    return { nearbyList }
  }
}
</script>

  <style lang="scss" scoped>
      @import '../../style/viriables.scss';
   .nearby {
        .nearby_title {
          margin: 16px 0 2px 0;
          font-size: 18px;
          font-weight: normal;
          color: $content-fontcolor;
        }
        .nearby_item {
          display: flex;
          padding-top: 12px;
        }
        .nearby_item_img {
          margin-right: 16px;
          width: 56px;
          height: 56px;
        }
        .nearby_content {
          flex: 1;
          padding-bottom: 12px;
          border-bottom: 1px solid $content-bgColor;
        }
        .nearby_content_title {
          line-height: 22px;
          font-size: 16px;
          color: $content-fontcolor;
        }
        .nearby_content_tags {
          margin-top: 8px;
          line-height: 18px;
          font-size: 13px;
          color: $content-fontcolor;
        }
        .nearby_content_tag {
          margin-right: 16px;
        }
        .nearby_content_highlight {
          margin: 8px 0 0 0;
          line-height: 18px;
          font-size: 13px;
          color: #e93b3b;
        }
      }
  </style>
