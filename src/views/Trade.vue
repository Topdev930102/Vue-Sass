<template>
  <div class="trade">
    <div class="trade-top md:py-8 flex items-center">
      <button class="btn mr-10"><i class="icon-arrow mr-3"></i>Back</button>
      <div class="trade-top__tabs tabs-btn flex">
        <div class="tab-item px-3"
          v-for="tabBtn in tabsBtn"
          :key="tabBtn"
          :class="{'active': tabBtnActive === tabBtn}"
          @click="tabBtnActive = tabBtn"
        >{{ tabBtn }}</div>
      </div>
      <div class="trade-top__btns flex md:ml-auto">
        <div class="btn-item"
          v-for="btn in btns"
          :key="btn"
          :class="{'active': btnActive === btn}"
          @click="btnActive = btn"
        >{{ btn }}</div>
      </div>
    </div>
    <div class="m:hidden md:px-4 sm:px-4 s:px-5 flex items-center my-4">
      <i class="icon-sound"></i>
      <h5 class="text-gray-light ml-2.5">用BTC可以赚BTC啦! 杠杆高达100倍</h5>
      <h5 class="text-blue ml-2">查看详情</h5>
    </div>

    <div class="trade-body flex pb-5">
      <div class="trade-card card" v-for="option in options" :key="option.option_project_uuid">
        <div class="card-header">
          <div class="card-header__title" v-if="option.currency_type === 'BTCUSDT'">{{option.currency_type + ' ' + (BTC_buy_price).toFixed(2)}}</div>
          <div class="card-header__title" v-if="option.currency_type === 'ETHUSDT'">{{option.currency_type + ' ' + (ETH_buy_price).toFixed(2)}}</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="s:w-1/3 w-1/2">
            <span class="bg-green count">数量</span>
            <p class="md:mt-2 mt-1">数量 {{option.crypto_amount}} 个</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="md:mb-2 mb-1">买入价 {{option.position_price}}</p>
            <p>止损价 {{option.stop_loss_price}}</p>
          </div>
          <div class="s:w-1/3 w-1/4" v-if="option.type === 0 && option.currency_type === 'BTCUSDT'">
            <p class="text-red text-right md:mb-2 mb-1">{{ (BTC_buy_price - option.position_price).toFixed(2) }}</p>
            <p class="text-red text-right">{{ ((BTC_buy_price - option.position_price)/option.position_price * 100).toFixed(2) }}%</p>
          </div>
          <div class="s:w-1/3 w-1/4" v-if="option.type === 1 && option.currency_type === 'BTCUSDT'">
            <p class="text-red text-right md:mb-2 mb-1">{{ (option.position_price - BTC_buy_price).toFixed(2) }}</p>
            <p class="text-red text-right">{{ ((option.position_price - BTC_buy_price)/option.position_price * 100).toFixed(2) }}%</p>
          </div>
          <div class="s:w-1/3 w-1/4" v-if="option.type === 0 && option.currency_type === 'ETHUSDT'">
            <p class="text-red text-right md:mb-2 mb-1">{{ (ETH_buy_price - option.position_price).toFixed(2) }}</p>
            <p class="text-red text-right">{{ ((ETH_buy_price - option.position_price)/option.position_price * 100).toFixed(2) }}%</p>
          </div>
          <div class="s:w-1/3 w-1/4" v-if="option.type === 1 && option.currency_type === 'ETHUSDT'">
            <p class="text-red text-right md:mb-2 mb-1">{{ (option.position_price - ETH_buy_price).toFixed(2) }}</p>
            <p class="text-red text-right">{{ ((option.position_price - ETH_buy_price)/option.position_price * 100).toFixed(2) }}%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto max-h-8">止盈止损</button>
          <button class="btn ml-2.5 max-h-8" @click="closeOptionFunc(option.option_project_uuid)">平仓</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import { WS_HOST } from '@/utils/constants'
import JwtService from '@/utils/jwt.service.js'

export default {
  name: 'Trade',
  data: () => ({
    tabsBtn: ['模拟交易', '模拟持仓'],
    tabBtnActive: '模拟持仓',
    btns: ['持仓', '结算', '撤单'],
    btnActive: '持仓',
    connection: null,
    optionsList: {}
  }),
  computed: {
    ...mapGetters('app', ['options', 'BTC_buy_price', 'ETH_buy_price', 'optionSocket'])
  },
  methods: {
    ...mapActions('app', ['getOptionsList', 'closeOption', 'updateOption', 'setOptionSocket']),
    closeOptionFunc (uuid) {
      console.log(uuid)
      const data = {
        uuid: uuid
      }
      this.closeOption(data).then(res => {
        console.log(res)
      })
    },
    onSocket () {
      console.log('Starting connection to WebSocket Server')
      this.connection = new WebSocket('wss://' + WS_HOST + '/ws/options_live?token=' + JwtService.getToken())
      console.log('new Websocket', this.connection)

      const self = this

      this.connection.onopen = function (event) {
        console.log('Successfully connected to the echo websocket server...')
      }

      // const self = this
      this.connection.onmessage = function (event) {
        console.log('log1111111111', event.data)
        if (event && event.data.includes('opened')) {
          if (!this.optionSocket) {
            for (let i = 0; i < self.options.length; i++) {
              console.log(self.options[i].option_project_uuid)
              self.setOptionSocket(true)
              self.connection.send(JSON.stringify({ event: 'subscribe', option_uuid: self.options[i].option_project_uuid }))
            }
          }
        } else if (!event.data.includes('Subscribed')) {
          if (JSON.parse(event.data).option_project_uuid) {
            self.updateOption(JSON.parse(event.data))
          }
        }
      }
      this.connection.onclose = function () {
        console.log('socket is closed')
      }
    },
    closeSocket (optionUUID) {
      if (this.connection.readyState === this.connection.OPEN) {
        this.connection.send(JSON.stringify({ event: 'unsubscribe', option_uuid: optionUUID }))
        // this.connection.close()
      }
    }
  },
  mounted () {
    this.getOptionsList()
    this.onSocket()
  }
}
</script>
