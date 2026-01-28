<template>
  <main>
    <!--? Hero Start -->
    <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap hero-cap2 pt-20 text-center">
                            <h2>About US</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->

    <!--? About Ministry Start-->
    <section class="about-low-area section-padding2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10">
                    <div class="about-caption mb-50">
                        <!-- Section Tittle -->
                        <div class="section-tittle mb-35">
                            <span>About our ministry</span>
                            <h2>We Are In A Mission To Help People Find God</h2>
                        </div>
                        <p>Global Holy Ministries is dedicated to spreading the message of God's love and grace to all people. We believe in creating a welcoming community where everyone can experience spiritual growth.</p>
                        <p>Through our various programs and services, we aim to make a positive impact in the lives of individuals and families, helping them develop a deeper relationship with God and discover their purpose in His kingdom.</p>
                    </div>
                    <router-link to="/contact" class="btn">Contact US</router-link>
                </div>
                <div class="col-lg-6 col-md-12">
                    <!-- Single about image -->
                    <div class="about-img-single">
                        <img src="/assets/img/gallery/bible1.jpeg" alt="Global Holy Ministries">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Ministry End-->

    <!--? Team Section Start -->
    <section class="team-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>Our Ministry Team</span>
                        <h2>Dedicated Leaders Serving God</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Team Member 1 -->
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team text-center mb-30">
                        <div class="team-img">
                            <div class="team-avatar">
                                <span class="avatar-text">JS</span>
                            </div>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-caption">
                            <h4>Pastor John Smith</h4>
                            <span>Senior Pastor</span>
                            <p>Leading our congregation with over 20 years of ministry experience.</p>
                        </div>
                    </div>
                </div>
                <!-- Team Member 2 -->
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team text-center mb-30">
                        <div class="team-img">
                            <div class="team-avatar">
                                <span class="avatar-text">SJ</span>
                            </div>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-caption">
                            <h4>Sarah Johnson</h4>
                            <span>Worship Leader</span>
                            <p>Leading our worship team with passion and spiritual guidance.</p>
                        </div>
                    </div>
                </div>
                <!-- Team Member 3 -->
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team text-center mb-30">
                        <div class="team-img">
                            <div class="team-avatar">
                                <span class="avatar-text">MB</span>
                            </div>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-caption">
                            <h4>Michael Brown</h4>
                            <span>Youth Minister</span>
                            <p>Guiding our youth in faith and building the next generation.</p>
                        </div>
                    </div>
                </div>
                <!-- Team Member 4 -->
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team text-center mb-30">
                        <div class="team-img">
                            <div class="team-avatar">
                                <span class="avatar-text">ED</span>
                            </div>
                            <div class="team-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-caption">
                            <h4>Emily Davis</h4>
                            <span>Outreach Coordinator</span>
                            <p>Organizing community service and outreach programs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Team Section End -->
  </main>
</template>

<script>
export default {
  name: 'AboutView',
  mounted () {
    // Initialize any plugins or animations here
  }
}
</script>

<style scoped>
/* Add any custom styles for the About page here */

/* Single about image layout */
.about-img-single {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-img-single img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-img-single:hover img {
  transform: scale(1.05);
}

/* Testimonial images */
.founder-img img {
  max-width: 80px;
  max-height: 80px;
  object-fit: cover;
  border-radius: 50%;
}

/* Service icons - keep original size */
.cat-icon span {
  font-size: 36px;
}

/* Team Section Styling */
.single-team {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.single-team:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.team-img {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
}

.team-avatar {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.avatar-text {
  font-size: 42px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.team-img img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-img:hover img {
  transform: scale(1.05);
}

.team-img:hover .team-avatar {
  transform: scale(1.05);
}

.team-social {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.single-team:hover .team-social {
  opacity: 1;
}

.team-social a {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  margin: 0 5px;
  color: #667eea;
  font-size: 14px;
  transition: all 0.3s ease;
}

.team-social a:hover {
  background: #667eea;
  color: #fff;
}

.team-caption h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #2c3e50;
}

.team-caption span {
  display: block;
  font-size: 14px;
  color: #667eea;
  margin-bottom: 10px;
  font-weight: 500;
}

.team-caption p {
  font-size: 14px;
  color: #6c757d;
  line-height: 1.5;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-img-single {
    height: 250px;
    margin-top: 30px;
  }
}
</style>
