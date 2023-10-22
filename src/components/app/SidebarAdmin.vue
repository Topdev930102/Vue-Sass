<template>
  <div class="sidebar sidebar-admin bg-gray">
      <a href="/" class="logo">Logo</a>
      <ul>
        <li v-for="(link, idx) in links"
          :key="idx"
          class="sidebar-item flex items-center"
          :class="{active: linkActive === idx}"
        >
          <span class="relative" @click.stop="linkParent(idx)">
            <i :class="'icon-' + link.icon"></i>
            {{ link.title }}
            <i v-if="link.children" class="icon-arrow"></i>
          </span>
          <div class="children">
            <router-link
              v-for="child in link.children"
              :key="child.url"
              class="block"
              active-class="active"
              :to="child.url"
              :exact="link.exact"
            >
              {{ child.title }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SidebarAdmin',
  data: () => ({
    links: [
      {
        title: 'Funding Details',
        icon: 'funding',
        exact: true,
        children: [
          { title: 'Spot', url: '/spot' },
          { title: 'Future', url: '/future' }
        ]
      },
      {
        title: 'Balance',
        icon: 'trade',
        children: [
          { title: 'Deposit ', url: '/deposit' },
          { title: 'Fiats', url: '/fiats' },
          { title: 'Red Envelopes', url: '/envelopes' },
          { title: 'Transfer', url: '/transfer' }
        ]
      },
      {
        title: 'Order Details',
        icon: 'news',
        children: [
          { title: 'Spot', url: '/spot' },
          { title: 'Future', url: '/future' }
        ]
      },
      {
        title: '客服',
        url: '/support',
        icon: 'support'
      }
    ],
    linkActive: null
  }),
  methods: {
    linkParent (idx) {
      this.linkActive = this.linkActive !== idx ? idx : null
    }
  }
}
</script>
