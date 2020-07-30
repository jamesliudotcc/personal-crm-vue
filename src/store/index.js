import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    addContact(state, payload) {
      alert('heyo')
      const { name, email } = payload;
      state.contacts.push({ name, email });
    }
  },
  actions: {},
  modules: {}
});
