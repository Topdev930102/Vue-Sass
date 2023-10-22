<template>
  <div class="select"
    :class="{'active': isActive}"
    v-outside="clickOutside"
    @click="isActive = !isActive"
  >
    <div class="select-lable flex items-center cursor-pointer">
      <span class="name mr-2" :class="opacityName">{{ lable }}</span>
      <span v-if="lableTwo" class="name ml-2">{{ lableTwo }}</span>
      <i v-if="!showIcon" class="icon-arrow"></i>
    </div>

    <ul class="options">
      <li
        v-for="(option, idx) in options"
        :key="idx"
        class="options-item cursor-pointer"
        @click="$emit('select', option)"
      >{{ option.name || option }}</li>
    </ul>
  </div>
</template>

<script>
import clickOutsideMixin from '@/mixins/clickOutside.mixin'

export default {
  name: 'CustomSelect',
  mixins: [clickOutsideMixin],
  props: ['options', 'lable', 'lableTwo', 'showIcon', 'opacityName'],
  data: () => ({
    isActive: false
  }),
  methods: {
    clickOutside () {
      this.isActive = false
    }
  }
}
</script>
