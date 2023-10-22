<template>
  <div class="mt-auto mb-auto">
    <h3>New password</h3>
    <p class="mt-6">Enter new password</p>
    <form class="mt-8" @submit.prevent="submitNewPassword">
      <div class="input-field">
        <label for="password">Password</label>
        <input
          id="password"
          :type="notEyePassword ? 'password' : 'text'"
          placeholder="Password"
          autocomplete="off"
          required
          v-model.trim="password"
        >
        <i
          :class="[ notEyePassword ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyePassword = !notEyePassword"
        ></i>
      </div>
      <div class="input-field">
        <label for="repeatPassword">Repeat password</label>
        <input
          id="repeatPassword"
          :type="notEyeRepeat ? 'password' : 'text'"
          placeholder="Repeat password"
          autocomplete="new-password"
          required
          v-model.trim="repeatPassword"
        >
        <i
          :class="[ notEyeRepeat ? 'icon-not-eye' : 'icon-eye']"
          @click="notEyeRepeat = !notEyeRepeat"
        ></i>
      </div>
      <button type="submit" class="btn btn-yellow">Save password</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewPassword',
  data: () => ({
    password: '',
    repeatPassword: '',
    notEyePassword: true,
    notEyeRepeat: true
  })
}
</script>
