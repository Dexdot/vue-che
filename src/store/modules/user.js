import * as firebase from 'firebase';
export default {
  state: {
    user: null
  },
  getters: {
    user: state => state.user,
    isUserLoggedIn: state => state.user !== null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async registerUser({ commit }, { name, email, password }) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        await user.updateProfile({
          displayName: name
        });

        commit('setUser', {
          id: user.uid,
          name: user.displayName,
          email: user.email
        });
        commit('setLoading', false);
      } catch (err) {
        commit('setLoading', false);
        commit('setError', err.message);
        throw err;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        commit('setUser', {
          id: user.uid,
          name: user.displayName,
          email: user.email
        });
        commit('setLoading', false);
      } catch (err) {
        commit('setLoading', false);
        commit('setError', err.message);
        throw err;
      }
    },
    async logOut({ commit }) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await firebase.auth().signOut();

        commit('setUser', null);
        commit('setLoading', false);
      } catch (err) {
        commit('setLoading', false);
        commit('setError', err.message);
        throw err;
      }
    },
    autoLoginUser({ commit }, user) {
      commit('setUser', {
        id: user.uid,
        name: user.displayName,
        email: user.email
      });
    }
  }
};
