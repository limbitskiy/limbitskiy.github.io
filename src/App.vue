<script>
import ContactForm from "@/components/ContactForm.vue";
import SocialIcons from "@/components/SocialIcons.vue";
import LinksList from "@/components/LinksList.vue";
import TheSkills from "@/components/TheSkills.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import TheLocalePicker from "@/components/TheLocalePicker.vue";
// import ModalWindow from "@/components/ModalWindow.vue";
// import TheSettings from "@/components/TheSettings.vue";

export default {
  components: {
    ContactForm,
    SocialIcons,
    LinksList,
    TheSkills,
    WorkExperience,
    TheLocalePicker,
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  },
  created() {
    // this.$store.dispatch("loadSkills");
  },
};
</script>

<template>
  <!-- <div class="settings-btn" @click="this.$store.commit('setShowModal', true)">
    <i class="fas fa-cog"></i>
  </div>
  <ModalWindow v-if="this.showModal">
    <TheSettings />
  </ModalWindow> -->
  <div class="layout">
    <aside>
      <TheLocalePicker :languages='this.locales' @changeLocale="changeLocale($event)" />
      <div class="meta">
        <img :src="this.avatar.path" :alt="this.avatar.alt" />
        <div class="meta-text">
          <p>{{ $t('meta.keys.name') }}: <span>{{ $t('meta.values.name') }}</span></p>
          <p>{{ $t('meta.keys.age') }}: <span>35</span></p>
          <p>{{ $t('meta.keys.country') }}: <span>{{ $t('meta.values.country') }}</span></p>
          <p>{{ $t('meta.keys.position') }}: <span>{{ $t('meta.values.position') }}</span></p>
        </div>
      </div>
      <ContactForm />
      <SocialIcons />
    </aside>

    <transition name="slide" appear>
      <main>
        <section class="about">
          <div class="section-title">{{ $t('sections.about') }}:</div>
          <div class="section-text">
            {{ $t('about') }}
          </div>
        </section>

        <section class="section">
          <div class="split-two">
            <div>
              <div class="section-title">{{ $t('sections.skills') }}:</div>
              <div class="section-text">
                <TheSkills :skills="this.skillsList" />
              </div>
            </div>

            <div>
              <div class="section-title">{{ $t('sections.experience') }}:</div>
              <div class="section-text">
                <WorkExperience :experiences="this.experience" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="section-title">
            {{ $t('sections.pages') }}:
          </div>
          <div class="section-text">
            <LinksList :links="this.myPages" />
          </div>
        </section>
      </main>
    </transition>
  </div>
</template>

<style lang="scss">
// =====VARIABLES=====

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-feature-settings: "pnum" on, "lnum" on;

  --accent-color1: #34779d;

  --black-color: #222222;

  --grey-text: #888888;
  --lightgrey-text: #c7c7c7;

  --grey-bg: #ededed;
  --grey-bg-light: #f5f5f5;

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
  background-color: var(--grey-bg-light);
  min-height: 100vh;
  overflow-y: hidden;
}

html {
  scroll-behavior: smooth;
}

a {
  color: var(--grey-text);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color1);
  }
}

p {
  color: var(--grey-text);
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 30px;
}

// ol {
//   margin-left: 3vw;

//   li::marker {
//     font-weight: 700;
//   }
// }

ul {
  list-style: none;
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

// .small-window {
//   background-color: var(--grey-bg);
//   box-shadow: var(--box-shadow);
//   margin-inline: auto;
//   padding: 2rem;
//   width: 100%;
// }

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
  color: var(--accent-color1);
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

// =====PAGE=====

aside {
  background-color: var(--grey-bg);
  background: linear-gradient(0deg,
      rgba(246, 246, 246, 1) 0%,
      rgba(237, 237, 237, 1) 100%);
  padding: 2rem var(--zen-padding);

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      color: var(--black-color);
      margin: 0;

      span {
        font-size: initial;
        color: var(--grey-text);
      }
    }
  }

  img {
    border-radius: 50%;
    max-width: 8rem;
  }
}

main {
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

.settings-btn {
  position: absolute;
  top: 0;
  left: 0;
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

  // .small-container {
  //   max-width: 800px;
  //   margin-inline: auto;
  // }

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
    padding: 4rem var(--zen-padding);
  }

  aside {
    padding: 3rem var(--zen-padding);
  }
}
</style>
