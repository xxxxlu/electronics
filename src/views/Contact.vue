<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1>Contact</h1>
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <span>Contact</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>Have questions about our products or services? We're here to help!</p>

        <div class="info-items">
          <div class="info-item">
            <h3>Phone</h3>
            <p>+92 320 9972624</p>
          </div>

          <div class="info-item">
            <h3>Email</h3>
            <p>inspireinnosmc@gmail.com</p>
          </div>

          <div class="info-item">
            <h3>Address</h3>
            <p>INSPIREINNO SMC PRIVATE LIMITED<br>Pakistan</p>
          </div>

          <div class="info-item">
            <h3>Working Hours</h3>
            <p>Monday-Friday: 9AM - 5PM<br>Saturday: 10AM - 2PM<br>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div class="contact-content">

        <img class="contact-img" src="https://theelectronicshome.com/wp-content/uploads/2025/03/Illustration3@2x-768x934.jpg" alt="" style="width: 500px; height: 500px">

        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name *</label>
                <input type="text" id="name" v-model="contactForm.name" required>
              </div>

              <div class="form-group">
                <label for="email">Your Email *</label>
                <input type="email" id="email" v-model="contactForm.email" required>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <input type="text" id="subject" v-model="contactForm.subject" required>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" v-model="contactForm.message" rows="6" required/>
            </div>

            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm () {
      // Here we would normally send the form data to a backend
      // For this demo, we'll just show an alert
      alert('Thank you for your message! We will get back to you as soon as possible.')
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: #f9f9f9;
  padding: 40px 0;
}

.page-header h1 {
  font-size: 32px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.contact-content {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
}

.contact-info {
  margin-bottom: 50px;
}

.contact-img,
.contact-form {
  flex: 1;
}

.contact-info h2,
.contact-form h2 {
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.contact-info > p {
  margin-bottom: 30px;
}

.info-items {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}

.info-item h3 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 10px;
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
.form-group textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }

  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .info-items {
    grid-template-columns: 1fr;
  }
}
</style>
