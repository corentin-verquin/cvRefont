<template lang="pug">
  .container    
    .col-container
      .col.col-left
        Card
          h1 Corentin Verquin
          p Développeur web full stack
          img(src="~/assets/img.jpg", alt="image décorative", role="presentation").contact-img
          p.contact
            span.contact-title Mail : 
            | {{model.Email}}
          p.contact
            span.contact-title Tél : 
            | {{model.Tel}}
          p.contact
            span.contact-title Github : 
            a(:href="model.Github") corentin-verquin
        Card.gitHubCalendar-container
          h2.gitHubCalendar-title Contribution Github
          .gitHubCalendar
    
      .col.col-right
        Card
          ul.skill-container
            li(v-for="skill in model.Skills").skill
              font-awesome-icon(:icon="fontIcon(skill.Icon)")
              Progress(:value="skill.Skill")     

          .list-container
            Information(
              :title="model.Experience.Title",
              :icon="model.Experience.Icon",
              :informations="formatForInformation(model.Experience.Info)"
            ).list
            Information(
              :title="model.Education.Title",
              :icon="model.Education.Icon",
              :informations="formatForInformation(model.Education.Info)"
            ).list     
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fetchHome } from '@/controllers/home'
import Card from '../components/card.vue'
import Progress from '../components/progress.vue'
import Information from '../components/information.vue'

declare const GitHubCalendar: any

const formatDate = (date: string) => {
  const d = new Date(date).toLocaleString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })
  return d[0].toUpperCase() + d.slice(1)
}

@Component({
  components: {
    Card,
    Information,
    Progress,
  },
})
export default class Index extends Vue {
  async asyncData({ $graphql }: any) {
    const model = await fetchHome($graphql)
    return {
      model,
    }
  }

  mounted() {
    GitHubCalendar('.gitHubCalendar', 'corentin-verquin', {
      responsive: true,
    })
  }

  fontIcon(icon: any) {
    return (icon.Type === 'solid' ? fas : fab)[icon.Name]
  }

  formatForInformation(info: any) {
    return info.map((i: any) => {
      const deb = formatDate(i.StartDate)
      return {
        title: i.Title,
        date: i.EndDate ? deb + ' - ' + formatDate(i.EndDate) : deb,
        content: i.Description,
      }
    })
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config';

h1 {
  font-size: #{pxtorem(26)}rem;
  margin-bottom: 0.5rem;
}

.contact {
  margin-bottom: 0.7rem;
  &-title {
    font-weight: 700;
  }
  &-img {
    max-width: calc(100% + 3rem);
    margin: 2rem -1.5rem;
    clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);
  }
}

.skill {
  margin-bottom: 1rem;
  max-width: 48%;
  flex: 0 0 48%;
  &-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: var(--color-grey);
    font-size: #{pxtorem(30)}rem;
    margin-bottom: #{pxtorem(50)}rem;
  }
}

@include respond-above('md') {
  .list {
    max-width: 48%;
    flex: 0 0 48%;
    &-container {
      display: flex;
      justify-content: space-between;
    }
  }
}

.col {
  width: 100%;
  padding: 0 0.75rem;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  &-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  @include respond-above('md') {
    margin: 0 auto;
    &-left {
      max-width: 33%;
      flex: 0 0 33%;
    }
    &-right {
      max-width: 66%;
      flex: 0 0 66%;
    }
  }
}
</style>
