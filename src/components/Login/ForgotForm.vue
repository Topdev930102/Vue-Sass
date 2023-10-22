<template>
  <div class="mt-auto mb-auto">
    <h3>Forgot password?</h3>
    <p class="mt-6">A code will be sent to user’s email or phone</p>
    <form class="mt-8" @submit.prevent="submitForgot">
      <div class="input-field">
        <label for="name">Email / Phone</label>
        <input
          id="name"
          type="text"
          placeholder="Your email or phone"
          required
          v-model.trim="name"
        >
      </div>
      <button type="submit" class="btn btn-yellow">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data: () => ({
    name: ''
  }),
  methods: {
    submitForgot () {
      this.$emit('forgotPassword')
    }
  }
}
</script>
