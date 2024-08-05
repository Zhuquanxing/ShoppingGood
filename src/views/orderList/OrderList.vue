<template>
    <div class="wrapper">
      <div class="title">我的订单</div>
      <div class="orders">
        <div class="order"
        v-for="(item, index) in list"
        :key="index"
        >
          <div class="order_title">
            {{ item.name }}
            <spen class="order_status">
              {{ item.isCanceled ? '已取消' : '已下单' }}
            </spen>
          </div>
          <div class="order_content">
            <div class="order_content_imgs">
              <template
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
              >
              <img
              :src="innerItem.products.img"
              class="order_content_img"
              v-if="innerIndex <= 3"
              />
            </template>
            </div>
            <div class="order_content_info">
              <div class="order_content_price">￥ {{item.totalPrice}}</div>
              <div class="order_content_count">共 {{ item.totalNumber }} 件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Docker :currentIndex="2"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker'

const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalNumber += (productItem?.orderSales || 0)
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
      console.log(orderList)
      // data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const list = useOrderListEffect()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
    .wrapper {
      overflow-y: auto;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 5px;
      right: 0;
      background: rgb(248, 248, 248);
    }
    .title {
      line-height: 44px;
      background: $bg_color;
      font-size: 16px;
      color: $content-fontcolor;
      text-align: center;
    }

    .order {
      margin: 16px 18px;
      padding: 16px;
      background: $bg_color;
      &_title {
        margin-bottom: 16px;
        line-height: 22px;
        font-size: 16px;
        color: $content-fontcolor;
      }
      &_status {
        float: right;
        font-size: 14px;
        color: $light-fontColor;
      }
      &_content {
        display: flex;
        &_imgs {
          flex: 1;
        }
        &_img {
          width: 40px;
          height: 40px;
          margin-right: 12px;
        }
        &_info {
          width: 70px;
        }
        &_price {
          margin-bottom: 4px;
          line-height: 20px;
          font-size: 14px;
          color: $highlight-fontColor;
          text-align: right;
        }
        &_count {
          line-height: 14px;
          font-size: 12px;
          color: $content-fontcolor;
          text-align: right;
        }
      }
    }
</style>
