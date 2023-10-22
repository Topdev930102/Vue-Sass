import { Api } from '@/utils/api.service.js'
import AuthUserService from '@/utils/authUser.service'
import JwtService from '@/utils/jwt.service'
import securitycode from '../utils/securitycode'

export default {
  namespaced: true,
  state: {
    authUser: AuthUserService.getUser(),
    token: JwtService.getToken() || '',
    security: null
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authUser: state => state.authUser
  },
  mutations: {
    setAuth (state, payload) {
      JwtService.saveToken(payload.user_api_token)
      AuthUserService.saveUser(payload.user)
    },
    logout (state) {
      state.isAuthenticated = false
      state.authUser = null
      state.token = null
      AuthUserService.removeUser()
      JwtService.destroyToken()
    },
    updateUserInfo (state, payload) {
      AuthUserService.saveUser({ ...state.authUser, ...payload })
      state.authUser = AuthUserService.getUser()
    },
    clearToken (state) {
      state.token = null
      JwtService.destroyToken()
    },
    confirmSecurity (state, payload) {
      state.security = payload
      securitycode.saveSecureCode(payload)
    }
  },
  actions: {
    loginUser ({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        Api.signIn(payload)
          .then(res => {
            if (res && res.status === 200) {
              const saveData = {
                user_api_token: res.data.token,
                user: payload
              }
              commit('setAuth', saveData)
              resolve(res)
            } else {
              dispatch('app/setNotification', res.data)
              resolve(res)
            }
          })
      })
    },
    signup ({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        Api.signUp(payload).then(res => {
          if (res && res.status === 200) {
            const saveData = {
              user_api_token: res.data.token,
              user: payload
            }
            commit('setAuth', saveData)
            resolve(res)
          } else {
            dispatch('app/setNotification', res.data)
            resolve(res)
          }
        })
      })
    },
    updateUserInfo ({ commit }, payload) {
      commit('updateUserInfo', payload)
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        window.location.href = '/login'
        resolve()
      })
    },
    clearToken ({ commit }) {
      commit('clearToken')
    },
    receiveVerificationCode ({ commit }) {
      return new Promise((resolve, reject) => {
        Api.receiveVerificationCode({ token: JwtService.getToken() }).then(res => {
          console.log(res)
          if (res && res.status === 200) {
            resolve(res)
          } else {
            resolve(res)
          }
        })
      })
    },
    sendVerificationcode ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        Api.sendVerificationCode(payload).then(res => {
          console.log(res)
          if (res && res.status === 200) {
            resolve(res)
          } else {
            resolve(res)
          }
        })
      })
    },
    confirmSecurity ({ commit }, payload) {
      commit('confirmSecurity', payload)
    }
  }
}
