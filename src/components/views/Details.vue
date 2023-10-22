<template>
  <div class="details py-12">
    <div class="details-card card">
      <div class="card-header flex">
        <h4 class="text-white">BTC/USDT 43591.13</h4>
        <p class="text-green">43609.27 +0.12%</p>
      </div>
      <div class="card-body">
        <div class="card-body__item border-b border-black pb-5">
          <p>Profit/Loss USDT</p>
          <p class="text-green text-big">+0.06 <span>/-0.1%</span></p>
          <p>Stop Profit +300 Price 48020.10 / Stop Lost - 48 Price 42902.44</p>
        </div>
        <div class="flex pt-5">
          <div>
            <p>Option Price USDT</p>
            <div class="text-white text-big">2965<span>.37</span></div>
            <p>BTC 0.068 pcs</p>
          </div>
          <div class="m:ml-20 ml-auto">
            <p>Deposit</p>
            <div class="text-white text-big">60<span>.00</span></div>
            <p>Multiply =49x</p>
          </div>
        </div>
      </div>
      <div class="card-footer mt-14">
        <div class="card-footer__list flex py-3 border-b border-black" @click="isModal = true">
          <div class="list-name"><span class="text-green">Buy </span>Price</div>
          <div class="list-value ml-auto text-white">43608.33</div>
        </div>
        <div class="card-footer__list flex py-3 border-b border-black">
          <div class="list-name"><span class="text-green">Buy </span>Time</div>
          <div class="list-value ml-auto">2022-01-13 13:20:53</div>
        </div>
        <div class="card-footer__list flex py-3 border-b border-black">
          <div class="list-name">Close Price</div>
          <div class="list-value ml-auto">--</div>
        </div>
        <div class="card-footer__list flex py-3">
          <div class="list-name">Close Time</div>
          <div class="list-value ml-auto">--</div>
        </div>
      </div>
    </div>

    <Modal
      v-if="isModal"
    />
  </div>
</template>

<script>
import Modal from '@/components/modal/Modal'

export default {
  name: 'Details',
  data: () => ({
    isModal: false
  }),
  components: {
    Modal
  }
}
</script>
