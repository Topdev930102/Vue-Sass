<template>
  <div class="deposit">

    <TopBar />

    <div class="deposit-body flex justify-between mt-8">
      <div class="deposit-item order-item bg-base">
        <div class="order-item__field">
          <div class="lable">Coins</div>
          <AppSelect
            :lable="currency"
            :options="currencyOptions"
            @select="selectCurrency"
          />
        </div>
        <div class="title-field flex mt-5">
          <div class="name">Available Balance:</div>
          <div class="count ml-auto text-white">10 USDT</div>
        </div>
        <div class="order-item__field mt-auto">
          <div class="lable">Deposite</div>
          <div class="value">Amount</div>
        </div>
      </div>
      <div class="deposit-item order-item bg-base">
        <div class="order-item__field">
          <div class="lable">Deposit adress</div>
          <div class="value flex">Deposit address <i class="icon-list ml-auto"></i></div>
        </div>
        <div class="deposit-item__img">
          <img src="img/qr-code.png" alt="">
        </div>
      </div>
      <div class="deposit-item order-item bg-base">
        <ul>
          <li>1. A single recharge must not be less than O USDT, less than this amount will not be successful.</li>
          <li>2. You need to go to this page to copy the address before each recharge to make sure that the address is correct. The wrong address will cause the recharge to fail.</li>
          <li>3. Please do not deposit any assets other than USDT to the above address, otherwise the assets will not be retrieved.</li>
        </ul>
        <button class="btn btn-yellow justify-center">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppSelect from '@/components/ui/AppSelect'
import TopBar from '@/components/app/TopBar'

export default {
  name: 'Deposit',
  data: () => ({
    tabs: ['Level', 'Deposit', 'Withdrawl'],
    tabActive: 'Deposit',
    currency: 'USDT',
    currencyOptions: ['USDT', 'BTC']
  }),
  components: {
    AppSelect,
    TopBar
  },
  methods: {
    selectCurrency (option) {
      this.currency = option
    }
  }
}
</script>
