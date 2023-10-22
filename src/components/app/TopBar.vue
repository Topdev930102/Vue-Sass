<template>
  <div class="mt-8 flex">
    <button class="btn"><i class="icon-arrow mr-3"></i>Back</button>
    <div class="deposit-top__btn flex">
      <button class="btn btn-yellow ml-16 px-6">Deposit</button>
      <button class="btn ml-4 px-6">History</button>
    </div>
    <div class="deposit-top__tabs tabs-btn flex ml-auto">
      <div class="tab-item"
        v-for="tab in tabs"
        :key="tab"
        :class="{'active': tabActive === tab}"
        @click="tabActive = tab"
      >{{ tab }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data: () => ({
    tabs: ['Level', 'Deposit', 'Withdrawl'],
    tabActive: 'Deposit'
  }),
  methods: {
    selectCurrency (option) {
      this.currency = option
    }
  }
}
</script>
