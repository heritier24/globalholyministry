<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

@Options({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
/* Global Responsive Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Container Responsive */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Section Padding Responsive */
.section-padding30 {
  padding: 60px 0;
}

.section-padding2 {
  padding: 40px 0;
}

/* Hero Section Responsive */
.slider-area2 {
  position: relative;
  overflow: hidden;
}

.slider-height2 {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive Typography */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

h5 {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Button Responsive */
.btn, .button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px; /* Touch-friendly */
}

.btn:hover, .button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Form Responsive */
.form-control {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-height: 44px; /* Touch-friendly */
}

.form-group {
  margin-bottom: 1.5rem;
}

/* Card Responsive */
.single-cat, .single-team, .single-contact-info {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Image Responsive */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Tablet Devices */
@media (max-width: 992px) {
  .container {
    padding: 0 20px;
  }

  .section-padding30 {
    padding: 50px 0;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .slider-height2 {
    min-height: 350px;
  }
}

/* Mobile Devices */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .section-padding30 {
    padding: 40px 0;
  }

  .section-padding2 {
    padding: 30px 0;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 0.95rem;
  }

  .slider-height2 {
    min-height: 300px;
  }

  .btn, .button {
    padding: 10px 20px;
    font-size: 0.85rem;
  }

  .form-control {
    padding: 10px 12px;
    font-size: 0.95rem;
  }

  .single-cat, .single-team, .single-contact-info {
    padding: 15px;
    margin-bottom: 15px;
  }
}

/* Small Mobile Devices */
@media (max-width: 576px) {
  .container {
    padding: 0 10px;
  }

  .section-padding30 {
    padding: 30px 0;
  }

  .section-padding2 {
    padding: 20px 0;
  }

  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  .slider-height2 {
    min-height: 250px;
  }

  .btn, .button {
    padding: 8px 16px;
    font-size: 0.8rem;
    width: 100%;
    margin-bottom: 10px;
  }

  .form-control {
    padding: 8px 12px;
    font-size: 0.9rem;
  }

  .single-cat, .single-team, .single-contact-info {
    padding: 12px;
    margin-bottom: 12px;
  }

  /* Stack columns on small screens */
  .row {
    margin: 0;
  }

  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6,
  .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12,
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6,
  .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12,
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6,
  .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12,
  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6,
  .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {
    width: 100%;
    padding: 0 5px;
    margin-bottom: 15px;
  }
}

/* Extra Small Mobile Devices */
@media (max-width: 400px) {
  .section-padding30 {
    padding: 20px 0;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  .slider-height2 {
    min-height: 200px;
  }

  .hero-cap h2 {
    font-size: 1.5rem;
  }

  .hero-cap p {
    font-size: 0.9rem;
  }
}

/* Landscape Orientation */
@media (max-width: 768px) and (orientation: landscape) {
  .slider-height2 {
    min-height: 200px;
  }
}

/* High DPI Displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Ensure images look sharp on retina displays */
  img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Print Styles */
@media print {
  .btn, .button, .slider-area2 {
    display: none;
  }

  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}
</style>
