<template>
  <div class="noClass">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Footer },
  head: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'This is a brand exponent website based on Nuxt JS.',
      },
    ],
  },
}
</script>

<style>
</style>