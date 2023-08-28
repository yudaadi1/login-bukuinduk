import { createStore } from 'vuex';

export default createStore({
  state: {
    schools: ['Sekolah A', 'Sekolah B', 'Sekolah C'],
    selectedSchool: '',
    loginData: {
      Nis: '',
      password: ''
    },
    loggedIn: false,
    isSidebarExpanded: true, // New state for sidebar
  },
  mutations: {
    setSelectedSchool(state, school) {
      state.selectedSchool = school;
    },
    setNis(state, nis) {
      state.loginData.Nis = nis;
    },
    setPassword(state, password) {
      state.loginData.password = password;
    },
    setLoggedIn(state, status) {
      state.loggedIn = status;
    },
    toggleSidebar(state) {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
  },
  actions: {
    async login({ commit, state }) {
      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
      
      const { Nis, password } = state.loginData; // Destructure Nis and password
      
      if (state.selectedSchool && Nis && password === '12345') {
        commit('setLoggedIn', true);
      }
    },
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
    isSidebarExpanded(state) {
      return state.isSidebarExpanded;
    },
  }
});
