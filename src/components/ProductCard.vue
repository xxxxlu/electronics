<template>
  <div class="product-card">
    <router-link :to="'/product/' + product.id">
      <img :src="product.image" :alt="product.title" class="product-image">
    </router-link>
    <div class="product-info">
      <h3 class="product-title">
        <router-link :to="'/product/' + product.id">{{ product.title }}</router-link>
      </h3>
      <div class="product-price">
        <span v-if="product.originalPrice" class="original-price">Rs.{{ formatPrice(product.originalPrice) }}</span>
        <span>Rs.{{ formatPrice(product.price) }}</span>
      </div>
      <button class="btn add-to-cart" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice (price) {
      return price.toLocaleString()
    },
    addToCart () {
      alert('Product added to cart!')
      this.$store.dispatch('addToCart', { product: this.product, quantity: 1 })
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  width: 100%;
  object-fit: contain;
  background-color: #f7f7f7;
  padding: 10px;
}

.product-info {
  padding: 15px;
}

.product-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
  height: 50px;
  overflow: hidden;
}

.product-title a {
  color: inherit;
  text-decoration: none;
}

.product-title a:hover {
  color: var(--secondary-color);
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.product-price .original-price {
  text-decoration: line-through;
  color: var(--gray);
  font-size: 14px;
  margin-right: 10px;
}

.add-to-cart {
  width: 100%;
}
</style>
