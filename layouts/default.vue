<template lang="pug">
  section  
    nav.navbar
      .navbar__switcher
        input(v-model="darkMode", type="checkbox", @change="changeMode()", aria-hidden="true", id="switch")
        label(for="switch", aria-hidden="true")
          span 🌙
          span 🌞
      .navbar__link
        nuxt-link(to="/") Accueil      
        nuxt-link(to="/project") Projets      
    main   
      Nuxt  
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  darkMode: boolean = false

  beforeMount() {
    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  changeMode() {
    document.documentElement.dataset.mode = this.darkMode ? 'dark' : 'light'
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/layout';
@import '../assets/scss/components/navbar';
@import '../assets/scss/components/gitHubCalendar';
</style>
