
<template>
  <div class="nearby">
              <h3 class="nearby title">附近店铺</h3>
              <router-link
              v-for="item in nearbyList"
              :to="`/shop/${item._id}`"
              :key="item._id">
              <ShopInfo :item="item"/>
            </router-link>
            </div>
  </template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/Shopinfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { getNearbyList, nearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { getNearbyList, nearbyList } = useNearbyListEffect()
    getNearbyList()
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
        a {
          text-decoration: none;
        }
      }
  </style>
