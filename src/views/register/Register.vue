<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入用户名"
            v-model="username"
            />
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content" placeholder="请输入密码"
            autocomplete="new-password"
            v-model="password"
            />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="确认密码" type="password"
            v-model="ensurement"
            />
        </div>
        <div class="wrapper__register-button" @click="handleRegister">注册</div>
        <div class="wrapper__register-link" @click="handleLoginClick">已有账号登录</div>
        <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: 'data.username',
        password: 'data.password'
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
        print(result)
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }

  const { username, password, ensurement } = toRefs(data)
  return { handleRegister, username, password, ensurement }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleRegister, username, password, ensurement } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return { handleRegister, username, password, ensurement, handleLoginClick, show, toastMessage }
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
            margin-top: 12px;
            line-height: 22px;
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
    &__register-button {
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
    &__register-link {
        text-align: center;
        font-size: 14px;
        color: $content-notice-fontcolor;
    }
}
</style>
