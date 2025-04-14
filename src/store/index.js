import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Vivo Y16 Smartphone with Funtouch OS With Extended RAM & 5000mAh Battery',
        price: 27000,
        originalPrice: 33999,
        image: 'https://m.media-amazon.com/images/I/71xeGOi3x1L._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Smartphones',
        brand: 'Vivo',
        description: 'Vivo Y16 smartphone with 4GB RAM, 64GB storage, 5000mAh battery, and Funtouch OS. Features extended RAM capabilities for smooth performance.'
      },
      {
        id: 2,
        title: 'Samsung Galaxy A04 - 4GB RAM/64GB ROM - PTA Approved - Official Warranty',
        price: 25999,
        originalPrice: 28000,
        image: 'https://m.media-amazon.com/images/I/41JCOXAbXLL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Smartphones',
        brand: 'Samsung',
        description: 'Samsung Galaxy A04 with 4GB RAM, 64GB ROM, PTA approved with official warranty. Entry-level smartphone with decent performance and camera quality.'
      },
      {
        id: 3,
        title: 'Oppo A78 4G - 8GB RAM + 128GB ROM - 50MP AI Camera - 5000 mAh Battery',
        price: 37250,
        originalPrice: 39999,
        image: 'https://m.media-amazon.com/images/I/41XhbtQzMDL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Smartphones',
        brand: 'Oppo',
        description: 'Oppo A78 4G with 8GB RAM, 128GB storage, 50MP AI camera system and 5000mAh battery. Features fast charging and smooth performance.'
      },
      {
        id: 4,
        title: 'Motorola Moto G84 5G - 12GB RAM + 256GB ROM - Qualcomm Snapdragon 695',
        price: 49999,
        originalPrice: 52000,
        image: 'https://m.media-amazon.com/images/I/71-5T7v0DpL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Smartphones',
        brand: 'Motorola',
        description: 'Motorola Moto G84 with 5G connectivity, 12GB RAM, 256GB storage, and Snapdragon 695 processor for high performance gaming and multitasking.'
      },
      {
        id: 5,
        title: 'TECNO POVA Neo - 6GB RAM + 128GB Storage - 6.8 Inch HD+ Display',
        price: 24799,
        originalPrice: 29999,
        image: 'https://m.media-amazon.com/images/I/71n8IDca2DL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Smartphones',
        brand: 'TECNO',
        description: 'TECNO POVA Neo features 6GB RAM, 128GB storage, large 6.8-inch HD+ display, and powerful battery for gaming and all-day use.'
      },
      {
        id: 6,
        title: 'Tea Whitener - NESTLE EVERYDAY Powder 850g Pouch - Original',
        price: 1535,
        originalPrice: 1700,
        image: 'https://ext.same-assets.com/1848607939/1119421179.webp',
        category: 'Groceries',
        brand: 'NESTLE',
        description: 'Nestle Everyday tea whitener powder in 850g pouch. Original flavor for perfect tea experience.'
      },
      {
        id: 7,
        title: 'Lipton Earl Gray 25 Tea Bags | Flavored Black Tea',
        price: 500,
        originalPrice: 500,
        image: 'https://ext.same-assets.com/1848607939/2299514595.webp',
        category: 'Groceries',
        brand: 'Lipton',
        description: 'Lipton Earl Gray flavored black tea, pack of 25 tea bags. Premium quality for a distinctive bergamot flavor.'
      },
      {
        id: 8,
        title: 'Stylish Shoulder Bags for Girls | Trendy Leather Handbags & Crossbody Bags',
        price: 538,
        originalPrice: 1999,
        image: 'https://ext.same-assets.com/1848607939/4124846349.webp',
        category: 'Bags',
        brand: 'Generic',
        description: 'Stylish shoulder bags for women. Trendy leather handbags and crossbody designs, perfect for casual outings with unique designs.'
      },
      {
        id: 9,
        title: 'Lux Allure Bar Fresh Splash - 128G',
        price: 139,
        originalPrice: 150,
        image: 'https://ext.same-assets.com/1848607939/673408830.webp',
        category: 'Bath & Body',
        brand: 'Lux',
        description: 'Lux Allure Bar Fresh Splash soap, 128g. Refreshing fragrance for daily use.'
      },
      {
        id: 10,
        title: 'Pack Of 3 Sewing Chalk Dressmakers Tailor Chalk',
        price: 130,
        originalPrice: 150,
        image: 'https://m.media-amazon.com/images/I/71AlD9mXjrL._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Sewing Supplies',
        brand: 'Generic',
        description: 'Pack of 3 sewing chalk pieces for dressmakers. Essential tailor chalk for fabric marking.'
      },
      {
        id: 11,
        title: 'Stitched Flower Printed 2pc Dress for Woman and Young Girls',
        price: 899,
        originalPrice: 1200,
        image: 'https://ext.same-assets.com/2240791270/976692096.avif',
        category: "Women's Clothing",
        brand: 'Generic',
        description: 'Stitched flower printed 2-piece dress for women. Unique elegant trendy outfit with premium quality kameez shalwar design.'
      },
      {
        id: 12,
        title: 'Dzyne Leaf Print Batiste Lawn 2pc Dress For Women',
        price: 825,
        originalPrice: 999,
        image: 'https://ext.same-assets.com/2240791270/1480733516.avif',
        category: "Women's Clothing",
        brand: 'Dzyne',
        description: 'Dzyne leaf print batiste lawn 2-piece dress for women. Stylish summer wear with comfortable fabric.'
      },
      {
        id: 13,
        title: "Fatima Garment's Cotton Long Maxi 2 Piece Dress for Girls",
        price: 799,
        originalPrice: 999,
        image: 'https://ext.same-assets.com/2240791270/1876381362.avif',
        category: "Women's Clothing",
        brand: 'Fatima Garment',
        description: 'Cotton long maxi 2-piece dress for girls. Comfortable and stylish for everyday wear with traditional design.'
      },
      {
        id: 14,
        title: '2 Piece Fabric Romma Cotton Dress for Women',
        price: 599,
        originalPrice: 799,
        image: 'https://ext.same-assets.com/2240791270/3452347351.avif',
        category: "Women's Clothing",
        brand: 'Generic',
        description: '2-piece romma cotton dress for women. Stylish and comfortable, perfect for any occasion with breathable fabric.'
      },
      {
        id: 15,
        title: 'Roma Cotton Long Maxi 2-Piece Winter Dress',
        price: 799,
        originalPrice: 1099,
        image: 'https://ext.same-assets.com/2240791270/3437310302.avif',
        category: "Women's Clothing",
        brand: 'Generic',
        description: 'Roma cotton long maxi 2-piece winter dress. Warm, comfortable fabric for cold season with elegant design.'
      },
      {
        id: 16,
        title: 'Smart Watch M4 Fitness Tracker Blood Pressure Heart Rate Monitor',
        price: 699,
        originalPrice: 1299,
        image: 'https://m.media-amazon.com/images/I/61FuyGR4c6L._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Wearable Technology',
        brand: 'Generic',
        description: 'M4 Smart Watch fitness tracker with blood pressure and heart rate monitoring. Features water resistance and multiple sport modes.'
      },
      {
        id: 17,
        title: 'Bluetooth Speaker Portable Wireless Mini Speaker with Enhanced Bass',
        price: 499,
        originalPrice: 899,
        image: 'https://m.media-amazon.com/images/I/61WZ-ZuU3oL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Audio',
        brand: 'Generic',
        description: 'Portable wireless mini Bluetooth speaker with enhanced bass, rechargeable battery and built-in microphone for calls.'
      },
      {
        id: 18,
        title: 'Wireless Earbuds Bluetooth 5.0 Touch Control with Charging Case',
        price: 899,
        originalPrice: 1499,
        image: 'https://m.media-amazon.com/images/I/41exMD-GkcL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Audio',
        brand: 'Generic',
        description: 'Wireless earbuds with Bluetooth 5.0, touch control and charging case. Features noise cancellation and long battery life.'
      },
      {
        id: 19,
        title: 'Power Bank 20000mAh Fast Charging with Dual USB Ports',
        price: 1299,
        originalPrice: 1999,
        image: 'https://m.media-amazon.com/images/I/51o27YG-iTL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Mobile Accessories',
        brand: 'Generic',
        description: '20000mAh power bank with fast charging capability and dual USB ports. Compatible with most smartphones and tablets.'
      },
      {
        id: 20,
        title: 'Electric Kettle Stainless Steel 1.8L Auto Shut-Off',
        price: 1299,
        originalPrice: 1999,
        image: 'https://m.media-amazon.com/images/I/81Igmra8QXL._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Kitchen Appliances',
        brand: 'Generic',
        description: '1.8L stainless steel electric kettle with auto shut-off feature. Fast boiling with concealed heating element.'
      },
      {
        id: 21,
        title: 'Premium Hand Blender Stick 300W with Multiple Attachments',
        price: 1499,
        originalPrice: 2299,
        image: 'https://m.media-amazon.com/images/I/71tIz-pTe0L._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Kitchen Appliances',
        brand: 'Generic',
        description: '300W premium hand blender with multiple attachments for blending, chopping and whisking. Ergonomic design for comfortable use.'
      },
      {
        id: 22,
        title: 'Stainless Steel Water Bottle 750ml Vacuum Insulated',
        price: 799,
        originalPrice: 1299,
        image: 'https://m.media-amazon.com/images/I/51l3IgdGd8L._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Kitchen & Dining',
        brand: 'Generic',
        description: '750ml stainless steel water bottle with vacuum insulation. Keeps beverages hot or cold for hours with leak-proof design.'
      },
      {
        id: 23,
        title: "Men's Cotton Casual T-Shirt Pack of 3 - Assorted Colors",
        price: 999,
        originalPrice: 1499,
        image: 'https://m.media-amazon.com/images/I/71ueRA6JRFL._AC_UL640_FMwebp_QL65_.jpg',
        category: "Men's Clothing",
        brand: 'Generic',
        description: "Pack of 3 men's casual cotton t-shirts in assorted colors. Comfortable fabric for everyday wear."
      },
      {
        id: 24,
        title: 'Digital Bathroom Scale with LCD Display - Tempered Glass',
        price: 799,
        originalPrice: 1299,
        image: 'https://m.media-amazon.com/images/I/61JTy23V47L._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Health & Beauty',
        brand: 'Generic',
        description: 'Digital bathroom scale with LCD display and tempered glass surface. Accurate weight measurement with auto-calibration.'
      },
      {
        id: 25,
        title: 'Hair Dryer Professional 2000W with Cool Shot Button',
        price: 1199,
        originalPrice: 1799,
        image: 'https://m.media-amazon.com/images/I/71wa-b0EqDL._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Beauty Tools',
        brand: 'Generic',
        description: 'Professional 2000W hair dryer with cool shot button. Multiple heat and speed settings for versatile styling.'
      },
      {
        id: 26,
        title: 'LED Table Lamp with Flexible Neck and 3 Brightness Levels',
        price: 899,
        originalPrice: 1299,
        image: 'https://m.media-amazon.com/images/I/41xocQ6ojdL._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Home & Lifestyle',
        brand: 'Generic',
        description: 'LED table lamp with flexible neck and 3 brightness levels. Energy-efficient with eye-care technology for reading and working.'
      },
      {
        id: 27,
        title: 'Badminton Racket Set with 3 Shuttlecocks - Aluminum Frame',
        price: 1299,
        originalPrice: 1899,
        image: 'https://m.media-amazon.com/images/I/71BW+cbxtLL._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Sports & Outdoor',
        brand: 'Generic',
        description: 'Badminton racket set with 3 shuttlecocks. Lightweight aluminum frame with durable nylon strings for recreational play.'
      },
      {
        id: 28,
        title: 'Yoga Mat Non-Slip 6mm Thick with Carrying Strap',
        price: 899,
        originalPrice: 1499,
        image: 'https://m.media-amazon.com/images/I/61KZlPKYscL._AC_UL640_FMwebp_QL65_.jpg',
        category: 'Sports & Outdoor',
        brand: 'Generic',
        description: '6mm thick non-slip yoga mat with carrying strap. Eco-friendly material with excellent cushioning for comfortable practice.'
      },
      {
        id: 29,
        title: 'Car Phone Holder Dashboard Mount 360° Rotation',
        price: 499,
        originalPrice: 899,
        image: 'https://m.media-amazon.com/images/I/61r0UWAWY9L._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Automotive',
        brand: 'Generic',
        description: 'Car phone holder with dashboard mount and 360° rotation. Universal compatibility with strong adhesive base for stability.'
      },
      {
        id: 30,
        title: 'Wireless Mouse Ergonomic Design with Adjustable DPI',
        price: 699,
        originalPrice: 1199,
        image: 'https://m.media-amazon.com/images/I/61aBUvuPtPL._AC_UY436_FMwebp_QL65_.jpg',
        category: 'Computer Accessories',
        brand: 'Generic',
        description: 'Ergonomic wireless mouse with adjustable DPI settings. Comfortable design for reduced hand strain with long battery life.'
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
