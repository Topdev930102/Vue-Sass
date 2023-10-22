<template>
  <div class="flex">
    <SidebarLogin />
    <div class="wrapper login">
      <keep-alive>
        <component
          :is="loginComponent"
          title="Enter to the code"
          @forgot="loginPage = 'ForgotForm'"
          @forgotPassword="loginPage = 'SecurityCode'"
          @submitCode="loginPage = 'NewPassword'"
          @submit="submitLogin"
          :error="error"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SidebarLogin from '@/components/app/SidebarLogin'
import LoginForm from '@/components/Login/LoginForm'
import ForgotForm from '@/components/Login/ForgotForm'
import SecurityCode from '@/components/Registration/SecurityCode'
import NewPassword from '@/components/Login/NewPassword'
import JwtService from '@/utils/jwt.service'
import { ApiClient } from '@/utils/api.service.js'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {
    SidebarLogin,
    LoginForm,
    ForgotForm,
    SecurityCode,
    NewPassword
  },
  data: () => ({
    loginPage: 'LoginForm',
    error: null
  }),
  computed: {
    ...mapGetters('app', ['notification']),
    loginComponent () {
      return this.loginPage
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'receiveVerificationCode']),
    submitLogin (loginData) {
      console.log(loginData)
      this.loginUser(loginData)
        // eslint-disable-next-line no-return-assign
        .then((res) => {
          if (res.status === 200) {
            this.receiveVerificationCode()
            // window.location.href = '/'
            this.error = 200
          } else {
            this.error = res.data
          }
        })
        .catch(err => alert(err))
    }
  }
}
</script>
