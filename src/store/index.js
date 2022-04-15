import { createStore } from "vuex";

export default createStore({
  state: {
    // showModal: false,
    locales: [
      {
        name: 'en',
        flag: require('@/assets/en.png')
      },
      {
        name: 'ru',
        flag: require('@/assets/ru.png')
      }
    ],
    avatar: {
      path: "/images/avatar.jpg",
      alt: "My face. Black and white",
    },
    myPages: [
      {
        name: "Mr. Miyagi",
        address: "https://mrmiyagisalesmethode.com/",
        tech: "wordpress",
      },
      {
        name: "zuzumaster.ru",
        address: "https://zuzumaster.ru",
        tech: "vue.js",
      },
      {
        name: "sales-brothers.de",
        address: "https://sales-brothers.de",
        tech: "wordpress",
      },
      {
        name: "Remote Helpers",
        address: "https://new.rh-s.com",
        tech: "wordpress",
      },
      {
        name: "Himpost",
        address: "https://himpost.com/",
        tech: "joomla",
      },
      {
        name: "nalivnoy pol (e-shop#1)",
        address: "http://nalivnoy.himpost.com/",
        tech: "vue.js",
      },
      {
        name: "polimochevina (e-shop#2)",
        address: "http://polimochevina.himpost.com/",
        tech: "vue.js",
      },
      {
        name: "kover (e-shop#3)",
        address: "http://kover.himpost.com/",
        tech: "vue.js",
      },
      {
        name: "d4 (e-shop#4)",
        address: "http://d4.himpost.com/",
        tech: "vue.js",
      },
      {
        name: "pedrollo",
        address: "http://pedrollo.services/",
        tech: "HTML/CSS",
      },
    ],
    skills: [
      {
        name: "HTML",
        prof: 100,
      },
      {
        name: "CSS",
        prof: 100,
      },
      {
        name: "JS",
        prof: 90,
      },
      {
        name: "vue.js",
        prof: 80,
      },
      {
        name: "PHP",
        prof: 50,
      },
    ],
    experience: [
      "rh", "himpost", "root"
    ],
  },
  mutations: {
    // setShowModal(state, value) {
    //   state.showModal = value
    // },
    // addSkill(state, skill) {
    //   state.skills.push(skill)
    // },
    // setSkills(state, skills) {
    //   state.skills = skills
    // }
  },
  // actions: {
  //   loadSkills({ commit }) {
  //     fetch('/skills.json')
  //       .then(res => res.json())
  //       .then(data => commit('setSkills', data))
  //   }
  // }
});
