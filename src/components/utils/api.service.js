/* eslint-disable */
import JwtService from "@/utils/jwt.service"
import axios from "axios"
// import Vue from 'vue'
// import VueAxios from "vue-axios"
import store from '@/store'
import { endpoint } from "@/utils/constants";

// Vue.use(VueAxios, axios);
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + JwtService.getToken();
// axios.defaults.headers.common['Content-Type'] = 'application/json';

const checkAuth = (res) => {
  if (res.status === 401) {
    store.dispatch('auth/logout', { root: true });
  }
  return res;
}

export const Api = {
  async signIn(payload) {
    const res = await axios.post(endpoint.LOGIN_URL, payload)
      .catch(err => {
        return checkAuth(err.response)
      })
    return res;
  },

  async signUp(payload) {
		const res = await axios.post(endpoint.SIGN_UP_URL, payload)
			.catch(err => {
        console.log(err)
				return checkAuth(err.response)
			})
		return res;
	},

  async receiveVerificationCode(payload) {
    const res = await axios.post(endpoint.RECEIVE_VERIFICATION_CODE, payload, { headers: { 'Content-Type': 'application/json' } })
			.catch(err => {
        console.log(err)
				return checkAuth(err.response)
			})
		return res;
  },

  async sendVerificationCode(payload) {
    const res = await axios.post(
      endpoint.SEND_VERIFICATION_CODE,
      payload,
      { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JwtService.getToken() } })
        .catch(err => {
          console.log(err)
          return checkAuth(err.response)
        })
		return res;
  },

  async getOptionsList() {
    const res = await axios.get(endpoint.GET_OPTIONS_LIST_URL, { headers: { 'Authorization': 'Bearer ' + JwtService.getToken() } })
			.catch(err => {
				return checkAuth(err.response)
			})
		return res;
  },

  async getActiveOptionsList() {
		const res = await axios.get(endpoint.GET_ACTIVE_OPTIONS_LIST_URL)
			.catch(err => {
				return checkAuth(err.response)
			})
		return res;
	},

  async addOption(payload) {
		const res = await axios.post(endpoint.ADD_OPTION_URL,
      payload,
      { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JwtService.getToken() } })
        .catch(err => {
          return checkAuth(err.response)
        })
		return res;
	},

  async closeOption(payload) {
		const res = await axios.post(
      endpoint.CLOSE_OPTION_URL,
      payload,
      { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JwtService.getToken() } })
			.catch(err => {
				return checkAuth(err.response)
			})
		return res;
	},

  async getUserInfo() {
		const res = await axios.get(endpoint.GET_USER_INFO_URL)
			.catch(err => {
				return checkAuth(err.response)
			})
		return res;
	},

  async addCredit(payload) {
		const res = await axios.post(endpoint.ADD_CREDIT_URL, payload)
			.catch(err => {
				return checkAuth(err.response)
			})
		return res;
	},

  async withdrawCredit(payload) {
		const res = await axios.post(endpoint.WITHDRAW_CREDIT_URL, payload)
			.catch(err => {
				return checkAuth(err.response)
			})
		return res;
	},
}
