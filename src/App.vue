<template>
  <div>
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
