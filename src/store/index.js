import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    users: [],
    isLogged: false,
    username: '',
  },
  mutations: {
    ADD_ARTICLE(state, payload){
      state.articles.push(payload)
      console.log(state.articles)
    },

    ADD_USER(state, payload){
      state.users.push(payload)
      console.log(state.users)
    },

    log(state, boolean) {
      state.isLogged = boolean
    },

    setUsername(state, name) {
      state.username = name
    },
  },
  actions: {
    addArticle(context, payload) {
      context.commit('ADD_ARTICLE', payload)
    },

    addUser(context, payload) {
      context.commit('ADD_USER', payload)
    },
  },
  modules: {
  },
  getters: {
    Article(state) {
      return state.articles
    },

    User(state) {
      return state.users
    },
    IsLogged(state) {
      return state.isLogged
    },
    Username(state) {
      return state.username
    },
  },
})
