<template>
    <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })
  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }

  const { show, toastMessage } = toRef(toastData)
  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.toast {
    position: fixed;
    left:  50%;
    top:  50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0, .35);
    border-radius: 5px;
    color: $bg_color;
}
</style>
