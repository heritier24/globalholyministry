<template>
  <footer>
    <div class="footer-wrapper section-bg2" data-background="assets/img/gallery/footer_bg.png">
        <!-- Footer Top-->
        <div class="footer-area footer-padding">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="single-footer-caption mb-30">
                                <div class="footer-tittle">
                                    <div class="footer-logo mb-20">
                                        <router-link to="/"><img src="/assets/img/logo/logo.png" alt="Global Holy Ministries"></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                        <p>Address: Kigali Rwanda, KK 53 Street</p>
                                    </li>
                                    <li><a href="tel:+250786084727">Phone: +250786 0847 27</a></li>
                                    <li><a href="mailto:info@globalholyministries.com">Email: info@globalholyministries.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Important Links</h4>
                                <ul>
                                    <li><router-link to="/">Home</router-link></li>
                                    <li><router-link to="/about">About Us</router-link></li>
                                    <li><router-link to="/events">Events</router-link></li>
                                    <li><router-link to="/contact">Contact Us</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Newsletter</h4>
                                <div class="footer-pera footer-pera2">
                                    <p>Stay updated with our latest events and ministry news.</p>
                                </div>
                                <!-- Form -->
                                <div class="footer-form">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="#" method="get" class="subscribe_form relative mail_part">
                                            <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                            class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = ' Email Address '">
                                            <div class="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit"
                                                class="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt=""></button>
                                            </div>
                                            <div class="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer-bottom -->
            <div class="footer-bottom-area">
                <div class="container">
                    <div class="footer-border">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-xl-10 col-lg-9">
                                <div class="footer-copy-right">
                                    <p>Copyright &copy;{{ currentYear }} Global Holy Ministries. All rights reserved | Made with <i class="fa fa-heart" aria-hidden="true"></i> for God's Glory</p>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3">
                                <div class="footer-social f-right">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Scroll Up -->
    <div id="back-top">
        <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class Footer extends Vue {
  get currentYear (): number {
    return new Date().getFullYear()
  }
}
</script>

<style scoped>
.footer-wrapper {
  background: #000000 !important;
}

.footer-area {
  background: #000000 !important;
}

/* Ensure all text is readable on black background */
.footer-tittle h4,
.footer-tittle ul li,
.footer-tittle ul li a,
.footer-tittle ul li p {
  color: #ffffff !important;
}

.footer-social a {
  color: #ffffff !important;
}

.footer-social a:hover {
  color: #cccccc !important;
}

/* Footer logo styling */
.footer-logo img {
  max-width: 150px;
  height: auto;
  max-height: 60px;
  object-fit: contain;
}
</style>
