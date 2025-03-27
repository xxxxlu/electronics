<template>
  <div class="cart-page">
    <div class="page-header">
      <div class="container">
        <h1>Cart</h1>
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <span>Cart</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="cart-steps">
        <div class="step active">
          <span class="step-number">1</span>
          <span class="step-title">Cart</span>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <span class="step-title">Checkout</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-title">Order</span>
        </div>
      </div>

      <div v-if="cart.length === 0" class="empty-cart">
        <h2>Your cart is currently empty!</h2>
        <p>Add some products to your cart to continue shopping.</p>
        <router-link to="/shop" class="btn">Return to shop</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <table class="cart-table">
            <thead>
              <tr>
                <th class="product-thumbnail"/>
                <th class="product-name">Product</th>
                <th class="product-price">Price</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-subtotal">Subtotal</th>
                <th class="product-remove"/>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id" class="cart-item">
                <td class="product-thumbnail">
                  <router-link :to="'/product/' + item.id">
                    <img :src="item.image" :alt="item.title">
                  </router-link>
                </td>
                <td class="product-name">
                  <router-link :to="'/product/' + item.id">{{ item.title }}</router-link>
                </td>
                <td class="product-price">Rs.{{ formatPrice(item.price) }}</td>
                <td class="product-quantity">
                  <div class="quantity-control">
                    <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
                    <input
                      type="number"
                      min="1"
                      :value="item.quantity"
                      @input="updateQuantity(item.id, $event.target.value)"
                    >
                    <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
                  </div>
                </td>
                <td class="product-subtotal">Rs.{{ formatPrice(item.price * item.quantity) }}</td>
                <td class="product-remove">
                  <button @click="removeFromCart(item.id)" class="remove-btn">×</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cart-actions">
          <div class="cart-coupon">
            <input type="text" placeholder="Coupon code" class="coupon-input" >
            <button class="btn apply-coupon">Apply coupon</button>
          </div>
          <button @click="clearCart" class="btn btn-secondary clear-cart">Clear cart</button>
        </div>

        <div class="cart-totals">
          <h2>Cart totals</h2>
          <table class="totals-table">
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>Rs.{{ formatPrice(cartTotalPrice) }}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>Flat rate: Rs.1,000.00</td>
              </tr>
              <tr class="total-row">
                <th>Total</th>
                <td>Rs.{{ formatPrice(cartTotalPrice + 1000) }}</td>
              </tr>
            </tbody>
          </table>
          <router-link to="/checkout" class="btn checkout-btn">Proceed to checkout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  methods: {
    formatPrice (price) {
      return price.toLocaleString()
    },
    increaseQuantity (productId) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        this.$store.dispatch('updateCartItemQuantity', {
          productId,
          quantity: item.quantity + 1
        })
      }
    },
    decreaseQuantity (productId) {
      const item = this.cart.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        this.$store.dispatch('updateCartItemQuantity', {
          productId,
          quantity: item.quantity - 1
        })
      }
    },
    updateQuantity (productId, quantity) {
      quantity = parseInt(quantity)
      if (quantity >= 1) {
        this.$store.dispatch('updateCartItemQuantity', {
          productId,
          quantity
        })
      }
    },
    removeFromCart (productId) {
      this.$store.dispatch('removeFromCart', productId)
    },
    clearCart () {
      if (confirm('Are you sure you want to remove all items from your cart?')) {
        this.$store.dispatch('clearCart')
      }
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
  width: 100%;
}

.step {
  display: flex;
  align-items: center;
  color: var(--gray);
  width: 200px;
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

.empty-cart {
  text-align: center;
  padding: 60px 0;
}

.empty-cart h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.empty-cart p {
  margin-bottom: 20px;
  color: var(--gray);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.cart-table th {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}

.cart-table td {
  padding: 12px;
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

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  width: 120px;
}

.quantity-btn {
  background-color: #f5f5f5;
  border: none;
  width: 30px;
  height: 36px;
  font-size: 16px;
  cursor: pointer;
}

.quantity-control input {
  width: 60px;
  height: 36px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.remove-btn {
  border: none;
  background: none;
  color: var(--secondary-color);
  font-size: 20px;
  cursor: pointer;
  padding: 0;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.cart-coupon {
  display: flex;
  gap: 10px;
}

.coupon-input {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.cart-totals {
  width: 50%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-totals h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.totals-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.totals-table th,
.totals-table td {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.totals-table th {
  font-weight: 500;
  text-align: left;
}

.totals-table td {
  text-align: right;
}

.total-row th,
.total-row td {
  font-weight: 700;
  font-size: 18px;
  color: var(--primary-color);
}

.checkout-btn {
  width: 40%;
  padding: 12px;
  font-size: 16px;
  text-align: center;
}

@media (max-width: 768px) {
  .cart-table thead {
    display: none;
  }

  .cart-table,
  .cart-table tbody,
  .cart-table tr,
  .cart-table td {
    display: block;
    width: 100%;
  }

  .cart-table tr {
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
  }

  .cart-table td {
    position: relative;
    padding-left: 120px;
  }

  .cart-table td::before {
    content: attr(data-title);
    position: absolute;
    left: 12px;
    width: 100px;
    font-weight: 600;
  }

  .cart-actions {
    flex-direction: column;
    gap: 15px;
  }

  .cart-coupon {
    width: 100%;
  }

  .coupon-input {
    flex: 1;
  }

  .product-thumbnail {
    text-align: center;
    padding: 20px 12px !important;
  }

  .product-thumbnail::before {
    display: none;
  }

  .product-thumbnail img {
    width: 120px;
    height: 120px;
  }
}
</style>
