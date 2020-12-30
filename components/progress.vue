<template lang="pug">
  .progress__container(@mouseover="hover()",@mouseleave="leave()")
    .progress__wrapper
      span.progress(:style="getWidth",:data-value="value", :class="{ hover: isHover }")
</template>
>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Progress extends Vue {
  @Prop({ type: Number, required: true }) readonly value!: number

  isHover: boolean = false

  get getWidth() {
    return `width: ${this.value}%`
  }

  hover() {
    this.isHover = true
  }

  leave() {
    this.isHover = false
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/components/progress';
</style>
