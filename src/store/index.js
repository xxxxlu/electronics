import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'GREE 1.5 TON FAIRY SERIES INVERTER SPLIT AC Model GS-18FITH7G',
        price: 204900,
        originalPrice: 215700,
        image: 'https://ext.same-assets.com/3364867358/3392281548.jpeg',
        category: 'Air Conditioner',
        brand: 'Gree',
        description: 'GREE 1.5 TON FAIRY SERIES INVERTER SPLIT AC with energy saving technology.'
      },
      {
        id: 2,
        title: 'GREE 1.5 TON INVERTER SPLIT AC Model GS-18FITH6S',
        price: 201999,
        originalPrice: null,
        image: 'https://theelectronicshome.com/wp-content/uploads/2025/03/UntitledProject-2024-05-15T133605.701.webp',
        category: 'Air Conditioner',
        brand: 'Gree',
        description: 'GREE 1.5 TON INVERTER SPLIT AC with modern design and efficient cooling.'
      },
      {
        id: 3,
        title: 'GREE 2.0 TON FAIRY ECONO INVERTER AC Model GS-24FITH7G',
        price: 320000,
        originalPrice: null,
        image: 'https://ext.same-assets.com/3364867358/1401459743.jpeg',
        category: 'Air Conditioner',
        brand: 'Gree',
        description: 'GREE 2.0 TON FAIRY ECONO INVERTER AC for larger rooms with power saving technology.'
      },
      {
        id: 4,
        title: 'TCL 2.0 TON INVERTER SPLIT AC Model TAC-24T5-SMART-S',
        price: 215000,
        originalPrice: null,
        image: 'https://ext.same-assets.com/3364867358/2938659421.png',
        category: 'Air Conditioner',
        brand: 'TCL',
        description: 'TCL 2.0 TON INVERTER SPLIT AC with smart features and enhanced cooling.'
      },
      {
        id: 5,
        title: 'Haier 1.5 Ton T3 Inverter AC Model HSU-20HFTEX OW',
        price: 172999,
        originalPrice: null,
        image: 'https://ext.same-assets.com/3364867358/3517188300.jpeg',
        category: 'Air Conditioner',
        brand: 'Haier',
        description: 'Haier 1.5 Ton T3 Inverter AC with advanced cooling technology and energy efficiency.'
      },
      {
        id: 6,
        title: 'HAIER 1.5 TON TRIPLE INVERTER SPLIT AC Model HSU-18HFCS W',
        price: 134000,
        originalPrice: null,
        image: 'https://theelectronicshome.com/wp-content/uploads/2025/03/HAIER-1.5-TON-T3-THUNDER-INVERTER-AC-Model-HSU-18HFTCD-W-2-800x800.jpg',
        category: 'Air Conditioner',
        brand: 'Haier',
        description: 'HAIER 1.5 TON TRIPLE INVERTER SPLIT AC for efficient cooling with advanced features.'
      }
    ],
    cart: [],
    wishlist: []
  },
  getters: {
    cartItemCount: state => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
    cartTotalPrice: state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    wishlistItemCount: state => {
      return state.wishlist.length
    }
  },
  mutations: {
    addToCart(state, { product, quantity }) {
      const existingItem = state.cart.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.cart.push({
          ...product,
          quantity
        })
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart(state) {
      state.cart = []
    },
    addToWishlist(state, product) {
      if (!state.wishlist.some(item => item.id === product.id)) {
        state.wishlist.push(product)
      }
    },
    removeFromWishlist(state, productId) {
      state.wishlist = state.wishlist.filter(item => item.id !== productId)
    }
  },
  actions: {
    addToCart({ commit }, { product, quantity = 1 }) {
      commit('addToCart', { product, quantity })
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    updateCartItemQuantity({ commit }, { productId, quantity }) {
      commit('updateCartItemQuantity', { productId, quantity })
    },
    clearCart({ commit }) {
      commit('clearCart')
    },
    addToWishlist({ commit }, product) {
      commit('addToWishlist', product)
    },
    removeFromWishlist({ commit }, productId) {
      commit('removeFromWishlist', productId)
    }
  }
})
