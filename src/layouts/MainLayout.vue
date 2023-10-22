<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="app-main-layout flex" :class="{'show-sidebar': showSidebar}">

      <SidebarAccount v-if="showSidebarAccount" @close="showSidebar = false" />
      <SidebarAdmin v-else-if="showSidebarAdmin"/>
      <Sidebar v-else />

      <main class="app-content" :class="{'app-content__account': showSidebarAccount}">

        <Navbar
          :account="showSidebarAccount"
          @show="showSidebar = true"
        />

        <div class="app-page">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
import SidebarAdmin from '@/components/app/SidebarAdmin'
import SidebarAccount from '@/components/app/SidebarAccount'

export default {
  name: 'main-layout',
  data: () => ({
    loading: false,
    sidebarAdmin: ['Spot', 'DepositHistory'],
    sidebarAccount: ['Overview', 'Security'],
    showSidebar: false
  }),
  components: {
    Navbar,
    Sidebar,
    SidebarAdmin,
    SidebarAccount
  },
  computed: {
    showSidebarAdmin () {
      return this.sidebarAdmin.includes(this.$route.name)
    },
    showSidebarAccount () {
      return this.sidebarAccount.includes(this.$route.name)
    }
  }
}
</script>
