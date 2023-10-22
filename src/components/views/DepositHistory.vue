<template>
  <div class="deposit bg-base mt-8 mb-9">
    <div class="deposit-top flex mb-5 items-end">
      <div class="deposit-top__block flex">
        <div class="deposit-field select-field">
          <div class="lable">Crypto</div>
          <AppSelect
            class="left"
            :lable="depositCrypto"
            :options="['All']"
            @select="selectCrypto"
          />
        </div>
        <div class="deposit-field select-field ml-4">
          <div class="lable">Direction</div>
          <AppSelect
            class="left"
            :lable="depositDirection"
            :options="['All']"
            @select="selectDirection"
          />
        </div>
        <div class="deposit-field select-field ml-4">
          <div class="lable">Time</div>
          <AppSelect
            class="left"
            style="width: 210px"
            :lable="depositTimeStart"
            :lableTwo="depositTimeEnd"
            :options="['All']"
            @select="selectTime"
          />
        </div>
      </div>
      <div class="deposit-top__btn flex ml-auto">
        <button class="btn px-7 max-h-8">Reset</button>
        <button class="btn btn-yellow px-7 ml-4 max-h-8">Search</button>
      </div>
    </div>
    <div class="deposit-table">
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
          <td :colspan="tableHeader.length">
            <div class="table-empty">
              <div class="able-empty__img w-28">
                <img src="img/folder.svg" alt="">
              </div>
              <span>No Data</span>
            </div>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppSelect from '@/components/ui/AppSelect'

export default {
  name: 'Deposit',
  data: () => ({
    tableHeader: ['Time', 'Crypto', 'Types', 'Amount', 'Convert Address', 'Status'],
    depositCrypto: 'All',
    depositDirection: 'All',
    depositTimeStart: '2022-04-01',
    depositTimeEnd: '2022-04-12'
  }),
  components: {
    AppSelect
  },
  methods: {
    selectCrypto (option) {},
    selectDirection (option) {},
    selectTime (option) {}
  }
}
</script>
