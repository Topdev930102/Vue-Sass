<template>
  <div class="withdrawl">

  <TopBar />

  <div class="withdrawl-picker flex justify-end mt-8">
    <date-picker
      prefix-class="app"
      range
      type="date"
      placeholder="This week"
      :shortcuts="shortcuts"
      v-model="dateValue"
    >
      <template slot="icon-calendar">
        <span class="icon-calendar"></span>
        <span class="icon-arrow"></span>
        <span class="icon-arrow rotate-180"></span>
      </template>
    </date-picker>
  </div>
  <div class="withdrawl-body bg-base mt-5 mb-14">
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
        <tr v-for="item in 6" :key="item">
          <td>
            <span class="data">22.04.2022</span>
            <span class="time ml-2">23:02</span>
          </td>
          <td class="flex items-center">
            <div class="w-6 h-6">
              <img src="img/cryptocurrency/btc.svg" alt="">
            </div>
            <div class="ml-2.5">
              <div>BTC/USDT</div>
              <div class="text-gray-light" style="font-size: 10px">Bitcoin</div>
            </div>
          </td>
          <td width="30%">10 USDT</td>
          <td width="30%">#124153465125511</td>
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
import DatePicker from 'vue2-datepicker'
import TopBar from '@/components/app/TopBar'
import paginationMixin from '@/mixins/pagination.mixin'

export default {
  name: 'withdrawl',
  mixins: [paginationMixin],
  data: () => ({
    tableHeader: ['Date and Time', 'Crypto', 'Amount', 'Transition ID'],
    dateValue: [],
    tableItems: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 }
    ],
    shortcuts: [
      {
        text: 'Today',
        onClick () {
          const date = new Date()
          return new Date()
        }
      },
      {
        text: 'Yesterday',
        onClick () {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          return date
        }
      },
      {
        text: 'This week',
        onClick () {}
      },
      {
        text: 'Last week',
        onClick () {}
      },
      {
        text: 'Past two weeks',
        onClick () {}
      },
      {
        text: 'This month',
        onClick () {}
      },
      {
        text: 'Last month',
        onClick () {}
      },
      {
        text: 'This year',
        onClick () {}
      },
      {
        text: 'Last year',
        onClick () {}
      }
    ]
  }),
  components: {
    TopBar,
    DatePicker
  },
  mounted () {
    this.setupPagination(this.tableItems)
  }
}
</script>
