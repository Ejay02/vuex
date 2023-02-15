import { createStore } from 'vuex';
import productsModule from '../modules/products';
import cartModule from '../modules/cart';

const store = createStore({
  modules: {
    cart: cartModule,
    prods: productsModule,
  },
  state() {
    return { isLoggedIn: false };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(ctx) {
      ctx.commit('login');
    },
    logout(ctx) {
      ctx.commit('logout');
    },
  },
  getters: {
    isAuth(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
