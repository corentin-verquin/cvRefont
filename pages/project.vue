<template lang="pug">
  .container
    .project__container
      .project(v-for="project in model")
        .project__link
          a(:href="project.Link", title="lien vers le dêpot github", target="_blanck") 
           font-awesome-icon(:icon="faGithub")
        .project__image
          img(:src="getSource(project.Image)", :alt="project.Title", role="presentation")
        .project__title {{project.Title}}
        .project__description
          Markdown(:content="project.Description")
        .project__techno
          .project__techno--item(v-for="tech in project.Technos")
            img(:src="getSource(tech.Logo)", alt="logo", aria-hidden="true")
            span {{tech.Name}}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { fetchProject } from '@/controllers/project'
import Markdown from '@/components/markdown.vue'

@Component({
  components: {
    Markdown,
  },
})
export default class Project extends Vue {
  async asyncData({ $graphql }: any) {
    const model = await fetchProject($graphql)
    return {
      model,
    }
  }

  get faGithub() {
    return faGithub
  }

  getSource(src: string) {
    return process.env.apiRoute + src
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config';

.project {
  flex: 0 0 75%;
  padding: 1rem;
  margin: 0 0.5rem;
  background-color: var(--card-background);

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  box-sizing: content-box;
  border: 2px solid var(--color-grey-30);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @include respond-above('md') {
    flex: 0 0 calc(33% - 0.8rem);
    margin: 0 0.5rem 1.5rem 0.5rem !important;
    box-sizing: border-box;
  }

  &__container {
    display: flex;
    overflow-x: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 0 !important;
    }

    margin: 0 1rem;

    @include respond-above('md') {
      flex-wrap: wrap;
      padding: auto;
    }
  }

  &__image {
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 100%;
      padding-top: (9 / 16) * 100%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: #{pxtorem(20)}rem;
    font-weight: 700;
    margin: 1rem 0 0.5rem;
  }

  &__description {
    font-size: #{pxtorem(16)}rem;
    color: var(--color-grey);
  }

  &__link {
    position: absolute;
    top: -35px;
    left: 0;
    background-color: var(--primary-color);
    font-size: #{pxtorem(20)}rem;
    z-index: 1;
    padding: 0.5rem;
    transform: rotateZ(45deg);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #{color('color-white')};
      transform: rotateZ(-45deg);
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        height: 64px;
        width: 64px;
      }
    }
  }

  &__techno {
    display: flex;
    flex-wrap: wrap;
    margin-top: auto;

    &--item {
      display: flex;
      align-items: center;
      border: 1px solid var(--color-grey-30);
      border-radius: 20px;
      padding: 0.3rem 0.7rem;
      margin-top: 1rem;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
      img {
        max-width: 18px;
        margin-right: 0.7rem;
      }
      span {
        font-size: #{pxtorem(14)}rem;
        color: var(--color-grey);
      }
    }
  }
}
</style>
