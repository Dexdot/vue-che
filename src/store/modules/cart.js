export default {
  state: {
    cartItems: []
  },
  getters: {
    cartItems: state => state.cartItems,
    total: state => {
      let sum = 0;

      state.cartItems.forEach(({ price, amount }) => (sum += price * amount));

      return sum;
    }
  },
  mutations: {
    addToCart: (state, payload) => state.cartItems.push(payload),
    removeFromCart: (state, id) => {
      state.cartItems = state.cartItems.filter(product => product.id !== id);
    },
    clearCart: state => (state.cartItems = []),
    setAmount: (state, { id, amount }) => {
      state.cartItems.forEach(product => {
        if (product.id === id) {
          product.amount = amount;
        }
      });
    }
  },
  actions: {
    addToCart({ commit }, { id, name, weight, amount, price }) {
      const product = {
        id,
        name,
        weight,
        amount,
        price
      };

      commit('addToCart', product);
    },
    removeFromCart({ commit }, id) {
      commit('removeFromCart', id);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
    changeProductAmount({ commit }, payload) {
      commit('setAmount', payload);
    }
  }
};
