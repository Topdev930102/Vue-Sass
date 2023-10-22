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
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
          <i class="icon-arrow ml-auto rotate-180 sm:hidden block"></i>
        </div>
        <div class="card-body flex">
          <div class="s:w-1/3 w-1/2">
            <span class="bg-green count">数量</span>
            <p class="md:mt-2 mt-1">数量 0.068 个</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="md:mb-2 mb-1">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="text-red text-right md:mb-2 mb-1">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto max-h-8">止盈止损</button>
          <button class="btn ml-2.5 max-h-8">平仓</button>
        </div>
      </div>
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="s:w-1/3 w-1/2">
            <span class="bg-green count">数量</span>
            <p class="md:mt-2 mt-1">数量 0.068 个</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="md:mb-2 mb-1">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="text-red text-right md:mb-2 mb-1">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto max-h-8">止盈止损</button>
          <button class="btn ml-2.5 max-h-8">平仓</button>
        </div>
      </div>
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="s:w-1/3 w-1/2">
            <span class="bg-green count">数量</span>
            <p class="md:mt-2 mt-1">数量 0.068 个</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="md:mb-2 mb-1">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="text-red text-right md:mb-2 mb-1">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto max-h-8">止盈止损</button>
          <button class="btn ml-2.5 max-h-8">平仓</button>
        </div>
      </div>
      <div class="trade-card card">
        <div class="card-header">
          <div class="card-header__title">BTC/USDT 43591.13</div>
          <i class="icon-chart"></i>
        </div>
        <div class="card-body flex">
          <div class="s:w-1/3 w-1/2">
            <span class="bg-green count">数量</span>
            <p class="md:mt-2 mt-1">数量 0.068 个</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="md:mb-2 mb-1">买入价 43608.33</p>
            <p>止损价 42902.44</p>
          </div>
          <div class="s:w-1/3 w-1/4">
            <p class="text-red text-right md:mb-2 mb-1">-1.17</p>
            <p class="text-red text-right">-1.95%</p>
          </div>
        </div>
        <div class="card-footer flex">
          <button class="btn ml-auto max-h-8">止盈止损</button>
          <button class="btn ml-2.5 max-h-8">平仓</button>
        </div>
      </div>
      <!-- <div v-for="option in options" :key="option.option_uuid">
        <div class="trade-card card">
          <div class="card-header">
            <div class="card-header__title">{{option}}BTC/USDT 43591.13</div>
            <i class="icon-chart"></i>
          </div>
          <div class="card-body flex">
            <div class="s:w-1/3 w-1/2">
              <span class="bg-green count">数量</span>
              <p class="md:mt-2 mt-1">数量 0.068 个</p>
            </div>
            <div class="s:w-1/3 w-1/4">
              <p class="md:mb-2 mb-1">买入价 43608.33</p>
              <p>止损价 42902.44</p>
            </div>
            <div class="s:w-1/3 w-1/4">
              <p class="text-red text-right md:mb-2 mb-1">-1.17</p>
              <p class="text-red text-right">-1.95%</p>
            </div>
          </div>
          <div class="card-footer flex">
            <button class="btn ml-auto max-h-8">止盈止损</button>
            <button class="btn ml-2.5 max-h-8" @click="closeOptionFunc(option.option_uuid)">平仓</button>
          </div>
        </div>
      </div> -->
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
    connection: null
  }),
  computed: {
    ...mapGetters('app', ['options'])
  },
  methods: {
    ...mapActions('app', ['getOptionsList', 'closeOption']),
    closeOptionFunc (uuid) {
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

      this.connection.onopen = function (event) {
        console.log('Successfully connected to the echo websocket server...')
      }

      const self = this
      this.connection.onmessage = function (event) {
        console.log('message', event.data)
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
  created () {
    this.getOptionsList()
  }
}
</script>
