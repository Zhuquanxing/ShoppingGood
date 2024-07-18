<template>
    <div class="wrapper">
        <div class="search">
            <div class="search_back iconfont"
            @click="handleBackClik"
            >&#xe6db;</div>
            <div class="search_content">
                <spen class="search_content_icon iconfont">&#xe644;</spen>
                <input
                class="search_content_input"
                placeholder="请输入商品名称"
                />
            </div>
        </div>
    <ShopInfo :item="item" :hideBorder = "true" v-show="item.imgUrl"/>
    <Content />
    <Cart />
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/Shopinfo'
import Content from './Content'
import Cart from './Cart'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClik = () => {
    router.back()
  }
  return handleBackClik
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const handleBackClik = useBackRouterEffect()

    getItemData()

    return { item, handleBackClik }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
    padding: 4px 18px;
}
.search {
    line-height: 32px;
    display: flex;
    margin: 2px 0 16px 0;
    &_back {
        width: 32px;
        font-size: 24px;
        color: #b6b6b6;
    }
    &_content {
        display: flex;
        flex: 1;
        line-height: 32px;
        background: $search-bgColor;
        border-radius: 16px;
        &_icon {
            width: 44px;
            text-align: center;
            color: $search-fontcolor;
        }
        &_input {
            display: block;
            width: 100%;
            padding-right: 5px;
            border: none;
            outline: none;
            background: none;
            height: 32px;
            font-size: 14px;
            color: $content-fontcolor;
            &::placeholder {
                color: $content-fontcolor;
            }
        }
    }
}
</style>
