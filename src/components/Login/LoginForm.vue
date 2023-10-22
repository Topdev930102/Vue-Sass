<template>
  <div class="mt-auto mb-auto">
    <h3>Log in</h3>
    <form class="mt-8" @submit.prevent="submitLogin">
      <div v-if="submitted && $v.user.name.$error">
        <span v-if="!$v.user.name.required" class="text-red">Email / Phone is required</span>
        <span v-else-if="!$v.user.name.email" class="text-red">Email / Phone is invalid</span>
      </div>
      <div class="input-field">
        <label for="name">Email / Phone</label>
        <input
          id="name"
          type="text"
          placeholder="Your email or phone"
          v-model.trim="user.name"
        >
      </div>
      <div v-if="submitted && $v.user.password.$error">
        <span v-if="!$v.user.password.required" class="text-red">Password is required</span>
        <span v-else-if="!$v.user.password.minLength" class="text-red">Password must be at least 8 characters</span>
      </div>
      <div class="input-field mb-4">
        <label for="password">Password</label>
        <input
          id="password"
          :type="notEyePassword ? 'password' : 'text'"
          placeholder="Password"
          autocomplete="off"
          v-model.trim="user.password"
        >
        <i
          :class="[ notEyePassword ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyePassword = !notEyePassword"
        ></i>
      </div>
      <div class="forgot flex mb-8">
        <div class="cursor-pointer" @click="$emit('forgot')">Forgot password?</div>
        <div class="ml-auto">
          Don’t have an account?
          <span class="cursor-pointer text-white ml-1" @click="$router.push('/sign-up')">Sign up</span>
        </div>
      </div>
      <div v-if="error&&error!==200" class="text-red mb-4">Error: No user with such credentials</div>
      <div v-if="error===200" class="text-green mb-4">Success: Welcome to login!</div>
      <button type="submit" class="btn btn-yellow">Log in</button>
    </form>
  </div>
</template>

<script>

import { required, email, minLength, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  props: ['error'],
  data: () => ({
    user: {
      name: '',
      password: ''
    },
    notEyePassword: true,
    submitted: false
  }),
  validations: {
    user: {
      name: { required, email },
      password: { required, minLength: minLength(8) }
    }
  },
  methods: {
    submitLogin () {
      this.submitted = true

      this.$v.$touch()
      if (this.$v.$invalid) { return }
      const loginData = {
        user: this.user.name,
        password: this.user.password
      }
      this.$emit('submit', loginData)
    }
  }
}
</script>
