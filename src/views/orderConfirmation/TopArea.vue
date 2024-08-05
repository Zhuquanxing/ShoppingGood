<template>
    <div class="top">
        <div class="top_bgcor"/>
        <div class="top_header">
            <div class="iconfont top_header_back"
            @click="handleBackClick"
            >&#xe6db;</div>
            确认订单
        </div>
        <div class="top_receiver">
            <div class="top_receiver_title">收货地址</div>
            <div class="top_receiver_address">北京理工大学国防科技园2号楼</div>
            <div class="top_receiver_info">
                <span class="top_receiver_info_name">瑶妹 （女士）</span>
                <span class="top_receiver_info_name">1008611</span>
            </div>
            <div class="iconfont top_receiver_icon">&#xe6db;</div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'TopArea',
  setup () {
    const rotater = useRouter()
    const handleBackClick = () => { rotater.back() }
    return {
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables';
.top {
    position: relative;
    height: 196px;
    background-size: 100% 159px;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091ff 50%);
    background-repeat: no-repeat;
    .top_header {
        position: relative;
        padding-top: 20px;
        line-height: 24px;
        color: $bg_color;
        text-align: center;
        font-size: 16px;
        &_back {
            position: absolute;
            font-size: 22px;
            left: 18px;
        }
    }
    &_receiver {
        position: absolute;
        left: 18px;
        right: 18px;
        bottom: 0;
        height: 111px;
        background: $bg_color;
        border-radius: 4px;
        &_title {
            line-height: 22px;
            padding: 16px 0 14px 16px;
            font-size: 16px;
            color: $content-fontcolor;
        }
        &_address {
            line-height: 20px;
            padding: 0 14px 0 16px;
            font-size: 14px;
            color: $content-fontcolor;
        }
        &_info {
            padding: 6px 0 0 16px;
            &_name {
                margin-right: 6px;
                line-height: 18px;
                font-size: 12px;
                color: $medium-fontColor;
            }
        }
        &_icon {
            transform: rotate(180deg);
            position: absolute;
            right: 16px;
            top: 50px;
            color: $medium-fontColor;
            font-size: 20px;
        }
    }
}
</style>
