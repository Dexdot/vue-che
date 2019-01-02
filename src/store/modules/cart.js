export default {
  state: {
    cartItems: []
  },
  getters: {
    cartItems: state => state.cartItems,
    amount: state => state.cartItems.length,
    total: state => {
      let sum = 0;

      state.cartItems.forEach(({ price }) => (sum += price));

      return sum;
    }
  },
  mutations: {
    addToCart: (state, payload) => state.cartItems.push(payload),
    removeFromCart: (state, id) => {
      state.cartItems.filter(product => product.id !== id);
    },
    clearCart: state => (state.cartItems = [])
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
    }
  }
};
