<template>
  <div class="sidebar sidebar-account bg-gray">
    <a href="/" class="logo">Logo</a>
    <i class="icon-plus" @click="$emit('close')"></i>
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
      { title: 'Overview', url: '/overview', icon: 'overview', exact: true },
      { title: 'Settings', url: '/settings', icon: 'settings' },
      { title: 'Security', url: '/security', icon: 'security' },
      { title: 'Copying Trades', url: '/copying-trades', icon: 'news' },
      { title: 'Following Trades', url: '/following-trades', icon: 'news' },
      { title: 'Support Center', url: '/support', icon: 'support' }
    ]
  })
}
</script>
