<template>
    <div class="mask" v-if="showCart && calculations.total > 0"
    @click="handleCarShowChange"
    />
    <div class="cart">
        <div class="product" v-if="showCart && calculations.total > 0">
            <div class="product_header">
                <div class="product_header_all"
                @click="() => setCartItemsChecked(shopId)">
                    <span class="product_header_icon iconfont"
                    v-html="calculations.allChecked ? '&#xe618;' : '&#xe667;'"
                    ></span>
                    全选</div>
                <div class="product_header_clear">
                <span class="product_header_clear_btn" @click="() => cleanCartProducts(shopId)">清空购物车</span>
            </div>
            </div>
          <div
          v-for="item in productList"
          :key="item._id"
          class="product_item"
          >
            <div class="product_item_checked iconfont"
            v-html="item.checked ? '&#xe618;' : '&#xe667;'"
            @click.stop="() => changeCartItemChecked(shopId, item._id)"
            />
            <img class="product_item_img" :src="item.imgUrl" alt="">
            <div class="product_item_detail">
                <h4 class="product_item_title">{{item.name}}</h4>
                <p class="product_item_price">
                    <span class="product_item_yen">&yen;</span>{{item.price}}
                    <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
                </p>
            </div>
            <div class="product_number">
                <span class="product_number_minus iconfont"
                @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}"
                >&#xe677;</span>
                  {{ item.count || 0 }}
                <span class="product_number_plus iconfont"
                @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}"
                >&#xe6b2;</span>
            </div>
            </div>
        </div>
       <div class="check">
           <div class="icon">
               <img src="http://www.dell-lee.com/imgs/vue3/basket.png"
               class="check_icon_img"
               @click="handleCarShowChange"
               />
               <div class="check_icon_tag">{{ calculations.total }}</div>
           </div>
           <div class="check_info">
              总计：<span class="check_info_price">&yen; {{calculations.price}}</span>
           </div>
           <div class="check_btn">
            <router-link :to="{path: `/OrderConfirmation/${shopId}`}">
                去结算
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

const useCartEffect = (shopId) => {
  const store = useStore()
  const { calculations, productList, changeCartItemInfo } = useCommonCartEffect(shopId)

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemsChecked = () => {
    store.commit('setCartItemsChecked', { shopId })
  }

  return {
    calculations,
    productList,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked
  }
}

const toggleCarEffect = () => {
  const showCart = ref(false)
  const handleCarShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCarShowChange }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      calculations, productList, changeCartItemInfo,
      changeCartItemChecked, cleanCartProducts, setCartItemsChecked
    } = useCartEffect(shopId)
    const { showCart, handleCarShowChange } = toggleCarEffect()
    return {
      calculations,
      shopId,
      productList,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      showCart,
      handleCarShowChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import '../../style/mixins.scss';

.mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 1;
}
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: $bg_color;
}
.product {
    overflow-y: scroll;
    flex: 1;
    background: $bg_color;
    &_header {
        display: flex;
        line-height: 52px;
        border-bottom: 1px solid $content-bgColor;
        font-size: 14px;
        color: $content-fontcolor;
        &_all {
            width: 64px;
            margin-left: 18px;
        }
        &_icon {
            display: inline-block;
            margin-right: 10px;
            vertical-align: top;
            color: $btn-bgColor;
            font-size: 20px;
        }
        &_clear {
            flex: 1;
            margin-right: 16px;
            text-align: right;
            &_btn {
                display: inline-block;
            }
        }
    }
    &_item {
        position: relative;
        display: flex;
        padding: 12px 0;
        margin: 0 16px;
        border-bottom: 1px solid $content-bgColor;
        &_checked {
            line-height: 50px;
            margin-right: 20px;
            color: $btn-bgColor;
            font-size: 20px;
        }
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
            font-size: 20px;
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
            bottom: 26px;
            &_minus {
                position: relative;
                top: 2px;
                color: $medium-fontColor;
                margin-right: 5px;
            }
            &_plus {
                position: relative;
                top: 2px;
                color: $btn-bgColor;
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
        font-size: 14px;
        a {
            color: $bg_color;
            text-decoration: none;
        }
    }
}
</style>
