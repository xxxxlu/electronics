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
      },
      {
        id: 7,
        title: 'Samsung Galaxy S23 Ultra 256GB',
        price: 49999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
        category: 'Smartphones',
        brand: 'Samsung',
        description: 'Latest flagship smartphone with 200MP camera and S Pen support.'
      },
      {
        id: 8,
        title: 'Lenovo ThinkPad X1 Carbon',
        price: 45999,
        originalPrice: 48999,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
        category: 'Laptops',
        brand: 'Lenovo',
        description: 'Premium business laptop with 14-inch 4K display and Intel Core i7.'
      },
      {
        id: 9,
        title: 'Samsung 65" Neo QLED 4K TV',
        price: 42999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800',
        category: 'Television',
        brand: 'Samsung',
        description: 'Quantum Matrix Technology with Mini LED for stunning picture quality.'
      },
      {
        id: 10,
        title: 'LG Front Load Washing Machine 9KG',
        price: 28999,
        originalPrice: 32999,
        image: 'https://m.media-amazon.com/images/I/41yXEuRSspL._SX342_SY445_QL70_FMwebp_.jpg',
        category: 'Home Appliances',
        brand: 'LG',
        description: 'Smart washing machine with steam technology and WiFi connectivity.'
      },
      {
        id: 11,
        title: 'Samsung Galaxy Z Fold 5',
        price: 47999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/61LyIe34PVL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Smartphones',
        brand: 'Samsung',
        description: 'Foldable smartphone with large internal display and multitasking capabilities.'
      },
      {
        id: 12,
        title: 'HP Spectre x360',
        price: 44999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800',
        category: 'Laptops',
        brand: 'HP',
        description: 'Premium 2-in-1 laptop with OLED display and Intel Evo platform.'
      },
      {
        id: 13,
        title: 'Sony HT-A7000 Soundbar',
        price: 29999,
        originalPrice: 32999,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800',
        category: 'Audio',
        brand: 'Sony',
        description: '7.1.2ch Dolby Atmos soundbar with wireless subwoofer.'
      },
      {
        id: 14,
        title: 'LG 34" UltraWide Monitor',
        price: 18999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
        category: 'Monitors',
        brand: 'LG',
        description: 'WQHD curved gaming monitor with 144Hz refresh rate.'
      },
      {
        id: 15,
        title: 'Samsung Bespoke Refrigerator',
        price: 45999,
        originalPrice: 49999,
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
        category: 'Home Appliances',
        brand: 'Samsung',
        description: 'Customizable 4-door flex refrigerator with Family Hub.'
      },
      {
        id: 16,
        title: 'Sony 65" 4K Smart LED TV',
        price: 42999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/61VzpOi-geL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        category: 'Television',
        brand: 'Sony',
        description: 'Premium 4K HDR TV with Android TV system.'
      },
      {
        id: 17,
        title: 'LG Front Load Washing Machine 9KG',
        price: 28999,
        originalPrice: 32999,
        image: 'https://www.electrolux.com.hk/globalassets/appliances/washing-machines/ew6s3626bm/ew6s3626bm-fr-1500x1500.png?width=464',
        category: 'Home Appliances',
        brand: 'LG',
        description: 'Smart washing machine with steam technology and WiFi connectivity.'
      },
      {
        id: 18,
        title: 'Dell XPS 13 Plus',
        price: 44999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg',
        category: 'Laptops',
        brand: 'Dell',
        description: '13-inch laptop with InfinityEdge display and 12th Gen Intel processor.'
      },
      {
        id: 19,
        title: 'Xiaomi Robot Vacuum Cleaner Pro',
        price: 12999,
        originalPrice: 14999,
        image: 'https://i02.appmifile.com/989_operator_sg/13/09/2024/0670666db308d7be421d906d84833271.jpg',
        category: 'Smart Home',
        brand: 'Xiaomi',
        description: 'Smart robot vacuum with LIDAR navigation and mopping function.'
      },
      {
        id: 20,
        title: 'Philips Air Fryer XXL',
        price: 8999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/619k6JusdAL._AC_SL1400_.jpg',
        category: 'Kitchen Appliances',
        brand: 'Philips',
        description: 'Large capacity air fryer with digital display and multiple cooking modes.'
      },
      {
        id: 21,
        title: 'Samsung 32" Smart Monitor M8',
        price: 15999,
        originalPrice: 17999,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
        category: 'Monitors',
        brand: 'Samsung',
        description: '4K UHD Smart Monitor with built-in streaming apps and wireless DeX.'
      },
      {
        id: 22,
        title: 'Panasonic 20L Microwave Oven',
        price: 6999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/71uRdJEzvBL._AC_SL1500_.jpg',
        category: 'Kitchen Appliances',
        brand: 'Panasonic',
        description: 'Digital microwave with auto-cook menus and inverter technology.'
      },
      {
        id: 23,
        title: 'Huawei MateBook 14',
        price: 35999,
        originalPrice: 38999,
        image: 'https://m.media-amazon.com/images/I/6131ZgIFn1L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Laptops',
        brand: 'Huawei',
        description: '14-inch 2K touchscreen laptop with 11th Gen Intel processor.'
      },
      {
        id: 24,
        title: 'Sony WH-1000XM5',
        price: 14999,
        originalPrice: 16999,
        image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg',
        category: 'Audio',
        brand: 'Sony',
        description: 'Premium noise cancelling headphones with advanced audio features.'
      },
      {
        id: 25,
        title: 'LG 75" QNED Mini LED TV',
        price: 49999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/51Hd27-a02L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Television',
        brand: 'LG',
        description: 'Premium Mini LED TV with Quantum Dot NanoCell technology.'
      },
      {
        id: 26,
        title: 'Dyson V15 Detect',
        price: 24999,
        originalPrice: 27999,
        image: 'https://m.media-amazon.com/images/I/619XJLzSXJL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Home Appliances',
        brand: 'Dyson',
        description: 'Cordless vacuum with laser dust detection and smart sensing.'
      },
      {
        id: 27,
        title: 'Samsung Galaxy Tab S9 Ultra',
        price: 39999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/51WhESdcLFL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        category: 'Tablets',
        brand: 'Samsung',
        description: '14.6-inch premium tablet with S Pen and DeX support.'
      },
      {
        id: 28,
        title: 'Bose Smart Soundbar 900',
        price: 29999,
        originalPrice: 32999,
        image: 'https://m.media-amazon.com/images/I/61s3PvOHOrL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Audio',
        brand: 'Bose',
        description: 'Premium soundbar with Dolby Atmos and voice control.'
      },
      {
        id: 29,
        title: 'Philips Hue Starter Kit',
        price: 8999,
        originalPrice: 9999,
        image: 'https://m.media-amazon.com/images/I/611T3u6n+eL._AC_SX300_SY300_.jpg',
        category: 'Smart Home',
        brand: 'Philips',
        description: 'Smart lighting kit with bridge and color changing bulbs.'
      },
      {
        id: 30,
        title: 'Canon EOS R6 Mark II',
        price: 47999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/61s5kI0U4cL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Cameras',
        brand: 'Canon',
        description: 'Full-frame mirrorless camera with advanced autofocus system.'
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
    addToCart (state, { product, quantity }) {
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
    removeFromCart (state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    updateCartItemQuantity (state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart (state) {
      state.cart = []
    },
    addToWishlist (state, product) {
      if (!state.wishlist.some(item => item.id === product.id)) {
        state.wishlist.push(product)
      }
    },
    removeFromWishlist (state, productId) {
      state.wishlist = state.wishlist.filter(item => item.id !== productId)
    }
  },
  actions: {
    addToCart ({ commit }, { product, quantity = 1 }) {
      commit('addToCart', { product, quantity })
    },
    removeFromCart ({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    updateCartItemQuantity ({ commit }, { productId, quantity }) {
      commit('updateCartItemQuantity', { productId, quantity })
    },
    clearCart ({ commit }) {
      commit('clearCart')
    },
    addToWishlist ({ commit }, product) {
      commit('addToWishlist', product)
    },
    removeFromWishlist ({ commit }, productId) {
      commit('removeFromWishlist', productId)
    }
  }
})
