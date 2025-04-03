import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'GREE 1.5 TON FAIRY SERIES INVERTER SPLIT AC Model GS-18FITH7G',
        price: 41570,
        originalPrice: 42900,
        image: 'https://ext.same-assets.com/3364867358/3392281548.jpeg',
        category: 'Air Conditioner',
        brand: 'Gree',
        description: 'GREE 1.5 TON FAIRY SERIES INVERTER SPLIT AC with energy saving technology.'
      },
      {
        id: 2,
        title: 'GREE 1.5 TON INVERTER SPLIT AC Model GS-18FITH6S',
        price: 41999,
        originalPrice: null,
        image: 'https://theelectronicshome.com/wp-content/uploads/2025/03/UntitledProject-2024-05-15T133605.701.webp',
        category: 'Air Conditioner',
        brand: 'Gree',
        description: 'GREE 1.5 TON INVERTER SPLIT AC with modern design and efficient cooling.'
      },
      {
        id: 3,
        title: 'GREE 2.0 TON FAIRY ECONO INVERTER AC Model GS-24FITH7G',
        price: 39000,
        originalPrice: null,
        image: 'https://ext.same-assets.com/3364867358/1401459743.jpeg',
        category: 'Air Conditioner',
        brand: 'Gree',
        description: 'GREE 2.0 TON FAIRY ECONO INVERTER AC for larger rooms with power saving technology.'
      },
      {
        id: 4,
        title: 'TCL 2.0 TON INVERTER SPLIT AC Model TAC-24T5-SMART-S',
        price: 41500,
        originalPrice: null,
        image: 'https://ext.same-assets.com/3364867358/2938659421.png',
        category: 'Air Conditioner',
        brand: 'TCL',
        description: 'TCL 2.0 TON INVERTER SPLIT AC with smart features and enhanced cooling.'
      },
      {
        id: 5,
        title: 'Haier 1.5 Ton T3 Inverter AC Model HSU-20HFTEX OW',
        price: 41729,
        originalPrice: null,
        image: 'https://ext.same-assets.com/3364867358/3517188300.jpeg',
        category: 'Air Conditioner',
        brand: 'Haier',
        description: 'Haier 1.5 Ton T3 Inverter AC with advanced cooling technology and energy efficiency.'
      },
      {
        id: 6,
        title: 'HAIER 1.5 TON TRIPLE INVERTER SPLIT AC Model HSU-18HFCS W',
        price: 39400,
        originalPrice: null,
        image: 'https://theelectronicshome.com/wp-content/uploads/2025/03/HAIER-1.5-TON-T3-THUNDER-INVERTER-AC-Model-HSU-18HFTCD-W-2-800x800.jpg',
        category: 'Air Conditioner',
        brand: 'Haier',
        description: 'HAIER 1.5 TON TRIPLE INVERTER SPLIT AC for efficient cooling with advanced features.'
      },
      {
        id: 7,
        title: 'Samsung Galaxy S23 256GB',
        price: 42999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
        category: 'Smartphones',
        brand: 'Samsung',
        description: 'Latest flagship smartphone with 200MP camera and S Pen support.'
      },
      {
        id: 8,
        title: 'Lenovo ThinkPad',
        price: 49999,
        originalPrice: 55999,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
        category: 'Laptops',
        brand: 'Lenovo',
        description: 'Premium business laptop with 14-inch 4K display and Intel Core i7.'
      },
      {
        id: 9,
        title: 'Samsung 65" Neo QLED 4K DU7 TV',
        price: 42551,
        originalPrice: 52098,
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800',
        category: 'Television',
        brand: 'Samsung',
        description: 'Quantum Matrix Technology with Mini LED for stunning picture quality.'
      },
      {
        id: 10,
        title: 'LG Front Load Washing Machine 9KG',
        price: 32999,
        originalPrice: 28999,
        image: 'https://m.media-amazon.com/images/I/41yXEuRSspL._SX342_SY445_QL70_FMwebp_.jpg',
        category: 'Home Appliances',
        brand: 'LG',
        description: 'Smart washing machine with steam technology and WiFi connectivity.'
      },
      {
        id: 11,
        title: 'Samsung Galaxy Z Fold 5',
        price: 49999,
        originalPrice: 57999,
        image: 'https://m.media-amazon.com/images/I/61LyIe34PVL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Smartphones',
        brand: 'Samsung',
        description: 'Foldable smartphone with large internal display and multitasking capabilities.'
      },
      {
        id: 12,
        title: 'HP Env',
        price: 46090,
        originalPrice: 49131,
        image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800',
        category: 'Laptops',
        brand: 'HP',
        description: '16" Ultra XGA (1920 x 1200) Touchscreen, AMD Ryzen 5 8640HS - 8GB RAM, 512GB PCIe SSD, 5MP Infrared Camera, Windows 11, with Stylus (8GB RAM | 512GB PCIe SSD + STYLUS).'
      },
      {
        id: 13,
        title: 'Sony HT-A5000 Soundbar',
        price: 23780,
        originalPrice: 35600,
        image: 'https://m.media-amazon.com/images/I/51zlblfsmPL._AC_SL1500_.jpg',
        category: 'Audio',
        brand: 'Sony',
        description: '7.1.2ch Dolby Atmos soundbar with wireless subwoofer.'
      },
      {
        id: 14,
        title: 'LG 34" UltraWide Monitor',
        price: 18029.21,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/81GrL4IJNjL._AC_SL1500_.jpg',
        category: 'Monitors',
        brand: 'LG',
        description: 'WQHD curved gaming monitor with 144Hz refresh rate.'
      },
      {
        id: 15,
        title: 'Samsung Bespoke',
        price: 33751,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/61DfkwdGwsL._AC_SL1500_.jpg',
        category: 'Home Appliances',
        brand: 'Samsung',
        description: 'Cordless Vacuum Cleaner with Cleaning Station Powerful Multi-Surface Floor Cleaning Suitable for Carpet, Hardwood and Tile 5-layer Filter Lightweight VS20A9580VB/AA,2023 Midnight Blue'
      },
      {
        id: 16,
        title: 'Sony 65" 4K Smart LED TV',
        price: 49989,
        originalPrice: 59642,
        image: 'https://m.media-amazon.com/images/I/61VzpOi-geL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        category: 'Television',
        brand: 'Sony',
        description: 'Premium 4K HDR TV with Android TV system.'
      },
      {
        id: 17,
        title: 'LG Front Load Washing Machine',
        price: 48880,
        originalPrice: 59999,
        image: 'https://www.electrolux.com.hk/globalassets/appliances/washing-machines/ew6s3626bm/ew6s3626bm-fr-1500x1500.png?width=464',
        category: 'Home Appliances',
        brand: 'LG',
        description: 'Smart washing machine with steam technology and WiFi connectivity.'
      },
      {
        id: 18,
        title: 'Dell Inspiron 5640',
        price: 38451,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/71mvuxtuUwL._AC_SL1500_.jpg',
        category: 'Laptops',
        brand: 'Dell',
        description: '16" 16:10 FHD+ (1920 x 1200) Display, Intel Core 7-150U Processor, 16GB DDR5 RAM, 1TB SSD, Intel Graphics, Windows 11 Pro, Onsite and Migration Services - Midnight Blue'
      },
      {
        id: 19,
        title: 'eufy L60 Robot Vacuum Cleaner',
        price: 21842,
        originalPrice: 28990,
        image: 'https://i02.appmifile.com/989_operator_sg/13/09/2024/0670666db308d7be421d906d84833271.jpg',
        category: 'Smart Home',
        brand: 'eufy',
        description: ', comes with self-emptying station, hair detangling technology, up to 60 days of hands-free cleaning, 5,000 Pa suction power, removes hair, dust'
      },
      {
        id: 20,
        title: 'Philips Air Fryer XXL',
        price: 7590,
        originalPrice: 8999,
        image: 'https://m.media-amazon.com/images/I/619k6JusdAL._AC_SL1400_.jpg',
        category: 'Kitchen Appliances',
        brand: 'Philips',
        description: 'Large capacity air fryer with digital display and multiple cooking modes.'
      },
      {
        id: 21,
        title: 'Samsung 32" Smart Monitor M8',
        price: 42893,
        originalPrice: 60559,
        image: 'https://m.media-amazon.com/images/I/71Cqqs9ibaL._AC_SL1500_.jpg',
        category: 'Monitors',
        brand: 'Samsung',
        description: '4K UHD Smart Monitor with built-in streaming apps and wireless DeX.'
      },
      {
        id: 22,
        title: 'Panasonic 20L Microwave Oven',
        price: 18794,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/71uRdJEzvBL._AC_SL1500_.jpg',
        category: 'Kitchen Appliances',
        brand: 'Panasonic',
        description: 'Digital microwave with auto-cook menus and inverter technology.'
      },
      {
        id: 23,
        title: 'Lenovo IdeaPad',
        price: 35999,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/71AoYY9cY2L._AC_SL1500_.jpg',
        category: 'Laptops',
        brand: 'Lenovo',
        description: '15.6-inch FHD anti-glare display, AMD Ryzen 5 7520U (4 cores), 16GB LPDDR5 RAM, 1TB SSD, Wi-Fi 6, Microsoft Office 365 (30-day trial), Windows 11 S, Abyss Blue, EAT mouse accessories'
      },
      {
        id: 24,
        title: 'Sony WH-1000XM5',
        price: 34007,
        originalPrice: null,
        image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg',
        category: 'Audio',
        brand: 'Sony',
        description: 'Premium noise cancelling headphones with advanced audio features.'
      },
      {
        id: 25,
        title: 'LG 75" QNED Mini LED TV',
        price: 49500,
        originalPrice: 51267,
        image: 'https://m.media-amazon.com/images/I/51Hd27-a02L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Television',
        brand: 'LG',
        description: 'Premium Mini LED TV with Quantum Dot NanoCell technology.'
      },
      {
        id: 26,
        title: 'Dyson V15 Detect',
        price: 14525,
        originalPrice: 19651.96,
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
        price: 35886,
        originalPrice: 51267.35,
        image: 'https://m.media-amazon.com/images/I/61s3PvOHOrL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        category: 'Audio',
        brand: 'Bose',
        description: 'Premium soundbar with Dolby Atmos and voice control.'
      },
      {
        id: 29,
        title: 'Philips Hue Starter Kit',
        price: 9480,
        originalPrice: 11107.25,
        image: 'https://m.media-amazon.com/images/I/611T3u6n+eL._AC_SX300_SY300_.jpg',
        category: 'Smart Home',
        brand: 'Philips',
        description: 'Smart lighting kit with bridge and color changing bulbs.'
      },
      {
        id: 30,
        title: 'Canon EOS R50',
        price: 49999,
        originalPrice: 60000,
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
