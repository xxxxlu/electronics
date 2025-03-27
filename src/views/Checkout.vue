<template>
  <div class="checkout-page">
    <div class="page-header">
      <div class="container">
        <h1>Checkout</h1>
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/cart">Cart</router-link>
          <span class="separator">›</span>
          <span>Checkout</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="cart-steps">
        <div class="step">
          <span class="step-number">1</span>
          <span class="step-title">Cart</span>
        </div>
        <div class="step active">
          <span class="step-number">2</span>
          <span class="step-title">Checkout</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-title">Order</span>
        </div>
      </div>

      <div v-if="cart.length === 0" class="empty-checkout">
        <h2>Your cart is empty!</h2>
        <p>Add some products to your cart before proceeding to checkout.</p>
        <router-link to="/shop" class="btn">Return to shop</router-link>
      </div>

      <div v-else class="checkout-content">
        <div class="checkout-form">
          <h2>Billing Details</h2>
          <form @submit.prevent="placeOrder">
            <div class="form-row">
              <div class="form-group">
                <label for="first-name">First name *</label>
                <input
                  type="text"
                  id="first-name"
                  v-model="billingDetails.firstName"
                  required
                >
              </div>
              <div class="form-group">
                <label for="last-name">Last name *</label>
                <input
                  type="text"
                  id="last-name"
                  v-model="billingDetails.lastName"
                  required
                >
              </div>
            </div>

            <div class="form-group">
              <label for="company">Company name (optional)</label>
              <input
                type="text"
                id="company"
                v-model="billingDetails.company"
              >
            </div>

            <div class="form-group">
              <label for="country">Country / Region *</label>
              <select
                id="country"
                v-model="billingDetails.country"
                required
              >
                <option value="">Select a country / region</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="street">Street address *</label>
              <input
                type="text"
                id="street"
                v-model="billingDetails.street"
                placeholder="House number and street name"
                required
              >
            </div>

            <div class="form-group">
              <label for="city">Town / City *</label>
              <input
                type="text"
                id="city"
                v-model="billingDetails.city"
                required
              >
            </div>

            <div class="form-group">
              <label for="state">State *</label>
              <input
                type="text"
                id="state"
                v-model="billingDetails.state"
                required
              >
            </div>

            <div class="form-group">
              <label for="zip">ZIP / Postal code *</label>
              <input
                type="text"
                id="zip"
                v-model="billingDetails.zip"
                required
              >
            </div>

            <div class="form-group">
              <label for="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                v-model="billingDetails.phone"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">Email address *</label>
              <input
                type="email"
                id="email"
                v-model="billingDetails.email"
                required
              >
            </div>

            <div class="form-group">
              <label for="notes">Order notes (optional)</label>
              <textarea
                id="notes"
                v-model="billingDetails.notes"
                placeholder="Notes about your order, e.g. special delivery instructions"
                rows="4"
              />
            </div>
          </form>
        </div>

        <div class="order-summary">
          <h2>Your Order</h2>
          <div class="order-details">
            <div class="order-header">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div class="order-items">
              <div v-for="item in cart" :key="item.id" class="order-item">
                <div class="order-product">
                  {{ item.title }} <strong>× {{ item.quantity }}</strong>
                </div>
                <div class="order-price">
                  Rs.{{ formatPrice(item.price * item.quantity) }}
                </div>
              </div>
            </div>

            <div class="order-subtotal">
              <span>Subtotal</span>
              <span>Rs.{{ formatPrice(cartTotalPrice) }}</span>
            </div>

            <div class="order-shipping">
              <span>Shipping</span>
              <span>Rs.1,000.00</span>
            </div>

            <div class="order-total">
              <span>Total</span>
              <span>Rs.{{ formatPrice(cartTotalPrice + 1000) }}</span>
            </div>
          </div>

          <div class="payment-methods">
            <h3>Payment Methods</h3>
            <div class="payment-options">
              <div class="payment-option">
                <input
                  type="radio"
                  id="cod"
                  value="cod"
                  v-model="paymentMethod"
                >
                <label for="bank-transfer">
                  <img src="../assets/images/Frame 3.png" alt="jazzCash" style="width: 120px;height: 70px;">
                </label>
              </div>

              <div class="payment-option">
                <input
                  type="radio"
                  id="bank-transfer"
                  value="bank-transfer"
                  v-model="paymentMethod"
                >
                <label for="bank-transfer">
                  <img src="../assets/images/easypaisa.png" alt="easypaisa" style="width: 120px;height: 70px;">
                </label>
              </div>
            </div>
          </div>

          <div class="terms-agreement">
            <input
              type="checkbox"
              id="terms"
              v-model="termsAgreed"
            >
            <label for="terms">I have read and agree to the website <router-link to="/terms">terms and conditions</router-link> *</label>
          </div>

          <button
            @click="placeOrder"
            class="btn place-order-btn"
            :disabled="!termsAgreed || !paymentMethod"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Checkout',
  data () {
    return {
      billingDetails: {
        firstName: '',
        lastName: '',
        company: '',
        country: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        notes: ''
      },
      paymentMethod: 'cod',
      termsAgreed: false
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  methods: {
    formatPrice (price) {
      return price.toLocaleString()
    },
    placeOrder () {
      if (!this.termsAgreed || !this.paymentMethod) {
        alert('Please agree to the terms and select a payment method.')
        return
      }

      if (this.cart.length === 0) {
        alert('Your cart is empty. Please add some products before placing an order.')
        return
      }

      // Here you would normally send the order to your backend
      // For this demo, we'll just clear the cart and show an order confirmation
      this.$store.dispatch('clearCart')
      this.$router.push('/loading')
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

.cart-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.step {
  display: flex;
  align-items: center;
  color: var(--gray);
}

.step .active {
  color: var(--primary-color);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #eee;
  margin-right: 10px;
  font-weight: 700;
}

.step.active .step-number {
  background-color: var(--primary-color);
  color: white;
}

.empty-checkout {
  text-align: center;
  padding: 60px 0;
}

.empty-checkout h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.empty-checkout p {
  margin-bottom: 20px;
  color: var(--gray);
}

.checkout-content {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
}

.checkout-form {
  flex: 2;
}

.checkout-form h2,
.order-summary h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: var(--primary-color);
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-group select {
  height: 42px;
}

.order-summary {
  flex: 1;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
}

.order-details {
  margin-bottom: 30px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
}

.order-items {
  margin: 20px 0;
}

.order-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.order-product {
  flex: 2;
}

.order-price {
  flex: 1;
  text-align: right;
}

.order-subtotal,
.order-shipping,
.order-total {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #ddd;
}

.order-total {
  font-weight: 700;
  font-size: 18px;
  color: var(--primary-color);
}

.payment-methods {
  margin-bottom: 30px;
}

.payment-methods h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.payment-option {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.payment-option label {
  margin-left: 30px;
}

.terms-agreement {
  margin-bottom: 20px;
}

.terms-agreement label {
  margin-left: 10px;
}

.terms-agreement a {
  color: var(--secondary-color);
  text-decoration: none;
}

.place-order-btn {
  width: 100%;
  padding: 12px;
  font-size: 16px;
}

.place-order-btn:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .checkout-content {
    flex-direction: column;
  }

  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>
