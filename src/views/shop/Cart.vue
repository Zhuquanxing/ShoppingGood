<template>
    <div class="cart">
        <div class="product">
            <template
          v-for="item in productList"
          :key="item._id">
          <div class="product_item" v-if="item.count > 0">
            <img class="product_item_img" :src="item.imgUrl" alt="">
            <div class="product_item_detail">
                <h4 class="product_item_title">{{item.name}}</h4>
                <p class="product_item_price">
                    <span class="product_item_yen">&yen;</span>{{item.price}}
                    <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
                </p>
            </div>
            <div class="product_number">
                <span class="product_number_minus"
                @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}"
                >-</span>
                  {{ item.count || 0 }}
                <span class="product_number_plus"
                @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}"
                >+</span>
            </div>
            </div>
            </template>
        </div>
       <div class="check">
           <div class="icon">
               <img src="http://www.dell-lee.com/imgs/vue3/tomato.png"
               class="check_icon_img"
               />
               <div class="check_icon_tag">{{ total }}</div>
           </div>
           <div class="check_info">
              总计：<span class="check_info_price">&yen; {{price}}</span>
           </div>
           <div class="check_btn">去结算</div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })

  return { total, price, productList }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { changeCartItemInfo } = useCommonCartEffect()
    const { total, price, productList } = useCartEffect(shopId)
    return { total, price, shopId, productList, changeCartItemInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import '../../style/mixins.scss';
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.product {
    overflow-y: scroll;
    flex: 1;
    background: #fff;
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
            width: 46px;
            height: 46px;
            margin-right: 16px;
        }
        &_title {
            line-height: 2px;
            font-size: 14px;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &_price {
            margin: 6px 0 0 0;
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
.check {
    display: flex;
    height: 49px;
    border-top: 1px solid $content-bgColor;
    line-height: 49px;
    &_icon {
        position: relative;
        width: 84px;
        &_img {
            display: block;
            margin: 12px auto;
            width: 28px;
            height: 26px;
        }
        &_tag {
            position: absolute;
            left: 20px;
            top: 4px;
            padding: 0 4px;
            min-width: 20px;
            height: 20px;
            line-height: 20px;
            background-color: $highlight-fontColor;
            border-radius: 10px;
            font-size: 12px;
            text-align: center;
            color: $bg_color;
            transform: scale(.5);
            transform-origin: left center;
        }
    }
    &_info {
        flex: 1;
        font-size: 12px;
        color: $content-fontcolor;
        &_price {
            line-height: 49px;
            color: $highlight-fontColor;
            font-size: 18px;
        }
    }
    &_btn {
        width: 98px;
        background-color: #4fb0f9;
        text-align: center;
        color: $bg_color;
        font-size: 14px;
    }
}
</style>
