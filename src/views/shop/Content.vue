<template>
    <div class="content">
       <div class="category">
          <div :class="{'category_item': tuue, 'category_item--active': currentTab === item.tab}"
          v-for="item in categories"
          :key="item.name"
          @click="handleCategoryClick(item.tab)"
          >{{item.name}}</div>

       </div>
       <div class="product">
          <div class="product_item"
          v-for="item in list"
          :key="item._id">
            <img class="product_item_img" :src="item.imgUrl" alt="">
            <div class="product_item_detail">
                <h4 class="product_item_title">{{item.name}}</h4>
                <p class="product_item_sales">月售 {{ item.sales }}</p>
                <p class="product_item_price">
                    <span class="product_item_yen">&yen;</span>{{item.price}}
                    <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
                </p>
            </div>
            <div class="product_number">
                <span class="product_number_minus"
                @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}"
                >-</span>
                  {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
                <span class="product_number_plus"
                @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}"
                >+</span>
            </div>
          </div>
       </div>
    </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useCommonCartEffect } from './commonCartEffect'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })

  const getContentData = async (tab) => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data) {
      content.list = result.data
    }
  }

  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'Content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItemInfo } = useCommonCartEffect()

    // const { contentList } = toRefs(data)

    return { categories, currentTab, handleTabClick, list, cartList, shopId, changeCartItemInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import '../../style/mixins.scss';
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 15px;
    bottom: 5px;
}
.category {
    overflow-y: scroll;
    height: 100%;
    width: 76px;
    background: #f5f5f5;
    &_item {
        line-height: 4px;
        text-align: center;
        font-size: 14px;
        color: $content-fontcolor;
        &--active {
            background: $bg_color;
        }
    }
}
.product {
    overflow-y: scroll;
    flex: 1;
    &_item {
        position: relative;
        display: flex;
        padding: 12px 0;
        margin: 0 16px;
        border-bottom: 1px solid $content-bgColor;
        &_detail {
            overflow: hidden;
        }
        &_img {
            width: 75px;
            height: 75px;
            margin-right: 16px;
        }
        &_title {
            line-height: 2px;
            font-size: 14px;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &_sales {
            margin: 6px 0;
            font-size: 12px;
            color: $content-fontcolor;
        }
        &_price {
            margin: 0;
            line-height: 20px;
            font-size: 14px;
            color: $highlight-fontColor;
        }
        &_yen {
            font-size: 12px;
        }
        &_origin {
            margin-left: 6px;
            line-height: 2px;
            font-size: 12px;
            color: $light-fontColor;
            text-decoration: line-through;
        }
        .product_number {
            position: absolute;
            right: 0;
            bottom: 12px;
            &_minus,
            &_plus {
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 16px;
                border-radius: 50%;
                font-size: 20px;
                text-align: center;
            }
            &_minus {
                border: 1px solid $medium-fontColor;
                color: $medium-fontColor;
                margin-right: 5px;
            }
            &_plus {
                background: $btn-bgColor;
                color: $bg_color;
                margin-left: 5px;
            }
        }
    }
}
</style>
