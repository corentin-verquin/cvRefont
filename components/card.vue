<template lang="pug">
  .card
    .card__content
      slot
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config';
@import '../assets/scss/components/card.scss';
</style>
