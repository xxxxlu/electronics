<template>
  <div class="wishlist-page">
    <div class="page-header">
      <div class="container">
        <h1>Wishlist</h1>
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <span>Wishlist</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div v-if="wishlist.length === 0" class="empty-wishlist">
        <h2>Your wishlist is empty!</h2>
        <p>Add items to your wishlist by clicking the wishlist button on products.</p>
        <router-link to="/shop" class="btn">Browse Products</router-link>
      </div>

      <div v-else>
        <table class="wishlist-table">
          <thead>
            <tr>
              <th class="product-remove"/>
              <th class="product-thumbnail"/>
              <th class="product-name">Product</th>
              <th class="product-price">Price</th>
              <th class="product-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wishlist" :key="item.id">
              <td class="product-remove">
                <button @click="removeFromWishlist(item.id)" class="remove-btn">×</button>
              </td>
              <td class="product-thumbnail">
                <router-link :to="'/product/' + item.id">
                  <img :src="item.image" :alt="item.title">
                </router-link>
              </td>
              <td class="product-name">
                <router-link :to="'/product/' + item.id">{{ item.title }}</router-link>
              </td>
              <td class="product-price">
                <span v-if="item.originalPrice" class="original-price">Rs.{{ formatPrice(item.originalPrice) }}</span>
                <span>Rs.{{ formatPrice(item.price) }}</span>
              </td>
              <td class="product-actions">
                <button @click="addToCart(item)" class="btn">Add to Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Wishlist',
  computed: {
    ...mapState(['wishlist'])
  },
  methods: {
    formatPrice (price) {
      return price.toLocaleString()
    },
    removeFromWishlist (productId) {
      this.$store.dispatch('removeFromWishlist', productId)
    },
    addToCart (product) {
      this.$store.dispatch('addToCart', { product, quantity: 1 })
      alert('Product added to cart!')
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: #f9f9f9;
  padding: 40px 0;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 32px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.empty-wishlist {
  text-align: center;
  padding: 60px 0;
}

.empty-wishlist h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.empty-wishlist p {
  margin-bottom: 20px;
  color: var(--gray);
}

.wishlist-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
}

.wishlist-table th {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}

.wishlist-table td {
  padding: 20px 12px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}

.product-thumbnail img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.product-name a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

.product-name a:hover {
  color: var(--secondary-color);
}

.original-price {
  text-decoration: line-through;
  color: var(--gray);
  font-size: 14px;
  margin-right: 10px;
}

.remove-btn {
  border: none;
  background: none;
  color: var(--secondary-color);
  font-size: 20px;
  cursor: pointer;
  padding: 0;
}

@media (max-width: 768px) {
  .wishlist-table thead {
    display: none;
  }

  .wishlist-table,
  .wishlist-table tbody,
  .wishlist-table tr,
  .wishlist-table td {
    display: block;
    width: 100%;
  }

  .wishlist-table tr {
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }

  .product-remove {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
  }

  .product-thumbnail {
    text-align: center;
    padding: 20px;
  }

  .product-thumbnail img {
    width: 120px;
    height: 120px;
  }

  .product-name {
    text-align: center;
    font-size: 16px;
  }

  .product-price {
    text-align: center;
    padding: 10px;
  }

  .product-actions {
    text-align: center;
    padding: 20px;
  }

  .product-actions .btn {
    width: 100%;
  }
}
</style>
