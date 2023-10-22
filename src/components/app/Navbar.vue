<template>
  <nav class="navbar">
    <div v-if="title" class="navbar-left title flex items-center">
      <button v-if="!$route.meta.admin" class="btn md:mr-8" @click="$router.go(-1)"><i class="icon-arrow mr-3"></i>Back</button>
      <i v-if="account" class="icon-burger lg:hidden block mr-4" @click="$emit('show')"></i>
      <h4 class="text-white font-roboto">{{ title }}</h4>
    </div>
    <div
      v-else
      class="navbar-left md:flex hidden items-center"
    >
      <h4>模拟持仓</h4>
      <div class="navbar-left__item xl:ml-10 ml-5 xl:mr-12 mr-5 lg:flex hidden items-center">
        <i class="icon-sound"></i>
        <h5 class="text-gray-light ml-2.5">用BTC可以赚BTC啦! 杠杆高达100倍</h5>
      </div>
      <h5 class="text-blue lg:block hidden">查看详情</h5>
    </div>

    <ul class="navbar-right md:flex hidden ml-auto items-center">

      <AppSelect
        class="center"
        :lable="'Assets'"
        :options="assetsOptions"
        @select="selectAssets"
      />

      <AppSelect
        class="ml-7 mr-10 center"
        :lable="'Order History'"
        :options="orderOptions"
        @select="selectOrder"
      />

      <li class="navbar-right__item mr-9">
        <a href="#">
          <i class="icon-alarm"></i>
          <div class="notification"></div>
        </a>
      </li>
      <li class="navbar-right__item mr-9"><a href="#"><i class="icon-email"></i></a></li>
      <li class="navbar-right__item navbar-account"
        :class="{'active': dropdown}"
        v-outside="accountOutside"
        @click="dropdown = !dropdown"
      >
        <div class="flex items-center cursor-pointer">
          <div class="navbar-account__img">
            <img src="img/user.png" alt="">
          </div>
          <span class="name">{{ name }}</span>
          <i class="icon-arrow"></i>
        </div>

        <ul class="dropdown">
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="dropdown-item"><a href="#">Menu</a></li>
          <li class="divider"></li>
          <li class="dropdown-item logout" @click.prevent="logout"><a>Logout</a></li>
        </ul>
      </li>

      <AppSelect
        class="ml-7 right"
        :lable="language"
        :options="languageOptions"
        @select="selectLanguage"
      />
    </ul>
  </nav>
</template>

<script>
import clickOutsideMixin from '@/mixins/clickOutside.mixin'
import AppSelect from '@/components/ui/AppSelect'
import {
  mapActions
} from 'vuex'

export default {
  name: 'Navbar',
  props: ['account'],
  mixins: [clickOutsideMixin],
  data: () => ({
    name: 'Kevine Harry',
    language: 'En',
    languageOptions: [
      { name: '简体中文', code: 'Zh' },
      { name: 'English', code: 'En' }
    ],
    assetsOptions: [
      { name: 'Funding Details', path: '/details' },
      { name: 'Balances', path: '/deposit' },
      { name: 'Order Details', path: '/order' }
    ],
    orderOptions: [
      { name: 'Futures', path: '/future' },
      { name: 'Spot', path: '/spot' }
    ],
    dropdown: false,
    title: null
  }),
  components: {
    AppSelect
  },
  methods: {
    ...mapActions('auth', ['logout']),
    accountOutside () {
      this.dropdown = false
    },
    selectLanguage (option) {
      this.language = option.code
    },
    selectAssets (option) {
      this.$router.push(option.path)
    },
    selectOrder (option) {
      this.$router.push(option.path)
    }
  },
  watch: {
    $route () {
      this.title = this.$route.meta.title
    }
  },
  mounted () {
    this.title = this.$route.meta.title
  }
}
</script>
