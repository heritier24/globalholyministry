<template>
  <main>
    <!--? Hero Start -->
    <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap hero-cap2 pt-20 text-center">
                            <h2>Contact US</h2>
                            <p>Get in touch with Global Holy Ministries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->

    <!--? Contact Info Start -->
    <section class="contact-info-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>Get In Touch</span>
                        <h2>We'd Love To Hear From You</h2>
                        <p>Whether you have questions about our services, want to get involved, or need spiritual guidance, we're here for you.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Contact Info 1 -->
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-contact-info text-center mb-50">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-cap">
                            <h5>Church Location</h5>
                            <p>Kigali Rwanda<br>KK 53 Street</p>
                        </div>
                    </div>
                </div>
                <!-- Contact Info 2 -->
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-contact-info text-center mb-50">
                        <div class="contact-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="contact-cap">
                            <h5>Phone Number</h5>
                            <p><a href="tel:+250786084727">+250786 0847 27</a></p>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                </div>
                <!-- Contact Info 3 -->
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-contact-info text-center mb-50">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-cap">
                            <h5>Email Address</h5>
                            <p><a href="mailto:info@globalholyministries.com">info@globalholyministries.com</a></p>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--? Contact Info End -->

    <!--? Contact Form Start -->
    <section class="contact-form-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10 col-md-12">
                    <div class="contact-form-wrapper">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-tittle text-center mb-50">
                                    <h3>Send Us A Message</h3>
                                    <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                        <form class="contact-form" @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label for="name">Your Name *</label>
                                        <input
                                            id="name"
                                            class="form-control"
                                            v-model="form.name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                        >
                                        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label for="email">Email Address *</label>
                                        <input
                                            id="email"
                                            class="form-control"
                                            v-model="form.email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            required
                                        >
                                        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input
                                            id="phone"
                                            class="form-control"
                                            v-model="form.phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                        >
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label for="subject">Subject *</label>
                                        <select
                                            id="subject"
                                            class="form-control"
                                            v-model="form.subject"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="prayer">Prayer Request</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="volunteer">Volunteer</option>
                                            <option value="donation">Donation</option>
                                            <option value="feedback">Feedback</option>
                                        </select>
                                        <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="message">Message *</label>
                                        <textarea
                                            id="message"
                                            class="form-control"
                                            v-model="form.message"
                                            rows="6"
                                            placeholder="Tell us how we can help you..."
                                            required
                                        ></textarea>
                                        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group text-center">
                                        <button type="submit" class="btn primary-btn" :disabled="isSubmitting">
                                            <span v-if="isSubmitting">
                                                <i class="fas fa-spinner fa-spin"></i> Sending...
                                            </span>
                                            <span v-else>
                                                <i class="fas fa-paper-plane"></i> Send Message
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- Success Message -->
                        <div v-if="showSuccess" class="success-message">
                            <i class="fas fa-check-circle"></i>
                            <h4>Message Sent Successfully!</h4>
                            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--? Contact Form End -->

    <!--? Map Section Start -->
    <section class="map-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="map-wrapper">
                        <div class="map-placeholder">
                            <i class="fas fa-map-marked-alt"></i>
                            <h4>Find Us Here</h4>
                            <p>Kigali Rwanda, KK 53 Street</p>
                            <a href="https://maps.google.com" target="_blank" class="btn secondary-btn">
                                <i class="fas fa-directions"></i> Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--? Map Section End -->
  </main>
</template>

<script>
export default {
  name: 'ContactView',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    validateForm () {
      this.errors = {}

      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      }

      if (!this.form.subject) {
        this.errors.subject = 'Please select a subject'
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
      }

      return Object.keys(this.errors).length === 0
    },

    isValidEmail (email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },

    async handleSubmit () {
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }

        this.showSuccess = true

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false
        }, 5000)
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('There was an error sending your message. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* Contact Info Section */
.single-contact-info {
  background: #fff;
  border-radius: 8px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.single-contact-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.contact-icon i {
  font-size: 24px;
  color: white;
}

.contact-cap h5 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2c3e50;
}

.contact-cap p {
  color: #6c757d;
  margin: 0;
  line-height: 1.5;
}

.contact-cap a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.contact-cap a:hover {
  color: #764ba2;
}

/* Contact Form Section */
.contact-form-wrapper {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2c3e50;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

.primary-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.primary-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.success-message {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-top: 30px;
}

.success-message i {
  font-size: 48px;
  color: #28a745;
  margin-bottom: 15px;
}

.success-message h4 {
  color: #155724;
  margin-bottom: 10px;
}

.success-message p {
  color: #155724;
  margin: 0;
}

/* Map Section */
.map-wrapper {
  height: 400px;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
}

.map-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.map-placeholder i {
  font-size: 64px;
  color: #667eea;
  margin-bottom: 20px;
}

.map-placeholder h4 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.map-placeholder p {
  color: #6c757d;
  margin-bottom: 20px;
}

.secondary-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.secondary-btn:hover {
  background: #5a6268;
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-form-wrapper {
    padding: 25px;
  }

  .map-wrapper {
    height: 300px;
  }
}
</style>
