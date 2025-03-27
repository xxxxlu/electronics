<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="logo">
          <img src="./assets/images/logo.png" alt="The Electronics Home">
        </router-link>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/about">About us</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="nav-icons">
          <router-link to="/wishlist" class="icon">
            ❤️
            <span class="wishlist-count">{{ wishlistItemCount }}</span>
          </router-link>
          <router-link to="/cart" class="icon">
            <img src="https://theelectronicshome.com/wp-content/uploads/2023/01/befurniturestore2-header-icon2.svg" alt="">
            <span class="cart-count">{{ cartItemCount }}</span>
          </router-link>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <div class="footer-info">
        <img src="./assets/images/logo.png" alt="The Electronics Home" class="footer-logo">
        <div class="payment-box">
          <img class="img-payment" src="./assets/images/easypaisa.png" alt="easypaisa">
          <img class="img-payment" src="./assets/images/Frame 3.png" alt="jazzCash">
        </div>
        <div class="contact-info">
          <div class="phone">+92 320 9972624</div>
          <div class="email">inspireinnosmc@gmail.com</div>
        </div>
      </div>
      <div class="footer-links">
        <router-link to="/terms">Terms and Conditions</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/refund">Refund and Returns Policy</router-link>
        <router-link to="/faqs">FAQS</router-link>
      </div>
      <div class="copyright">
        Copyright © 2025 | Powered by Data Network Solutions
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['cartItemCount', 'wishlistItemCount'])
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Plus Jakarta Sans', 'Roboto', sans-serif;
  color: #4d495e;
  background-color: #faf9f9;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {
  height: 60px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #4d495e;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #ca4542;
}

.nav-icons {
  display: flex;
  gap: 15px;
}

.icon {
  position: relative;
  color: #4d495e;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.wishlist-count,
.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ca4542;
  color: white;
  font-size: 12px;
  font-weight: bold;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  flex: 1;
}

footer {
  background-color: #44396b;
  color: white;
  padding: 40px 30px;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 30px;
}

.footer-logo {
  height: 50px;
}

.payment-box{
  display: flex;
  gap: 20px;
}

.img-payment {
  width: 120px;
  height: 45px;
}

.contact-info {
  line-height: 1.6;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.footer-links a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: #ccc;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 15px;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
  }

  .nav-icons {
    position: absolute;
    right: 30px;
    top: 25px;
  }

  .footer-info {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
