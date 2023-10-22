<template>
  <div class="sidebar bg-gray">
      <a href="/" class="logo">Logo</a>
      <router-link
        v-for="link in links"
        :key="link.url"
        class="sidebar-item flex items-center"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
      >
        <i :class="'icon-' + link.icon"></i>{{ link.title }}
      </router-link>
    </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Home', url: '/', icon: 'home', exact: true },
      { title: 'Trade', url: '/trade', icon: 'trade' },
      { title: 'Order', url: '/order', icon: 'news' },
      { title: 'Profile', url: '/account', icon: 'account' },
      { title: '客服', url: '/support', icon: 'support' }
    ]
  })
}
</script>
