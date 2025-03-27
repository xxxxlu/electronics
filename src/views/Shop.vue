<template>
  <div class="shop">
    <div class="page-header">
      <div class="container">
        <h1>Shop</h1>
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <span>Shop</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="shop-tools">
        <div class="filter-options">
          <label for="category">Category:</label>
          <select id="category" v-model="selectedCategory">
            <option value="">All Categories</option>
            <option value="Air Conditioner">Air Conditioner</option>
          </select>

          <label for="brand">Brand:</label>
          <select id="brand" v-model="selectedBrand">
            <option value="">All Brands</option>
            <option value="Gree">Gree</option>
            <option value="Haier">Haier</option>
            <option value="TCL">TCL</option>
          </select>

          <label for="sort">Sort By:</label>
          <select id="sort" v-model="sortBy">
            <option value="default">Default sorting</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div class="product-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Shop',
  components: {
    ProductCard
  },
  data() {
    return {
      selectedCategory: '',
      selectedBrand: '',
      sortBy: 'default'
    }
  },
  computed: {
    ...mapState(['products']),
    filteredProducts() {
      let result = [...this.products]

      // Filter by category
      if (this.selectedCategory) {
        result = result.filter(product => product.category === this.selectedCategory)
      }

      // Filter by brand
      if (this.selectedBrand) {
        result = result.filter(product => product.brand === this.selectedBrand)
      }

      // Sort products
      if (this.sortBy === 'price_low') {
        result.sort((a, b) => a.price - b.price)
      } else if (this.sortBy === 'price_high') {
        result.sort((a, b) => b.price - a.price)
      }

      return result
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

.shop-tools {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-options {
  display: flex;
  gap: 20px;
  align-items: center;
}

.filter-options label {
  margin-right: 5px;
  font-weight: 500;
}

.filter-options select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
}

@media (max-width: 768px) {
  .shop-tools {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .filter-options {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .filter-options select {
    width: 100%;
  }
}
</style>
