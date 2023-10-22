<template>
  <div class="security m:mb-10 mb-0">
    <div class="security-top">
      <div class="security-top__title">
        <h4>2-Factor Authntication</h4>
        <p>In order to protect your account, it is recommended to complete at least one real-name authentication</p>
      </div>
      <div class="security-top__img">
        <img src="img/security.svg" alt="">
      </div>
    </div>
    <div class="security-body bg-base">
      <div
        v-for="security in securityItems"
        :key="security.title"
        class="security-item"
      >
        <div class="security-item__title">
          <h4>{{ security.title }}</h4>
          <p>{{ security.description }}</p>
        </div>
        <div v-if="security.hasOwnProperty('verification')"
          class="security-item__verification flex items-center"
        >
          <i :class="[security.verification ? 'icon-chek' : 'icon-plus-btn']"></i>
          <div class="value">{{ security.verification ? security.value : 'Not set yet' }}</div>
        </div>
        <div class="security-item__btn">
          <button class="btn btn-gray-light px-6 py-1.5">Change</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Security',
  data: () => ({
    securityItems: [
      {
        title: 'Set Password',
        description: 'Account Login Password'
      },
      {
        title: 'Fund Password',
        description: 'Password used to manage your account funds'
      },
      {
        title: 'Mobile Verify',
        description: 'To protect your transactions and account security',
        value: '861****918',
        verification: true
      },
      {
        title: 'Email Address',
        description: 'To protect your transactions and account security',
        verification: false
      },
      {
        title: 'Real-name Authentication',
        description: 'Verify Failed',
        verification: false
      },
      {
        title: 'Device Management',
        description: 'Recent login activities'
      },
      {
        title: 'Bank Cards',
        description: 'You can only bund up to 3 savings bank cards',
        verification: false
      },
      {
        title: 'Addresses',
        description: 'Ensure that the withdrawal address is correct',
        verification: false
      }
    ]
  })
}
</script>
