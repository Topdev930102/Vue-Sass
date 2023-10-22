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
          <div class="count ml-auto text-yellow">10 USDT</div>
        </div>
        <p class="mt-6 mb-2.5 text-blue text-right fz-15">Manage adress</p>
        <div class="order-item__field">
          <div class="lable">Withdrawal Address</div>
          <AppSelect
            :lable="'USDT withdrawal adress'"
            :options="['USDT withdrawal adress']"
            opacityName="opacity-10"
            @select="selectCurrency"
          />
        </div>
        <div class="title-field flex mt-5">
          <div class="name">Single Maximum</div>
          <div class="count ml-auto text-white">10 USDT</div>
        </div>
      </div>
      <div class="deposit-item order-item bg-base">
        <div class="order-item__field">
          <div class="lable">Amount</div>
          <div class="value flex">0 <span class="ml-auto text-blue fz-15">Withdraw all</span></div>
        </div>
        <div class="order-item__field mt-4">
          <div class="lable">Pin</div>
          <div class="flex items-center">
            <div class="value opacity-10">{{ notPin }}</div>
            <i class="cursor-pointer ml-auto"
              :class="[ notEye ? 'icon-not-eye' : 'icon-eye']"
              @click="notEye = !notEye"
            ></i>
          </div>
        </div>
        <p class="mt-6 mb-2.5 text-blue text-right fz-15">Get Verification code</p>
        <div class="order-item__field">
          <div class="lable">Enter Underfined Verification Code</div>
          <div class="value opacity-10">*********************</div>
        </div>
        <div class="title-field flex mt-5">
          <div class="name">Fee</div>
          <div class="count ml-auto text-white">0 USDT</div>
        </div>
      </div>
      <div class="deposit-item order-item bg-base">
        <ul class="mb-7">
          <li class="mb-2">1. The minimum withdraw amount is : USD T.</li>
          <li class="mb-2">2. The daily limit withdrawal amount is: 0 USDT</li>
          <li class="mb-2">3. Please make sure the address is valid. Otherwise, your funds will be lost forever.</li>
          <li class="mb-2">4.Please make sure the address tag is correct. Otherwise, your funds will be lost forever.</li>
          <li class="mb-2">5. For the fund security when you change your security setting or code, we will confirm with you by telephone or mail. Please wait for the contact.</li>
          <li class="mb-2">6.Please make sure that the computer and browser are reliable to prevent the information from being tampered with or leaked.</li>
          <li>7. Withdraw hours (SGT): Monday to Sunday 9:00 - 21:00.</li>
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
    currencyOptions: ['USDT', 'BTC'],
    pin: '2834673265782365',
    notEye: true
  }),
  components: {
    AppSelect,
    TopBar
  },
  computed: {
    notPin () {
      return this.notEye
        ? this.pin.replace(/./gm, '*')
        : this.pin
    }
  },
  methods: {
    selectCurrency (option) {
      this.currency = option
    }
  }
}
</script>
