<template>
  <div class="markown-container" v-html="$md.render(content)"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Markdown extends Vue {
  @Prop({ type: String, required: true }) readonly content!: string
}
</script>

<style lang="scss">
@import '../assets/scss/components/markdown';
</style>
