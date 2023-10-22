<template>
  <div class="order">
    <div class="order-body flex justify-between">
      <div class="order-item">
        <div class="crypto flex items-center">
          <div class="crypto-img">
            <img src="img/cryptocurrency/btc.svg" alt="">
          </div>
          <div class="crypto-name">{{currency}}</div>
        </div>
        <div class="crypto-price">
          <div class="crypto-price__item flex mb-6">
            <div class="flex items-center">
              <i class="icon-plus-btn"></i>
              <p class="text-green">Buy Price</p>
            </div>
            <div class="ml-auto price">{{currencyInfo ? currencyInfo.average_buy_price : 0}}</div>
          </div>
          <div class="crypto-price__item flex">
            <div class="flex items-center">
              <i class="icon-minus-btn"></i>
              <p class="text-red">Sell Price</p>
            </div>
            <div class="ml-auto price">{{currencyInfo ? currencyInfo.average_sell_price : 0}}</div>
          </div>
        </div>
      </div>
      <div class="order-item">
        <div class="order-item__header flex">
          <div class="name">Available Balance:</div>
          <div class="count ml-auto text-white">1231231231</div>
        </div>
        <div class="order-item__field">
          <div class="lable">Deposite</div>
          <!-- <div class="value">Choouse amount</div> -->
          <input
            id="name"
            type="number"
            class="value bg-gray"
            v-model.trim="deposit"
          >
        </div>
        <div class="order-item__field mt-auto">
          <div class="lable">Multiple</div>
          <AppSelect
            class=""
            :lable="multiple"
            :options="multipleOptions"
            @select="selectMultiple"
          />
        </div>
      </div>
      <div class="order-item">
        <div class="order-item__header flex">
          <div class="name">Total Order Value:</div>
          <div class="count ml-auto text-white">{{ totalAmount }}</div>
        </div>
        <div class="order-item__field flex items-center">
          <h4>Profit Stop</h4>
          <div class="stop flex items-center ml-auto">
            <i class="icon-minus-empty" @click="profit--"></i>
            <div class="stop-profit">{{ profit }}</div>
            <i class="icon-plus-empty" @click="profit++"></i>
          </div>
        </div>
        <div class="order-item__field flex items-center mt-auto">
          <h4>Loss Stop</h4>
          <div class="stop flex items-center ml-auto">
            <i class="icon-minus-empty" @click="loss--"></i>
            <div class="stop-profit">{{ loss }}</div>
            <i class="icon-plus-empty" @click="loss++"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="order-footer flex">
      <div class="switch flex items-center">
        <input type="checkbox" id="switch" v-model="support" />
        <label for="switch"></label>
        <p class="ml-3.5">Support Overnight Protection</p>
      </div>
      <div class="order-footer__btn flex md:ml-auto">
        <button class="btn btn-blue py-2.5 md:px-8" @click="handleOrder(0)">Place Call Order</button>
        <button class="btn btn-yellow ml-5 py-2.5 md:px-8" @click="handleOrder(1)">Place Put Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppSelect from '@/components/ui/AppSelect'
import { mapActions, mapGetters } from 'vuex'
import { Api } from '@/utils/api.service'

export default {
  name: 'Order',
  data: () => ({
    support: false,
    multiple: 'x10',
    multipleOptions: ['x10', 'x20', 'x30'],
    profit: 0,
    loss: 0,
    deposit: 0,
    totalAmount: 0
  }),
  components: {
    AppSelect
  },
  computed: {
    ...mapGetters('app', ['currency', 'currencyInfo'])
  },
  methods: {
    ...mapActions('app', ['addOption']),
    selectMultiple (option) {
      this.multiple = option
      const multipleNum = option.replace('x', '')
      this.totalAmount = Number(this.deposit) * Number(multipleNum)
    },
    handleOrder (orderType) {
      const currencyType = this.currency.replace('/', '')
      const multipleNum = Number(this.multiple.replace('x', ''))
      const profit = this.profit + this.currencyInfo?.average_buy_price
      const loss = this.loss + this.currencyInfo?.average_sell_price
      const data = {
        type: orderType,
        currency_type: currencyType,
        multiply: multipleNum,
        deposit: this.deposit,
        stop_profit_price: profit,
        stop_loss_price: loss,
        support_over_night: this.support
      }

      this.addOption(data).then((res) => {
        if (res.status === 400) {
          alert(res.data)
        }
      })
    }
  }
}
</script>
