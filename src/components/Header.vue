<template>
  <header>
    <!-- Header Start -->
    <div class="header-area">
        <div class="main-header">
            <div class="header-top d-none d-lg-block">
                <div class="container-fluid">
                    <div class="col-xl-12">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="header-info-left d-flex">
                                <ul>
                                    <li>Phone: +18594569774</li>
                                    <li>Email: globalholyministries@gmail.com</li>
                                </ul>
                                <div class="header-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="header-info-right d-flex align-items-center">
                                <div class="select-this">
                                    <form action="#">
                                        <div class="select-itms">
                                            <select name="select" id="select1">
                                                <option value="">English</option>
                                                <option value="">Spanish</option>
                                                <option value="">French</option>
                                                <option value="">Portuguese</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <ul class="contact-now">
                                    <li><a href="#">Subscribe Now</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom header-sticky">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <!-- Logo -->
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo">
                                <router-link to="/"><img src="/assets/img/logo/logonew.png" alt="Global Holy Ministries"></router-link>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10">
                            <div class="menu-wrapper d-flex align-items-center justify-content-end">
                                <!-- Main-menu -->
                                <div class="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><router-link to="/">Home</router-link></li>
                                            <li><router-link to="/about">About</router-link></li>
                                            <li><router-link to="/events">Events</router-link></li>
                                            <li><router-link to="/contact">Contact</router-link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- Header-btn -->
                                <div class="header-right-btn d-none d-lg-block ml-20">
                                    <router-link to="/contact" class="btn header-btn">Donate</router-link>
                                </div>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </div>
    </header>
  </template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class Header extends Vue {}
</script>

<style scoped>
.logo img {
  max-height: 50px;
  width: auto;
  object-fit: contain;
}

.header-bottom .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

@media (max-width: 768px) {
  .logo img {
    max-height: 40px;
  }
}

@media (max-width: 576px) {
  .logo img {
    max-height: 35px;
  }
}
</style>
