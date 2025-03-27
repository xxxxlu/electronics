<template>
  <div class="product-detail" v-if="product">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/shop">Shop</router-link>
          <span class="separator">›</span>
          <span>{{ product.title }}</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="product-content">
        <div class="product-gallery">
          <div class="main-image">
            <img :src="product.image" :alt="product.title">
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-title">{{ product.title }}</h1>

          <div class="product-price">
            <span v-if="product.originalPrice" class="original-price">Rs.{{ formatPrice(product.originalPrice) }}</span>
            <span class="current-price">Rs.{{ formatPrice(product.price) }}</span>
          </div>

          <div class="product-meta">
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>Brand:</strong> {{ product.brand }}</p>
          </div>

          <div class="product-description">
            <p>{{ product.description }}</p>
          </div>

          <div class="product-actions">
            <div class="quantity-control">
              <button @click="decreaseQuantity" class="quantity-btn">-</button>
              <input type="number" min="1" v-model.number="quantity">
              <button @click="increaseQuantity" class="quantity-btn">+</button>
            </div>
            <button @click="addToCart" class="btn add-to-cart">Add to cart</button>
            <button @click="addToWishlist" class="btn btn-secondary add-to-wishlist">Add to wishlist</button>
          </div>
        </div>
      </div>

      <div class="product-tabs">
        <div class="tab-header">
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'description' }"
            @click="activeTab = 'description'"
          >
            Description
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'reviews' }"
            @click="activeTab = 'reviews'"
          >
            Reviews
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'description'" class="tab-pane">
            <p>{{ product.description }}</p>
            <p>Features:</p>
            <ul>
              <li>Energy efficient design</li>
              <li>Smart temperature control</li>
              <li>Low noise operation</li>
              <li>Easy to install and maintain</li>
            </ul>
          </div>

          <div v-if="activeTab === 'reviews'" class="tab-pane">
            <p>There are no reviews yet.</p>

            <div class="review-form">
              <h3>Be the first to review "{{ product.title }}"</h3>
              <div class="form-group">
                <label for="review-name">Name*</label>
                <input type="text" id="review-name" v-model="reviewForm.name">
              </div>
              <div class="form-group">
                <label for="review-email">Email*</label>
                <input type="email" id="review-email" v-model="reviewForm.email">
              </div>
              <div class="form-group">
                <label>Your rating*</label>
                <div class="rating">
                  <button
                    v-for="i in 5"
                    :key="i"
                    @click="reviewForm.rating = i"
                    :class="{ active: reviewForm.rating >= i }"
                  >
                    {{ i }} of 5 stars
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label for="review-text">Your review*</label>
                <textarea id="review-text" v-model="reviewForm.text" rows="5"/>
              </div>
              <button class="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div class="related-products" v-if="relatedProducts.length > 0">
        <h2 class="section-title">Related products</h2>
        <div class="product-grid">
          <ProductCard v-for="product in relatedProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <p>Product not found.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductDetail',
  components: {
    ProductCard
  },
  data () {
    return {
      quantity: 1,
      activeTab: 'description',
      reviewForm: {
        name: '',
        email: '',
        rating: 0,
        text: ''
      }
    }
  },
  computed: {
    ...mapState(['products']),
    product () {
      const productId = parseInt(this.$route.params.id)
      return this.products.find(p => p.id === productId) || null
    },
    relatedProducts () {
      if (!this.product) return []

      return this.products
        .filter(p => p.category === this.product.category && p.id !== this.product.id)
        .slice(0, 3)
    }
  },
  methods: {
    formatPrice (price) {
      return price.toLocaleString()
    },
    increaseQuantity () {
      this.quantity++
    },
    decreaseQuantity () {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart () {
      this.$store.dispatch('addToCart', {
        product: this.product,
        quantity: this.quantity
      })
      alert('Product added to cart!')
    },
    addToWishlist () {
      this.$store.dispatch('addToWishlist', this.product)
      alert('Product added to wishlist!')
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: #f9f9f9;
  padding: 20px 0;
  margin-bottom: 40px;
}

.product-content {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
}

.product-gallery {
  flex: 1;
}

.main-image {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.main-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.product-price {
  font-size: 24px;
  margin-bottom: 20px;
}

.original-price {
  text-decoration: line-through;
  color: var(--gray);
  font-size: 18px;
  margin-right: 10px;
}

.current-price {
  color: var(--secondary-color);
  font-weight: 700;
}

.product-meta {
  margin-bottom: 20px;
  line-height: 1.8;
}

.product-description {
  margin-bottom: 30px;
}

.product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-btn {
  background-color: #f5f5f5;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
}

.quantity-control input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.add-to-cart {
  flex: 1;
  min-width: 150px;
}

.add-to-wishlist {
  padding: 10px 15px;
}

.product-tabs {
  margin-bottom: 60px;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.tab-btn {
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  margin-right: 15px;
  font-weight: 600;
  cursor: pointer;
  color: var(--gray);
  transition: all 0.3s;
}

.tab-btn.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.tab-pane {
  line-height: 1.8;
}

.tab-pane ul {
  margin-left: 20px;
  margin-top: 10px;
}

.tab-pane li {
  margin-bottom: 8px;
}

.review-form {
  margin-top: 30px;
  max-width: 600px;
}

.review-form h3 {
  margin-bottom: 20px;
  font-size: 18px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.rating {
  display: flex;
  gap: 10px;
}

.rating button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray);
}

.rating button.active {
  color: #f8b84e;
}

.related-products {
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .product-content {
    flex-direction: column;
  }

  .product-actions {
    flex-direction: column;
  }

  .add-to-cart,
  .add-to-wishlist {
    width: 100%;
  }
}
</style>
