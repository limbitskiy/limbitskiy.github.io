<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from "vue-i18n";
import i18n from '@/i18n.js'
// import ContactForm from "@/components/ContactForm.vue";
import SocialIcons from "@/components/SocialIcons.vue";
import LinksList from "@/components/LinksList.vue";
import TheSkills from "@/components/TheSkills.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import TheLocalePicker from "@/components/TheLocalePicker.vue";
import ModeSwitch from '@/components/UI/ModeSwitch.vue';

const store = useStore()

// let cursorColor = 'white'

const { t: translate } = useI18n({
  inheritLocale: true,
  useScope: "global",
})

const changeLocale = (lang) => {
  i18n.global.locale.value = lang;
};

onMounted(() => {
  console.clear()
  console.warn('Нашли ошибку? Напишите мне на gagarinbrood@gmail.com')

  // const canvas = document.querySelector('canvas')
  // const ctx = canvas.getContext('2d')

  // canvas.width = innerWidth
  // canvas.height = innerHeight

  // let mousePosition = {
  //   x: 0,
  //   y: 0
  // }
  // ctx.fillStyle = cursorColor

  // const loop = () => {
  //   requestAnimationFrame(loop)
  //   ctx.fillStyle = 'rgba(0, 0, 0, .1)'
  //   ctx.fillRect(0, 0, innerWidth, innerHeight)
  //   ctx.beginPath()
  //   ctx.fillStyle = 'white'
  //   ctx.arc(mousePosition.x, mousePosition.y, 6, 0, Math.PI * 2)
  //   ctx.fill()
  // }

  // loop()

  // addEventListener('mousemove', (e) => {
  //   mousePosition.x = e.x
  //   mousePosition.y = e.y
  // })
})

</script>

<template>
  <canvas ref="canvas"></canvas>
  <div class="layout-wrap" :class="{
    'light-theme-text': store.state.lightTheme, 'dark-theme-text': store.state.darkTheme,
    '': store.state.lightTheme, 'dark-theme-bg': store.state.darkTheme
  }">
    <div class="layout">
      <aside ref='aside' :class="{ 'light-theme-bg': store.state.lightTheme, '': store.state.darkTheme }">
        <div class="aside-inner">
          <div class="aside-header">
            <TheLocalePicker :languages='store.state.locales' @changeLocale="changeLocale($event)" />
            <ModeSwitch />
          </div>
          <div class="meta">
            <img :src="store.state.avatar.path" :alt="store.state.avatar.alt" />
            <div class="meta-text">
              <p :class="{ 'light-theme-text': store.state.lightTheme, 'dark-theme-text': store.state.darkTheme }">
                {{ translate('meta.keys.name') }}: <span>{{ translate('meta.values.name') }}</span>
              </p>
              <p :class="{ 'light-theme-text': store.state.lightTheme, 'dark-theme-text': store.state.darkTheme }">
                {{ translate('meta.keys.age') }}: <span>35</span>
              </p>
              <p :class="{ 'light-theme-text': store.state.lightTheme, 'dark-theme-text': store.state.darkTheme }">
                {{ translate('meta.keys.country') }}: <span>{{ translate('meta.values.country') }}</span>
              </p>
              <p :class="{ 'light-theme-text': store.state.lightTheme, 'dark-theme-text': store.state.darkTheme }">
                {{ translate('meta.keys.position') }}: <span>{{ translate('meta.values.position') }}</span>
              </p>
            </div>
          </div>
          <!-- <ContactForm /> -->
          <SocialIcons />
        </div>
      </aside>

      <transition name="slide" appear>
        <main>
          <section class="about">
            <div class="section-title">{{ translate('sections.about') }}:</div>
            <div class="section-text">
              {{ translate('about') }}
            </div>
          </section>

          <section class="section">
            <div class="split-two">
              <div>
                <div class="section-title">{{ translate('sections.skills') }}:</div>
                <div class="section-text">
                  <TheSkills :skills="store.state.skills" />
                </div>
              </div>

              <div>
                <div class="section-title">{{ translate('sections.experience') }}:</div>
                <div class="section-text">
                  <WorkExperience :experience="store.state.experience" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="section-title">
              {{ translate('sections.pages') }}:
            </div>
            <div class="section-text">
              <LinksList :links="store.state.myPages" />
            </div>
          </section>
        </main>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
// =====VARIABLES=====

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-feature-settings: "pnum" on, "lnum" on;

  --accent-color: #34779d;

  --black-color: #222222;
  --white-color: #fff;

  --grey-text: #888888;
  // --lightgrey-text: #c7c7c7;

  --light-bg: #f5f5f5;
  --dark-bg: #1a1a1a;

  --font-xsmall: 0.75rem;
  --font-small: 0.875rem;
  --font-big: 1.125rem;
  --font-bigger: 1.25rem;
  --font-big: 1.375rem;

  --font-raleway: "Raleway", sans-serif;
  --font-roboto: "Roboto", sans-serif;

  --border-radius: 8px;

  --box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);

  --zen-padding: calc(100% / 20);
}

// =====GENERAL=====

#app {
  font-family: var(--font-raleway);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--grey-text);
  min-height: 100vh;
  overflow-y: hidden;
}

html {
  // cursor: none;
  scroll-behavior: smooth;
}

a {
  color: var(--grey-text);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
}

p {
  color: var(--grey-text);
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 30px;
}

ul {
  list-style: none;
}

canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #e9e9e9;
}

::-webkit-scrollbar-thumb {
  background: rgb(58, 58, 58);

  &:hover {
    background: rgb(90, 90, 90);
  }
}

// =====UTILITY=====

.layout {
  display: grid;
}

.container {
  padding-inline: 1rem;
}

.text-center {
  text-align: center;
}

.split-two {
  display: grid;
  gap: 2rem;
}

.section {
  padding: 2em 0;
}

.title-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: clamp(2rem, calc(20px + 1vw), 3rem);
  font-weight: 600;
}

.section-subtitle {
  font-size: clamp(1rem, calc(1rem + 1vw), 1.3rem);
  line-height: 30px;
  color: var(--grey-text);
  margin: 0;
}

.only-desktop {
  display: none;
}

.only-mobile {
  display: block;
}

.accent-text {
  color: var(--accent-color);
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  >* {
    width: 100%;
  }
}

.form-btn-group {
  justify-content: space-between;
}

.btn-center {
  justify-content: center;
}

.dark-theme-bg {
  background-color: var(--dark-bg);
}

.light-theme-bg {
  background-color: var(--light-bg);
}

.dark-theme-text {
  color: var(--white-color);
}

.light-theme-text {
  color: var(--black-color);
}

// =====PAGE=====

.layout-wrap {
  transition: background-color .5s;
  width: 100vw;
}

aside {
  background-color: var(light-bg);
  padding: 2rem var(--zen-padding);
  transition: background-color .1s;

  .aside-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    p {
      // color: var(--black-color);
      margin: 0;

      span {
        font-size: initial;
        color: var(--grey-text);
      }
    }
  }

  img {
    align-self: center;
    border-radius: 50%;
    max-width: 8rem;
  }
}

main {
  background-color: var(light-bg);
  padding: 2rem var(--zen-padding);

  .section-title {
    margin-block: 1rem;
    font-weight: 500;
  }

  .about {
    max-width: calc(min(100%, 650px));
    line-height: 150%;
  }
}

.social {
  display: flex;
  justify-content: center;
}

// =====ANIMATIONS======

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}

// =====MEDIA=====

@media (min-width: 768px) {
  .small-window {
    width: fit-content;
  }

  .split-two {
    grid-template-columns: 1fr 2fr;
  }

  .btn-group {
    >* {
      width: min-content;
    }
  }

  .container {
    max-width: 1400px;
    margin-inline: auto;
  }

  .title-box {
    align-items: center;
  }

  .section-subtitle {
    width: 80%;
  }

  .only-desktop {
    display: block;
  }

  .only-mobile {
    display: none;
  }

  .layout {
    grid-template-columns: 1fr 3fr;
    max-width: 1400px;
    margin-inline: auto;
  }

  .section {
    padding: 4em 0;
  }

  main {
    padding: 3rem var(--zen-padding);
  }

  aside {
    padding: 3rem var(--zen-padding);
    min-width: 350px;

    .aside-inner {
      position: fixed;
    }
  }
}
</style>
