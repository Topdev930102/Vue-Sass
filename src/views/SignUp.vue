<template>
  <div class="flex">
    <SidebarLogin />
    <div class="wrapper login">
      <keep-alive>
        <component
          :is="signUpComponent"
          title="Sign up"
          @submit="submitSignUp"
          @submitCode="submitCode"
          :error="error"
          :codeerror="codeError"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SidebarLogin from '@/components/app/SidebarLogin'
import SignUpProfile from '@/components/Registration/SignUpProfile'
import SecurityCode from '@/components/Registration/SecurityCode'
import securitycode from '@/utils/securitycode'
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data: () => ({
    signUpPage: 'SignUpProfile',
    error: null,
    codeError: null
  }),
  components: {
    SidebarLogin,
    SignUpProfile,
    SecurityCode
  },
  computed: {
    signUpComponent () {
      return this.signUpPage
    }
  },
  methods: {
    ...mapActions('auth', ['signup', 'receiveVerificationCode', 'sendVerificationcode', 'confirmSecurity']),
    submitSignUp (data) {
      const signUpData = {
        email: data.name,
        password: data.password,
        two_factor_auth: true
      }
      this.signup(signUpData).then((res) => {
        if (res.status === 200) {
          this.signUpPage = this.signUpPage === 'SignUpProfile' ? 'SecurityCode' : 'SignUpProfile'
          this.error = 200
          if (this.signUpPage === 'SecurityCode') {
            this.confirmSecurity(false)
          }
          this.receiveVerificationCode().then((res) => {
            if (res.status === 200) {
              // this.error = res.data
            }
          })
        } else {
          this.error = res.data
        }
      })
    },
    submitCode (data) {
      console.log('submit code')
      this.sendVerificationcode({ verification_code: data }).then((res) => {
        if (res.status === 200) {
          if (res.data.includes('wrong')) {
            this.codeError = res.data
          } else {
            this.codeError = 200
            this.confirmSecurity(true)
            window.location.href = '/'
          }
          console.log('code res', res.data)
        } else {
          this.codeError = res.status
          console.log('failure verification code')
        }
      })
    }
  },
  created () {
    const self = this
    const codeVerificationStatus = securitycode.getSecureCode()
    if (codeVerificationStatus === 'false') {
      self.signUpPage = 'SecurityCode'
    }
  }
}
</script>
