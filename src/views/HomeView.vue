<template>
  <main>
    <!-- slider Area Start-->
    <div class="slider-area" :style="{ backgroundImage: 'url(/assets/img/logo/logo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#f8f9fa' }">
        <div class="slider-active">
            <!-- Single Slider -->
            <div class="single-slider slider-height d-flex align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                            <div class="hero__caption">
                                <h1 data-animation="fadeInUp" data-delay=".6s">Global Holy Ministries</h1>
                                <p data-animation="fadeInUp" data-delay=".8s">Welcome to our spiritual community. Join us in worship, fellowship, and service to spread God's love and grace to all people.</p>
                                <!-- Hero-btn -->
                                <div class="hero__btn">
                                    <router-link to="/about" class="btn hero-btn mb-10" data-animation="fadeInLeft" data-delay=".8s">About Us</router-link>
                                    <router-link to="/contact" class="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                                        <i class="flaticon-null"></i>
                                        <p>+250786 0847 27</p>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-4 col-sm-2">
                            <div class="hero-slider">
                                <div class="slider-container">
                                    <div class="slider-wrapper">
                                        <div class="slide active">
                                            <img src="/assets/img/gallery/bible.jpeg" alt="Word of God" class="slide-image">
                                            <div class="slide-content">
                                                <h4>The Living Word</h4>
                                                <p>God's truth for today</p>
                                            </div>
                                        </div>
                                        <div class="slide">
                                            <img src="/assets/img/logo/logo.png" alt="Word of God" class="slide-image">
                                            <div class="slide-content">
                                                <h4>The Living Word</h4>
                                                <p>God's truth for today</p>
                                            </div>
                                        </div>
                                        <div class="slide">
                                            <img src="/assets/img/gallery/bible1.jpeg" alt="Bible Study" class="slide-image">
                                            <div class="slide-content">
                                                <h4>Daily Scripture</h4>
                                                <p>Feeding your soul</p>
                                            </div>
                                        </div>
                                        <div class="slide">
                                            <img src="/assets/img/gallery/bible3.jpeg" alt="Prayer & Worship" class="slide-image">
                                            <div class="slide-content">
                                                <h4>Prayer & Worship</h4>
                                                <p>Connecting with God</p>
                                            </div>
                                        </div>
                                        <div class="slide">
                                            <img src="/assets/img/gallery/bible4.jpeg" alt="Faith in Action" class="slide-image">
                                            <div class="slide-content">
                                                <h4>Faith in Action</h4>
                                                <p>Living the Gospel</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Slider Controls -->
                                    <div class="slider-controls">
                                        <button class="slider-btn prev-btn" @click="prevSlide">
                                            <i class="fas fa-chevron-left"></i>
                                        </button>
                                        <button class="slider-btn next-btn" @click="nextSlide">
                                            <i class="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                    <!-- Slider Indicators -->
                                    <div class="slider-indicators">
                                        <span class="indicator active" @click="goToSlide(0)"></span>
                                        <span class="indicator" @click="goToSlide(1)"></span>
                                        <span class="indicator" @click="goToSlide(2)"></span>
                                        <span class="indicator" @click="goToSlide(3)"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- slider Area End-->
    <!--? Services Area Start -->
    <div class="service-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>What we are doing</span>
                        <h2>We Are In A Mission To Spread God's Love</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <i class="fas fa-church"></i>
                        </div>
                        <div class="cat-cap">
                            <h5><router-link to="/events">Weekly Services</router-link></h5>
                            <p>Join us for powerful worship and inspiring messages that strengthen your faith and transform your life.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat active text-center mb-50">
                        <div class="cat-icon">
                            <i class="fas fa-hands-helping"></i>
                        </div>
                        <div class="cat-cap">
                            <h5><router-link to="/events">Community Outreach</router-link></h5>
                            <p>We serve our local community through various programs that show God's love in practical ways.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <i class="fas fa-bible"></i>
                        </div>
                        <div class="cat-cap">
                            <h5><router-link to="/events">Bible Study</router-link></h5>
                            <p>Deepen your understanding of God's Word through our comprehensive Bible study programs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Services Area End -->
    <!--? Audio Preaching Start-->
    <section class="audio-preaching-area section-padding30 gray-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10 col-md-12">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>Spiritual Nourishment</span>
                        <h2>Listen to Recent Sermons & Teachings</h2>
                        <p>Feed your soul with powerful messages from God's Word, available anytime, anywhere</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Sermon 1 -->
                <div class="col-lg-6 col-md-12 mb-30">
                    <div class="sermon-card">
                        <div class="sermon-header">
                            <div class="sermon-img">
                                <div class="video-container" v-show="activeTab1 === 'video'">
                                    <iframe
                                        src="https://www.youtube.com/embed/eKudFtyOXI8"
                                        title="Finding Peace in Troubled Times"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                                <div class="audio-container" v-show="activeTab1 === 'audio'">
                                    <div class="audio-player-placeholder">
                                        <i class="fas fa-headphones"></i>
                                        <p>Audio Player</p>
                                        <audio controls preload="none">
                                            <source src="/assets/audio/sermon1.mp3" type="audio/mpeg">
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                                <div class="notes-container" v-show="activeTab1 === 'notes'">
                                    <div class="notes-placeholder">
                                        <i class="fas fa-file-alt"></i>
                                        <p>Sermon Notes</p>
                                        <div class="notes-content">
                                            <h5>Key Points:</h5>
                                            <ul>
                                                <li>God's peace surpasses all understanding</li>
                                                <li>Trust in God during difficult times</li>
                                                <li>Prayer as a source of strength</li>
                                                <li>Finding joy amidst challenges</li>
                                            </ul>
                                            <h5>Bible Verses:</h5>
                                            <p>Philippians 4:6-7, Isaiah 26:3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sermon-info">
                                <span class="preacher-name">Pastor John Smith</span>
                                <h4><a href="#">Finding Peace in Troubled Times</a></h4>
                                <div class="sermon-meta">
                                    <span><i class="far fa-calendar"></i> December 10, 2024</span>
                                    <span><i class="far fa-clock"></i> 35 min</span>
                                </div>
                            </div>
                        </div>
                        <div class="sermon-content">
                            <p>Discover how God's peace can sustain you through life's greatest challenges and uncertainties.</p>
                            <!-- Tabs Navigation -->
                            <div class="sermon-tabs">
                                <button class="tab-btn" :class="{ active: activeTab1 === 'video' }" @click="activeTab1 = 'video'">
                                    <i class="fas fa-play"></i> Video
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab1 === 'audio' }" @click="activeTab1 = 'audio'">
                                    <i class="fas fa-headphones"></i> Audio
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab1 === 'notes' }" @click="activeTab1 = 'notes'">
                                    <i class="fas fa-file-alt"></i> Notes
                                </button>
                            </div>
                            <div class="sermon-actions">
                                <!-- Action buttons removed for now -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sermon 2 -->
                <div class="col-lg-6 col-md-12 mb-30">
                    <div class="sermon-card">
                        <div class="sermon-header">
                            <div class="sermon-img">
                                <div class="video-container" v-show="activeTab2 === 'video'">
                                    <iframe
                                        src="https://www.youtube.com/embed/gmoUz8AaMcw"
                                        title="The Power of Faith and Prayer"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                                <div class="audio-container" v-show="activeTab2 === 'audio'">
                                    <div class="audio-player-placeholder">
                                        <i class="fas fa-headphones"></i>
                                        <p>Audio Player</p>
                                        <audio controls preload="none">
                                            <source src="/assets/audio/sermon2.mp3" type="audio/mpeg">
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                                <div class="notes-container" v-show="activeTab2 === 'notes'">
                                    <div class="notes-placeholder">
                                        <i class="fas fa-file-alt"></i>
                                        <p>Sermon Notes</p>
                                        <div class="notes-content">
                                            <h5>Key Points:</h5>
                                            <ul>
                                                <li>Faith moves mountains</li>
                                                <li>Prayer changes circumstances</li>
                                                <li>Persistence in prayer</li>
                                                <li>God hears our cries</li>
                                            </ul>
                                            <h5>Bible Verses:</h5>
                                            <p>Matthew 17:20, James 5:16</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sermon-info">
                                <span class="preacher-name">Pastor Mary Johnson</span>
                                <h4><a href="#">The Power of Faith and Prayer</a></h4>
                                <div class="sermon-meta">
                                    <span><i class="far fa-calendar"></i> December 3, 2024</span>
                                    <span><i class="far fa-clock"></i> 42 min</span>
                                </div>
                            </div>
                        </div>
                        <div class="sermon-content">
                            <p>Explore the transformative power of unwavering faith and consistent prayer in your spiritual journey.</p>
                            <!-- Tabs Navigation -->
                            <div class="sermon-tabs">
                                <button class="tab-btn" :class="{ active: activeTab2 === 'video' }" @click="activeTab2 = 'video'">
                                    <i class="fas fa-play"></i> Video
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab2 === 'audio' }" @click="activeTab2 = 'audio'">
                                    <i class="fas fa-headphones"></i> Audio
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab2 === 'notes' }" @click="activeTab2 = 'notes'">
                                    <i class="fas fa-file-alt"></i> Notes
                                </button>
                            </div>
                            <div class="sermon-actions">
                                <!-- Action buttons removed for now -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sermon 3 -->
                <div class="col-lg-6 col-md-12 mb-30">
                    <div class="sermon-card">
                        <div class="sermon-header">
                            <div class="sermon-img">
                                <div class="video-container" v-show="activeTab3 === 'video'">
                                    <iframe
                                        src="https://www.youtube.com/embed/nkrSAX25yRo"
                                        title="Walking in God's Purpose"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                                <div class="audio-container" v-show="activeTab3 === 'audio'">
                                    <div class="audio-player-placeholder">
                                        <i class="fas fa-headphones"></i>
                                        <p>Audio Player</p>
                                        <audio controls preload="none">
                                            <source src="/assets/audio/sermon3.mp3" type="audio/mpeg">
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                                <div class="notes-container" v-show="activeTab3 === 'notes'">
                                    <div class="notes-placeholder">
                                        <i class="fas fa-file-alt"></i>
                                        <p>Sermon Notes</p>
                                        <div class="notes-content">
                                            <h5>Key Points:</h5>
                                            <ul>
                                                <li>God has a purpose for your life</li>
                                                <li>Discover your spiritual gifts</li>
                                                <li>Walking in divine alignment</li>
                                                <li>Fulfilling your calling</li>
                                            </ul>
                                            <h5>Bible Verses:</h5>
                                            <p>Jeremiah 29:11, Ephesians 2:10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sermon-info">
                                <span class="preacher-name">Guest Speaker: Rev. David Brown</span>
                                <h4><a href="#">Walking in God's Purpose</a></h4>
                                <div class="sermon-meta">
                                    <span><i class="far fa-calendar"></i> November 26, 2024</span>
                                    <span><i class="far fa-clock"></i> 38 min</span>
                                </div>
                            </div>
                        </div>
                        <div class="sermon-content">
                            <p>Learn how to discover and fulfill the divine purpose God has designed for your life.</p>
                            <!-- Tabs Navigation -->
                            <div class="sermon-tabs">
                                <button class="tab-btn" :class="{ active: activeTab3 === 'video' }" @click="activeTab3 = 'video'">
                                    <i class="fas fa-play"></i> Video
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab3 === 'audio' }" @click="activeTab3 = 'audio'">
                                    <i class="fas fa-headphones"></i> Audio
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab3 === 'notes' }" @click="activeTab3 = 'notes'">
                                    <i class="fas fa-file-alt"></i> Notes
                                </button>
                            </div>
                            <div class="sermon-actions">
                                <!-- Action buttons removed for now -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sermon 4 -->
                <div class="col-lg-6 col-md-12 mb-30">
                    <div class="sermon-card">
                        <div class="sermon-header">
                            <div class="sermon-img">
                                <div class="video-container" v-show="activeTab4 === 'video'">
                                    <iframe
                                        src="https://www.youtube.com/embed/9zzzMzgQRuo"
                                        title="Building Strong Families"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                                <div class="audio-container" v-show="activeTab4 === 'audio'">
                                    <div class="audio-player-placeholder">
                                        <i class="fas fa-headphones"></i>
                                        <p>Audio Player</p>
                                        <audio controls preload="none">
                                            <source src="/assets/audio/sermon4.mp3" type="audio/mpeg">
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                                <div class="notes-container" v-show="activeTab4 === 'notes'">
                                    <div class="notes-placeholder">
                                        <i class="fas fa-file-alt"></i>
                                        <p>Sermon Notes</p>
                                        <div class="notes-content">
                                            <h5>Key Points:</h5>
                                            <ul>
                                                <li>Biblical family principles</li>
                                                <li>Love and respect in marriage</li>
                                                <li>Raising godly children</li>
                                                <li>Family as ministry</li>
                                            </ul>
                                            <h5>Bible Verses:</h5>
                                            <p>Ephesians 5:22-6:4, Joshua 24:15</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sermon-info">
                                <span class="preacher-name">Pastor John Smith</span>
                                <h4><a href="#">Building Strong Families</a></h4>
                                <div class="sermon-meta">
                                    <span><i class="far fa-calendar"></i> November 19, 2024</span>
                                    <span><i class="far fa-clock"></i> 45 min</span>
                                </div>
                            </div>
                        </div>
                        <div class="sermon-content">
                            <p>Biblical principles for creating and maintaining strong, Christ-centered families in today's world.</p>
                            <!-- Tabs Navigation -->
                            <div class="sermon-tabs">
                                <button class="tab-btn" :class="{ active: activeTab4 === 'video' }" @click="activeTab4 = 'video'">
                                    <i class="fas fa-play"></i> Video
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab4 === 'audio' }" @click="activeTab4 = 'audio'">
                                    <i class="fas fa-headphones"></i> Audio
                                </button>
                                <button class="tab-btn" :class="{ active: activeTab4 === 'notes' }" @click="activeTab4 = 'notes'">
                                    <i class="fas fa-file-alt"></i> Notes
                                </button>
                            </div>
                            <div class="sermon-actions">
                                <!-- Action buttons removed for now -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <a href="#" class="btn view-all-sermons">Browse All Sermons <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    <!--? Audio Preaching End-->
    <!--? Upcoming Events Start-->
    <section class="upcoming-events-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10 col-md-12">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>What We Are Doing</span>
                        <h2>Upcoming Church Events & Activities</h2>
                        <p>Join us for meaningful worship, fellowship, and service opportunities</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Event 1 -->
                <div class="col-lg-12 col-md-12 mb-30">
                    <div class="single-cat-horizontal d-flex align-items-center mb-50">
                        <div class="cat-icon-horizontal">
                            <img src="/assets/img/gallery/bible.jpeg" alt="Sunday Worship" class="cat-icon-img">
                        </div>
                        <div class="cat-cap-horizontal">
                            <h5><router-link to="/events">Sunday Worship Service</router-link></h5>
                            <p>Join us for powerful worship and inspiring messages that strengthen your faith.</p>
                            <div class="event-details-horizontal">
                                <span><i class="far fa-calendar"></i> December 15, 2024</span>
                                <span><i class="far fa-clock"></i> 10:00 AM - 12:00 PM</span>
                                <span><i class="fas fa-map-marker-alt"></i> Main Sanctuary</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Event 2 -->
                <div class="col-lg-12 col-md-12 mb-30">
                    <div class="single-cat-horizontal d-flex align-items-center mb-50">
                        <div class="cat-icon-horizontal">
                            <img src="/assets/img/gallery/bible1.jpeg" alt="Bible Study" class="cat-icon-img">
                        </div>
                        <div class="cat-cap-horizontal">
                            <h5><router-link to="/events">Midweek Bible Study</router-link></h5>
                            <p>Deepen your understanding of God's Word through our comprehensive Bible study.</p>
                            <div class="event-details-horizontal">
                                <span><i class="far fa-calendar"></i> December 17, 2024</span>
                                <span><i class="far fa-clock"></i> 7:00 PM - 8:30 PM</span>
                                <span><i class="fas fa-map-marker-alt"></i> Fellowship Hall</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Event 3 -->
                <div class="col-lg-12 col-md-12 mb-30">
                    <div class="single-cat-horizontal d-flex align-items-center mb-50">
                        <div class="cat-icon-horizontal">
                            <img src="/assets/img/gallery/bible3.jpeg" alt="Youth Fellowship" class="cat-icon-img">
                        </div>
                        <div class="cat-cap-horizontal">
                            <h5><router-link to="/events">Youth Fellowship Night</router-link></h5>
                            <p>An exciting evening of worship, games, and fellowship for our young generation.</p>
                            <div class="event-details-horizontal">
                                <span><i class="far fa-calendar"></i> December 20, 2024</span>
                                <span><i class="far fa-clock"></i> 6:00 PM - 9:00 PM</span>
                                <span><i class="fas fa-map-marker-alt"></i> Youth Center</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <a href="#" class="btn view-all-events">View All Events <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    <!--? Upcoming Events End-->
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      currentSlide: 0,
      totalSlides: 4,
      // Tab states for each sermon
      activeTab1: 'video',
      activeTab2: 'video',
      activeTab3: 'video',
      activeTab4: 'video'
    }
  },
  methods: {
    // Video preaching methods
    openVideo (videoId) {
      // Open YouTube video in a new tab for better viewing experience
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
    },
    viewNotes (sermonId) {
      // In a real application, this would open sermon notes
      console.log(`Viewing notes for sermon ${sermonId}`)
      // You could implement a modal or navigate to a notes page
      alert('Sermon notes feature coming soon!')
    },
    downloadAudio (sermonId) {
      // In a real application, this would trigger a download
      console.log(`Downloading sermon ${sermonId}`)
      // You could implement actual download functionality here
      alert('Download feature coming soon!')
    },
    // Slider methods
    nextSlide () {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides
      this.updateSlider()
    },
    prevSlide () {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides
      this.updateSlider()
    },
    goToSlide (index) {
      this.currentSlide = index
      this.updateSlider()
    },
    updateSlider () {
      const slides = document.querySelectorAll('.slide')
      const indicators = document.querySelectorAll('.indicator')

      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === this.currentSlide)
      })

      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === this.currentSlide)
      })
    }
  },
  mounted () {
    // Auto-advance slider every 5 seconds
    setInterval(() => {
      this.nextSlide()
    }, 5000)
  }
}
</script>

<style scoped>
/* Hero Section Background */
.slider-area {
  position: relative;
  overflow: hidden;
}

.slider-area::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9) 0%, rgba(52, 58, 64, 0.8) 100%);
  z-index: 2;
}

.slider-area > * {
  position: relative;
  z-index: 3;
}

/* Hero Slider Styles */
.hero-slider {
  padding: 20px 0;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  background: #f8f9fa;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: translateX(100%);
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 30px 20px 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.slide.active .slide-content {
  transform: translateY(0);
}

.slide-content h4 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-content p {
  margin: 0;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Slider Controls */
.slider-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
}

.slider-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.slider-btn:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Slider Indicators */
.slider-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Responsive Design */
@media (max-width: 768px) {
  .slider-container {
    height: 300px;
  }

  .slide-content h4 {
    font-size: 20px;
  }

  .slide-content p {
    font-size: 14px;
  }

  .slider-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .slider-controls {
    padding: 0 10px;
  }
}

@media (max-width: 576px) {
  .slider-container {
    height: 250px;
  }

  .slide-content {
    padding: 20px 15px 15px;
  }

  .slide-content h4 {
    font-size: 18px;
  }

  .slide-content p {
    font-size: 13px;
  }

  .slider-btn {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
}

/* Horizontal Event Cards Styling */
.single-cat-horizontal {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.single-cat-horizontal:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cat-icon-horizontal {
  flex: 0 0 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
}

.cat-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.cat-cap-horizontal {
  flex: 1;
  text-align: left;
}

.cat-cap-horizontal h5 {
  margin-bottom: 10px;
}

.cat-cap-horizontal h5 a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.3s ease;
}

.cat-cap-horizontal h5 a:hover {
  color: #667eea;
}

.cat-cap-horizontal p {
  margin-bottom: 15px;
  color: #6c757d;
  line-height: 1.5;
}

.event-details-horizontal {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.event-details-horizontal span {
  color: #6c757d;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.event-details-horizontal i {
  color: #667eea;
}

/* Event Details Styling for Single Cat Cards */
.event-details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
  font-size: 13px;
  color: #666;
  line-height: 1.8;
}

.event-details span {
  display: block;
  margin-bottom: 5px;
}

.event-details span i {
  margin-right: 8px;
  color: #ff6b6b;
}

.single-cat:hover .event-details span i {
  color: #333;
}

.single-cat.active .event-details span i {
  color: white;
}

.single-cat.active .event-details {
  border-top-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
}

/* Audio Preaching Section Styles */
.audio-preaching-area {
  background: #f8f9fa;
  padding: 100px 0;
}

.sermon-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.sermon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.sermon-header {
  display: flex;
  padding: 0;
}

/* Tab Navigation Styling */
.sermon-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  background: #f8f9fa;
  padding: 3px;
}

.tab-btn {
  flex: 1;
  padding: 10px 15px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 6px;
}

.tab-btn:hover {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
}

.tab-btn.active {
  background: #ff6b6b;
  color: white;
}

.tab-btn i {
  font-size: 14px;
}

/* Audio Container Styling */
.audio-container {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px 8px 0 0;
}

.audio-player-placeholder {
  text-align: center;
  color: white;
}

.audio-player-placeholder i {
  font-size: 32px;
  margin-bottom: 10px;
  display: block;
}

.audio-player-placeholder p {
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
}

.audio-player-placeholder audio {
  margin-top: 10px;
  width: 200px;
  height: 30px;
}

/* Notes Container Styling */
.notes-container {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  border-radius: 8px 8px 0 0;
  overflow-y: auto;
}

.notes-placeholder {
  text-align: center;
  color: white;
  padding: 15px;
  width: 100%;
}

.notes-placeholder i {
  font-size: 32px;
  margin-bottom: 10px;
  display: block;
}

.notes-placeholder p {
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
}

.notes-content {
  margin-top: 10px;
  text-align: left;
  font-size: 12px;
  line-height: 1.4;
}

.notes-content h5 {
  margin: 8px 0 5px 0;
  font-size: 13px;
  font-weight: 600;
}

.notes-content ul {
  margin: 5px 0;
  padding-left: 15px;
}

.notes-content li {
  margin: 2px 0;
}

/* Download Button Styling */
.download-btn {
  background: #f0f0f0;
  color: #333;
}

.download-btn:hover {
  background: #e0e0e0;
  transform: translateY(-2px);
}
.video-container {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.sermon-img {
  position: relative;
  width: 200px;
  height: 150px;
  overflow: hidden;
}

.sermon-img .video-container {
  width: 100%;
  height: 100%;
}

.watch-btn {
  background: #ff6b6b;
  color: white;
}

.watch-btn:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

.notes-btn {
  background: #4CAF50;
  color: white;
}

.notes-btn:hover {
  background: #45a049;
  transform: translateY(-2px);
}

.sermon-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.preacher-name {
  color: #ff6b6b;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.sermon-info h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.sermon-info h4 a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.sermon-info h4 a:hover {
  color: #ff6b6b;
}

.sermon-meta {
  display: flex;
  gap: 15px;
  font-size: 13px;
  color: #666;
}

.sermon-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.sermon-content {
  padding: 20px;
}

.sermon-content p {
  margin: 0 0 20px 0;
  color: #555;
  line-height: 1.6;
  font-size: 14px;
}

.sermon-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.audio-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.audio-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.view-all-sermons {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.view-all-sermons:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  color: white;
}

/* Responsive Design for Audio Preaching */
@media (max-width: 992px) {
  .sermon-header {
    flex-direction: column;
  }

  .sermon-img {
    width: 100%;
    height: 200px;
  }

  .sermon-info {
    padding: 15px 20px;
  }
}

@media (max-width: 768px) {
  .audio-preaching-area {
    padding: 80px 0;
  }

  .sermon-actions {
    justify-content: center;
  }

  .audio-btn {
    flex: 1;
    justify-content: center;
    min-width: 100px;
  }
}

@media (max-width: 576px) {
  .sermon-img {
    height: 150px;
  }

  .sermon-info h4 {
    font-size: 16px;
  }

  .sermon-content {
    padding: 15px;
  }

  .audio-btn {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
