<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>About us</h1>
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <span>About us</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img src="https://theelectronicshome.com/wp-content/uploads/2023/02/befurniturestore2-about-pic1.webp" alt="The Electronics Home">
        </div>
        <div class="about-text">
          <h2>The Electronics Home</h2>
          <p>We have been furnishing homes with quality electronics and appliances for generations. The Electronics Home is a project of INSPIREINNO SMC PRIVATE LIMITED.</p>
          <p>At The Electronics Home, we believe in providing smart living solutions that make your life simpler and more comfortable. Our range of products includes air conditioners, refrigerators, washing machines, and other home appliances from trusted brands.</p>
          <h3>Our Mission</h3>
          <p>To provide high-quality, energy-efficient, and innovative electronic appliances that enhance the quality of life for our customers.</p>
          <h3>Our Vision</h3>
          <p>To be the leading provider of home electronics and appliances, recognized for our commitment to quality, customer satisfaction, and technological innovation.</p>
        </div>
      </div>

      <div class="why-choose-us">
        <h2>Why Choose Us</h2>
        <div class="features">
          <div class="feature">
            <h3>Quality Products</h3>
            <p>We offer only the highest quality products from trusted brands that are built to last.</p>
          </div>
          <div class="feature">
            <h3>Expert Advice</h3>
            <p>Our team of experts is always ready to help you find the perfect appliance for your needs.</p>
          </div>
          <div class="feature">
            <h3>After-Sales Service</h3>
            <p>We provide excellent after-sales service to ensure your appliances continue to perform at their best.</p>
          </div>
          <div class="feature">
            <h3>Competitive Pricing</h3>
            <p>We offer competitive prices on all our products without compromising on quality.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About'
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

.about-content {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 8px;
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 28px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.about-text h3 {
  font-size: 20px;
  color: var(--primary-color);
  margin: 30px 0 15px;
}

.about-text p {
  margin-bottom: 15px;
  line-height: 1.8;
}

.why-choose-us {
  margin-bottom: 60px;
}

.why-choose-us h2 {
  font-size: 28px;
  color: var(--primary-color);
  margin-bottom: 30px;
  text-align: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.feature {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.feature p {
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
}
</style>
