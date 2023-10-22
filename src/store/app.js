import { Api } from '@/utils/api.service.js'
export default {
  namespaced: true,
  state: {
    currency: 'BTC/USDT',
    notification: '',
    currencyInfo: null,
    options: [],
    chartData: [],
    chartDate: [],
    BTC_buy_price: 0,
    ETH_buy_price: 0,
    onCurrencySocket: false,
    onOptionSocket: false
  },
  getters: {
    currency: state => state.currency,
    notification: state => state.notification,
    currencyInfo: state => state.currencyInfo,
    options: state => state.options,
    chartData: state => state.chartData,
    chartDate: state => state.chartDate,
    BTC_buy_price: state => state.BTC_buy_price,
    ETH_buy_price: state => state.ETH_buy_price,
    currencySocket: state => state.onCurrencySocket,
    optionSocket: state => state.onOptionSocket
  },
  mutations: {
    setCurrency (state, currency) {
      state.currency = currency
    },
    setNotification (state, notification) {
      state.notification = notification
    },
    setCurrencyInfo (state, currencyInfo) {
      state.currencyInfo = currencyInfo
    },
    addOption (state, option) {
      state.options.push(option)
    },
    addChartData (state, data) {
      if (state.chartData.length < 20) {
        state.chartData.push(data)
      } else {
        state.chartData.splice(0, 1)
        state.chartData.push(data)
      }
    },
    addChartDate (state, data) {
      if (state.chartDate.length < 20) {
        state.chartDate.push(data)
      } else {
        state.chartDate.splice(0, 1)
        state.chartDate.push(data)
      }
    },
    setOptions (state, options) {
      state.options = options
    },
    closeOption (state, option) {
      const index = state.options.findIndex(e => e.option_project_uuid === option.uuid)
      state.options.splice(index, 1)
    },
    updateOption (state, data) {
      state.options.find(e => e.option_project_uuid === data.option_project_uuid).position_price = data.current_position_price
    },
    setBTCbuyprice (state, price) {
      state.BTC_buy_price = price
    },
    setETHbuyprice (state, price) {
      state.ETH_buy_price = price
    },
    setCurrencySocket (state, value) {
      state.onCurrencySocket = value
    },
    setOptionSocket (state, value) {
      state.onOptionSocket = value
    }
  },
  actions: {
    setCurrency ({ commit }, currency) {
      commit('setCurrency', currency)
    },
    setNotification ({ commit }, notification) {
      commit('setNotification', notification)
    },
    setCurrencyInfo ({ commit }, currencyInfo) {
      commit('setCurrencyInfo', currencyInfo)
    },
    addOption ({ commit }, option) {
      return new Promise((resolve, reject) => {
        Api.addOption(option)
          .then(res => {
            if (res && res.status === 200) {
              commit('addOptions', option)
              resolve(res)
            } else {
              resolve(res)
            }
          })
      })
    },
    addChartData ({ commit }, data) {
      commit('addChartData', data)
    },
    addChartDate ({ commit }, date) {
      commit('addChartDate', date)
    },
    getOptionsList ({ commit }) {
      return new Promise((resolve, reject) => {
        Api.getActiveOptionsList()
          .then(res => {
            if (res && res.status === 200) {
              commit('setOptions', res.data.options_array)
              resolve(res)
            } else {
              resolve(res)
            }
          })
      })
    },
    closeOption ({ commit }, data) {
      return new Promise((resolve, reject) => {
        Api.closeOption(data)
          .then(res => {
            if (res && res.status === 200) {
              commit('closeOption', data)
              resolve(res)
            } else {
              resolve(res)
            }
          })
      })
    },
    updateOption ({ commit }, data) {
      commit('updateOption', data)
    },
    setBTCbuyprice ({ commit }, price) {
      commit('setBTCbuyprice', price)
    },
    setETHbuyprice ({ commit }, price) {
      commit('setETHbuyprice', price)
    },
    setCurrencySocket ({ commit }, value) {
      commit('setCurrencySocket', value)
    },
    setOptionSocket ({ commit }, value) {
      commit('setOptionSocket', value)
    }
  }
}
