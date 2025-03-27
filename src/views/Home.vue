<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Smart Living, Made Simple</h1>
          <p>Upgrade your home with the latest electronics and appliances. High-quality, smart, and efficient solutions for modern living.</p>
          <router-link to="/shop" class="btn">Go to shop</router-link>
        </div>
        <div class="hero-image">
          <img src="https://ext.same-assets.com/3364867358/1443416257.png" alt="Smart Appliances">
        </div>
      </div>
    </div>

    <section class="featured-categories">
      <div class="container">
        <h2 class="section-title">FEATURED CATEGORIES</h2>
        <div class="featured-content">
          <div class="feature-image">
            <img src="https://ext.same-assets.com/3364867358/760706395.jpeg" alt="Air Conditioner">
          </div>
          <div class="feature-info">
            <h3>Advanced AC for Ultimate Comfort</h3>
            <p>Stay cool and energy-efficient with our top-of-the-line Air Conditioners. Designed for powerful cooling, energy savings, and smart control, our AC units ensure year-round comfort while keeping your electricity bills low.</p>
            <ul>
              <li>Fast & Efficient Cooling</li>
              <li>Inverter Technology for Energy Savings</li>
              <li>Smart Features for Easy Control</li>
            </ul>
            <p>Upgrade your space with the best in cooling technology.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="top-products">
      <div class="container">
        <h2 class="section-title">TOP RATED PRODUCTS</h2>
        <div class="product-grid">
          <ProductCard v-for="product in products.slice(0, 4)" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <section class="home-banner">
      <div class="container">
        <div class="banner-content">
          <h2>Upgrade Your Home with Smart & Efficient Appliances</h2>
          <p>Premium Quality | Trusted Brands | Smart Technology</p>
        </div>
      </div>
    </section>

    <section class="about-brief">
      <div class="container">
        <div class="about-content">
          <h2>We have been furnishing your homes for generations</h2>
          <router-link to="/about" class="btn btn-secondary">About us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style scoped>
.hero {
  background-color: #f9f9f9;
  padding: 60px 0;
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-content {
  flex: 1;
  padding-right: 30px;
}

.hero-content h1 {
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
  color: var(--text-color);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.featured-categories {
  padding: 60px 0;
}

.featured-content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.feature-image {
  flex: 1;
}

.feature-image img {
  width: 100%;
  border-radius: 8px;
}

.feature-info {
  flex: 1;
}

.feature-info h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.feature-info p {
  margin-bottom: 15px;
}

.feature-info ul {
  list-style-type: decimal;
  margin-left: 20px;
  margin-bottom: 15px;
}

.feature-info li {
  margin-bottom: 8px;
}

.top-products {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.home-banner {
  background: linear-gradient(rgba(68, 57, 107, 0.85), rgba(68, 57, 107, 0.85)), url('https://ext.same-assets.com/3364867358/294115800.jpg') no-repeat center center;
  background-size: cover;
  padding: 60px 0;
  color: white;
  text-align: center;
}

.banner-content h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.banner-content p {
  font-size: 18px;
}

.about-brief {
  padding: 60px 0;
  text-align: center;
}

.about-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .hero .container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    padding-right: 0;
    margin-bottom: 30px;
  }

  .hero-image {
    justify-content: center;
  }

  .featured-content {
    flex-direction: column;
  }
}
</style>
