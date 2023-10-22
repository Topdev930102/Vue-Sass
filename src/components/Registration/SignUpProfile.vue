<template>
  <div class="sign-up mt-auto mb-auto">
    <h3>Sign Up</h3>
    <form class="mt-8" @submit.prevent="submitSignUp">
      <div v-if="submitted && $v.name.$error">
        <span v-if="!$v.name.required" class="text-red">Email / Phone is required</span>
        <span v-else-if="!$v.name.email" class="text-red">Email / Phone is invalid</span>
      </div>
      <div class="input-field">
        <label for="name">Email / Phone</label>
        <input
          id="name"
          type="text"
          placeholder="Your email or phone"
          v-model.trim="name"
        >
      </div>
      <div v-if="submitted && $v.password.$error">
        <span v-if="!$v.password.required" class="text-red">Password is required</span>
        <span v-else-if="!$v.password.minLength" class="text-red">Password must be at least 8 characters</span>
      </div>
      <div class="input-field">
        <label for="password">Password</label>
        <input
          id="password"
          :type="notEyePassword ? 'password' : 'text'"
          placeholder="Password"
          autocomplete="off"
          v-model.trim="password"
        >
        <i
          :class="[ notEyePassword ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyePassword = !notEyePassword"
        ></i>
      </div>
      <div v-if="submitted && $v.repeatPassword.$error">
        <span v-if="!$v.repeatPassword.required" class="text-red">Confirm password is required</span>
        <span v-else-if="!$v.repeatPassword.sameAs" class="text-red">Confirm password must match with password</span>
      </div>
      <div class="input-field">
        <label for="repeatPassword">Repeat password</label>
        <input
          id="repeatPassword"
          :type="notEyeRepeat ? 'password' : 'text'"
          placeholder="Repeat password"
          autocomplete="new-password"
          v-model.trim="repeatPassword"
        >
        <i
          :class="[ notEyeRepeat ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyeRepeat = !notEyeRepeat"
        ></i>
      </div>
      <div v-if="error===200" class="text-green mb-4">Success: Sign up</div>
      <div v-if="error&&error!==200" class="text-red mb-4">{{ error }}</div>
      <button type="submit" class="btn btn-yellow">Continue</button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'SignUpProfile',
  props: ['error'],
  data: () => ({
    name: '',
    password: '',
    repeatPassword: '',
    notEyePassword: true,
    notEyeRepeat: true,
    submitted: false
  }),
  validations: {
    name: { required, email },
    password: { required, minLength: minLength(8) },
    repeatPassword: { required, sameAsPassword: sameAs('password') }
  },
  methods: {
    submitSignUp () {
      this.submitted = true
      this.$v.$touch()
      // if (this.name !== '' && this.password !== '' && this.repeatPassword !== '') {
      if (this.$v.$invalid) { return }
      this.$emit('submit', {
        name: this.name,
        password: this.password,
        repeatPassword: this.repeatPassword
      })
      // }
    }
  }
}
</script>
