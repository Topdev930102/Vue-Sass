<template>
  <div class="home">
    <div class="home-top m:py-8 m:flex items-center">
      <div class="home-top__left flex items-center">
        <button class="btn mr-10"><i class="icon-arrow mr-3"></i>Back</button>
        <div class="home-top__asset text-white mr-6 flex">
          <i class="icon-exchange mr-2.5 self-center"></i>
          <!-- BTC/USDT -->
          <AppSelect
            class="center"
            :lable="currency"
            :options="currencies"
            :showIcon="true"
            @select="selectCurrencies"
          />
        </div>
        <div>
          <i class="icon-star mr-3 cursor-pointer"></i>
          <i class="icon-info"></i>
        </div>
      </div>
      <div class="home-top__tabs tabs-btn flex ml-auto">
        <div class="tab-item"
          v-for="tab in tabs"
          :key="tab"
          :class="{'active': tabActive === tab}"
          @click="tabActive = tab"
        >{{ tab }}</div>
      </div>
    </div>
    <div class="home-body">
      <div class="home-block">
        <div class="home-block__item item1">
          <div class="flex items-start">
            <div class="item-count">{{ currencyInfo && currencyInfo.average_buy_price ? currencyInfo.average_buy_price : 0 }}</div>
            <i class="icon-arrow-top" :class="{'rotate': changedPrice < 0}"></i>
          </div>
          <div>
            <span>{{ changedPrice }}</span>
            <span class="ml-2.5">{{ changedPercent }}%</span>
          </div>
        </div>
        <div class="home-block__item item2">
          <i class="icon-arrow-top"></i>
          <div class="item-title">Highest</div>
          <div class="item-count">40347.39</div>
        </div>
        <div class="home-block__item item3">
          <i class="icon-arrow-top rotate"></i>
          <div class="item-title">Lowest</div>
          <div class="item-count">38582.97</div>
        </div>
        <div class="home-block__item item4">
          <i class="icon-today-price"></i>
          <div class="item-title">Today’s Open Price</div>
          <div class="item-count">39969.98</div>
        </div>
        <div class="home-block__item item5">
          <i class="icon-door"></i>
          <div class="item-title">Yesterday’s Close Price</div>
          <div class="item-count">39969.98</div>
        </div>
      </div>

      <AppChart class="mt-11"/>

    </div>
    <div class="home-footer flex items-center m:p-8 mb-10">
      <button class="btn m:px-9">
        <i class="icon-order m:mr-3"></i>
        Order
      </button>
      <button class="btn ml-auto btn-green px-5 py-2.5">{{ currencyInfo && currencyInfo.average_buy_price ? currencyInfo.average_buy_price : 0 }} <span class="ml-2.5">Buy</span></button>
      <button class="btn btn-red ml-5 px-5 py-2.5">{{ currencyInfo && currencyInfo.average_sell_price ? currencyInfo.average_sell_price : 0 }} <span class="ml-2.5">Sell</span></button>
    </div>
  </div>
</template>

<script>
import AppChart from '@/components/app/AppChart'
import { WS_HOST, CURRENCIES } from '@/utils/constants'
import AppSelect from '@/components/ui/AppSelect'
import {
  mapGetters,
  mapActions
} from 'vuex'
import JwtService from '@/utils/jwt.service.js'

export default {
  name: 'Home',
  data: () => ({
    tabs: ['Level', 'Deposit', 'Withdrawl'],
    tabActive: 'Withdrawl',
    currencies: CURRENCIES,
    currencyFeed: 0,
    userToken: '',
    connection: null,
    currencyInfo: null,
    changedPrice: 0,
    changedPercent: 0,
    currencyType: ''
  }),
  components: {
    AppChart,
    AppSelect
  },

  computed: {
    ...mapGetters('app', ['currency', 'currencySocket'])
  },

  methods: {
    ...mapActions('app', ['setCurrency', 'setCurrencyInfo', 'addChartData', 'addChartDate', 'setBTCbuyprice', 'setETHbuyprice', 'setCurrencySocket']),
    ...mapActions('auth', ['clearToken', 'logout']),

    selectCurrencies (option) {
      this.currencyType = option.replace('/', '')
      this.setCurrency(option)
      this.changedPrice = 0
      this.changedPercent = 0
    },

    onSocket () {
      console.log('Starting connection to WebSocket Server')
      this.connection = new WebSocket('wss://' + WS_HOST + '/ws/currency_live?token=' + JwtService.getToken())

      this.connection.onopen = function (event) {
        console.log('Successfully connected to the echo websocket server...')
      }

      const self = this

      this.connection.onmessage = function (event) {
        console.log('efefef', self.currency)
        if (event && event.data.includes('Error')) {
          console.log(event.data)
          self.logout()
        } else if (event && event.data.includes('opened')) {
          if (!this.currencySocket) {
            self.connection.send(JSON.stringify({ event: 'subscribe', currency_type: 'BTCUSDT' }))
            self.connection.send(JSON.stringify({ event: 'subscribe', currency_type: 'ETHUSDT' }))
          }
          self.setCurrencySocket(true)
        } else if (event && !event.data.includes('opened') && !event.data.includes('Subscribed') && !event.data.includes('unsubscribe')) {
          console.log('log1111111111', event.data)
          if (JSON.parse(event.data).currency === 'BTCUSDT') {
            self.setBTCbuyprice(JSON.parse(event.data).average_buy_price)
          }
          if (JSON.parse(event.data).currency === 'ETHUSDT') {
            self.setETHbuyprice(JSON.parse(event.data).average_buy_price)
          }
          const currencyType = self.currency.replace('/', '')
          if (JSON.parse(event.data).currency === self.currencyType) {
            console.log('currencytype------------', self.currencyType)
            const oldCurrencyInfo = self.currencyInfo
            self.currencyInfo = JSON.parse(event.data)
            self.setCurrencyInfo(JSON.parse(event.data))
            self.addChartData(self.currencyInfo.average_buy_price)
            self.addChartDate(self.currencyInfo.time)
            self.changedPrice = (self.currencyInfo.average_buy_price - oldCurrencyInfo.average_buy_price).toFixed(2)
            self.changedPercent = (self.changedPrice / oldCurrencyInfo.average_buy_price * 100).toFixed(2)
          }
        }
      }
      this.connection.onclose = function () {
        console.log('socket is closed')
      }
    },
    closeSocket () {
      if (this.connection.readyState === this.connection.OPEN) {
        const currencyType = this.currency
        currencyType.replace('/', '')
        this.connection.send(JSON.stringify({ event: 'unsubscribe', currency_type: currencyType }))
        // this.connection.close()
      }
    }
  },

  created () {
    this.currencyType = this.currency.replace('/', '')
    this.onSocket()
  }
}
</script>
