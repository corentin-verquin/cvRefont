<template lang="pug">
  ul.information

    li.information__title-container
      .information__title-icon 
        font-awesome-icon(:icon="fontIcon")
      h2.information__title {{title}}
      
    li.information__item(v-for="info in informations")
      h3.information__item-title {{info.title}}
      p.information__item-date {{info.date}}
      .information__item-content
        Markdown(:content="info.content")
</template>

<script lang="ts">
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Markdown from './markdown.vue'

@Component({
  components: { Markdown },
})
export default class Information extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: Array, required: true }) readonly informations!: Array<string>
  @Prop({ type: Object, required: true }) readonly icon!: {
    Name: string
    Type: string
  }

  get fontIcon() {
    const i: any = this.icon
    return (i.Type === 'solid' ? fas : fab)[i.Name]
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/components/information';
</style>
