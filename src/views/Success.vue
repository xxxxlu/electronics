<template>
  <div class="success-page">
    <div class="success-animation">
      <div class="checkmark">
        <div class="check-icon"></div>
      </div>
    </div>

    <h1>Payment Successful!</h1>

    <div class="order-info">
      <h2>Order Information</h2>
      <div class="info-item">
        <span>Name:</span>
        <span>{{ orderDetails.firstName }} {{ orderDetails.lastName }}</span>
      </div>
      <div class="info-item">
        <span>Phone:</span>
        <span>{{ orderDetails.phone }}</span>
      </div>
      <div class="info-item">
        <span>Email:</span>
        <span>{{ orderDetails.email }}</span>
      </div>
      <div class="info-item total">
        <span>Total Amount:</span>
        <span>Rs.{{ orderDetails.total }}</span>
      </div>
    </div>

    <router-link to="/" class="btn">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Success',
  data () {
    return {
      orderDetails: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        total: 0
      }
    }
  },
  created () {
    // 从路由参数获取订单信息
    const orderData = this.$route.params.orderData
    if (orderData) {
      this.orderDetails = orderData
    }
  }
}
</script>

<style scoped>
.success-page {
  text-align: center;
  padding: 60px 20px;
}

.success-animation {
  margin-bottom: 30px;
}

.checkmark {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  background-color: #4CAF50;
  position: relative;
  animation: scale .5s ease-in-out;
}

.check-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(45deg);
  width: 30px;
  height: 60px;
  border-bottom: 8px solid white;
  border-right: 8px solid white;
  transform-origin: center;
  animation: check .8s ease;
}

@keyframes check {
  0% { transform: translate(-50%, -60%) rotate(45deg) scale(0); }
  100% { transform: translate(-50%, -60%) rotate(45deg) scale(1); }
}

@keyframes scale {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}

@keyframes check {
  0% { transform: translate(-50%, -50%) rotate(45deg) scale(0); }
  100% { transform: translate(-50%, -50%) rotate(45deg) scale(1); }
}

.order-info {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.total {
  font-weight: bold;
  font-size: 1.2em;
  color: var(--primary-color);
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
}
</style>
