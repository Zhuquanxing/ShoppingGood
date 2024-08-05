<template>
    <div class="products">
        <div class="products_title">
            {{ shopName }}
        </div>
        <div class="products_wrapper">
        <div class="products_list">

            <div
            v-for="item in productList"
            :key="item.id"
            class="products_item"
            >
            <img class="products_item_img" :src="item.imgUrl" />
            <div class="products_item_detail">
                <h4 class="products_item_title">{{item.name}}</h4>
                <p class="products_item_price">
                    <spen>
                        <span class="products_item_yen">&yen;</span>
                        {{item.price}} x {{ item.count }}
                    </spen>
                    <spen class="products_item_total">
                        <span class="products_item_yen">&yen;</span>
                        {{(item.price * item.count).toFixed(2)}}
                    </spen>
                </p>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'ProductList',
  setup () {
    const rotate = useRoute()
    const shopId = rotate.params.id
    const { shopName, productList } = useCommonCartEffect(shopId)
    return {
      productList,
      shopName
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../style/viriables';
@import '../../style/mixins.scss';
.products {
    margin: 16px 18px 10px 18px;
    background: $bg_color;
    &_title {
        padding: 16px;
        font-size: 16px;
        color: $content-fontcolor;
    }
    &_wrapper {
        overflow-y: scroll;
        margin: 0 18px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 60px;
        top: 260px;
    }
    &_list {
        background: $bg_color;
    }
    &_item {
        position: relative;
        display: flex;
        padding: 0 16px 16px 16px;
        &_img {
            width: 60px;
            height: 60px;
            margin-right: 16px;
            margin-top: 18px;
        }
        &_detail {
            flex: 1;
        }
        &_title {
            line-height: 20px;
            font-size: 14px;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &_price {
            display: flex;
            margin: 6px 0 0 0;
            line-height: 20px;
            font-size: 14px;
            color: $highlight-fontColor;
        }
        &_total {
            flex: 1;
            text-align: right;
            color: $dark-fontColor;
        }
        &_yen {
            font-size: 12px;
        }
     }
}
</style>
