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
    about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    avatar: {
      path: "/images/avatar.jpg",
      alt: "My face. Black and white",
    },
    myPages: [
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
    ],
    skills: [
      {
        name: "HTML",
        prof: 90,
      },
      {
        name: "CSS",
        prof: 90,
      },
      {
        name: "JS",
        prof: 80,
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
      {
        title: "Remote Helpers",
        years: "2020 - 2021",
        desc: "Working with different companies as a contractor. Mostly creating wep pages from scratch: first designing, then coding in WordPress or Vue.",
      },
      {
        title: "root.ua",
        years: "2017 - 2018",
        desc: "Learning basics about HTML/CSS and taking my first steps towards being a front end dev. Creating my first web-pages was so exiting!",
      },
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
