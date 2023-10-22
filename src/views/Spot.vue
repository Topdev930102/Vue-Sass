<template>
  <div class="spot">
    <div class="spot-top flex items-center pt-8 pb-4">
      <button class="btn btn-yellow">Buy</button>
      <button class="btn">Deposit</button>
      <button class="btn">Withdrawl</button>
      <button class="btn">Convert</button>
      <button class="btn btn-border__yellow">History</button>
    </div>
    <div class="spot-hesder flex mb-4">
      <div class="w-1/3">
        <h4>Total Balances</h4>
        <div class="spot-hesder__title">7.32 <span>≈ ¥ 46.5552</span></div>
      </div>
      <div class="w-1/3">
        <h4>Total Balances</h4>
        <div class="spot-hesder__title">- -</div>
      </div>
      <div class="w-1/3">
        <h4>Red Envelopes</h4>
        <div class="spot-hesder__title">6.29</div>
      </div>
    </div>
    <div class="spot-table">
      <div class="spot-table__top flex items-center">
        <div class="table-search flex">
          <input type="text" placeholder="Search Crypto" v-model="searchCrypto">
          <button class="btn btn-yellow ml-4 px-6 py-1.5">Search Crypto</button>
        </div>
        <div class="table-checkbox flex items-center ml-auto">
          <input class="checkbox" id="check-balance" type="checkbox" v-model="checkBalance">
          <label for="check-balance">Hide Small Balances</label>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="header in tableHeader"
              :key="header"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="flex items-center">
              <div class="w-6 h-6">
                <img src="img/cryptocurrency/btc.svg" alt="">
              </div>
              <div class="ml-2.5">
                <div>BTC/USDT</div>
                <div class="text-gray-light" style="font-size: 10px">Bitcoin</div>
              </div>
            </td>
            <td>7.32</td>
            <td>46.482</td>
            <td>0</td>
            <td>
              <span class="text-yellow">Deposit</span>
              <span class="text-yellow ml-6">Withdraw</span>
              <span class="text-yellow ml-6">Transaction</span>
            </td>
          </tr>
          <tr>
            <td class="flex items-center">
              <div class="w-6 h-6">
                <img src="img/cryptocurrency/btc.svg" alt="">
              </div>
              <div class="ml-2.5">
                <div>BTC/USDT</div>
                <div class="text-gray-light" style="font-size: 10px">Bitcoin</div>
              </div>
            </td>
            <td>7.32</td>
            <td>46.482</td>
            <td>0</td>
            <td>
              <span class="text-yellow">Deposit</span>
              <span class="text-yellow ml-6">Withdraw</span>
              <span class="text-yellow ml-6">Transaction</span>
            </td>
          </tr>
          <tr>
            <td class="flex items-center">
              <div class="w-6 h-6">
                <img src="img/cryptocurrency/btc.svg" alt="">
              </div>
              <div class="ml-2.5">
                <div>BTC/USDT</div>
                <div class="text-gray-light" style="font-size: 10px">Bitcoin</div>
              </div>
            </td>
            <td>7.32</td>
            <td>46.482</td>
            <td>0</td>
            <td>
              <span class="text-yellow">Deposit</span>
              <span class="text-yellow ml-6">Withdraw</span>
              <span class="text-yellow ml-6">Transaction</span>
            </td>
          </tr>
          <tr>
            <td class="flex items-center">
              <div class="w-6 h-6">
                <img src="img/cryptocurrency/btc.svg" alt="">
              </div>
              <div class="ml-2.5">
                <div>BTC/USDT</div>
                <div class="text-gray-light" style="font-size: 10px">Bitcoin</div>
              </div>
            </td>
            <td>7.32</td>
            <td>46.482</td>
            <td>0</td>
            <td>
              <span class="text-yellow">Deposit</span>
              <span class="text-yellow ml-6">Withdraw</span>
              <span class="text-yellow ml-6">Transaction</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="''"
        :next-text="''"
        :prev-class="'prev'"
        :next-class="'next'"
        :break-view-class="'break'"
        :container-class="'pagination'"
      />
    </div>
  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin'

export default {
  name: 'Spot',
  mixins: [paginationMixin],
  data: () => ({
    searchCrypto: '',
    checkBalance: false,
    tableHeader: ['Crypto', 'Available Balances', 'Amount to', 'Order Locked', 'Operation'],
    tableItems: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 }
    ]
  }),
  mounted () {
    this.setupPagination(this.tableItems)
  }
}
</script>
