<!-- eslint-disable no-undef -->
<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="用户名" v-model="username">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入密码" v-model="password" autocomplete="new-password"/>
        </div>
        <div class="wrapper__login-button" @click=" handleLogin ">登录</div>
        <div class="wrapper__login-link" @click=" handleRegisterClick ">立即注册</div>
        <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: 'data.username',
        password: 'data.password'
      })
      localStorage.isLogin = true
      router.push({ name: 'Home' })
      print(result)
      // if (result?.errno === 0) {

      // } else {
      //   showToast('请求失败')
      // }
    } catch (e) {
      showToast('请求失败')
    }
  }

  const { username, password } = toRefs(data)
  return { handleLogin, username, password }
}

const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleLogin, username, password } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()

    return {
      username,
      password,
      handleLogin,
      handleRegisterClick,
      show,
      toastMessage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img {
        display: block;
        margin: 0 auto 30px auto;
        width: 66px;
        height: 66px;
    }
    &__input {
        height: 48px;
        margin: 0 35px 16px 35px;
        padding: 0 16px;
        background: #f9f9f9;
        border: 1px solid rgba(0,0,0,0.10);
        border-radius: 6px;
        border-radius: 6px;
        &__content {
            line-height: 48px;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: 16px;
            color: $content-notice-fontcolor;
            &::placeholder {
                color: $content-notice-fontcolor;
            }
        }
    }
    &__login-button {
        margin: 32px 35px 16px 35px;
        line-height: 48px;
        background: $btn-bgColor;
        box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
        border-radius: 4px;
        border-radius: 4px;
        color: $bg_color;
        font-size: 16px;
        text-align: center;
    }
    &__login-link {
        text-align: center;
        font-size: 14px;
        color: $content-notice-fontcolor;
    }
}
</style>
