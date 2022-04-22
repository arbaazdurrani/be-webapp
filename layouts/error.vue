<template>
  <div class="noCLass">
    
    <!-- Page Start -->
    <section
      class="
        m-t-80
        h-full-footer
        d-flex
        align-items-center
        sm-p-t-120 sm-p-b-120
      "
    >
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="offset-lg-4 col-lg-4 m-b-30">
            <div class="position-relative overflow-hidden">
              <img
                src="/images/photos/about/404.png"
                class="img-fluid mx-auto d-block"
                alt=""
              />
              <div
                class="
                  error-404
                  position-absolute
                  bottom-0
                  left-0
                  right-0
                  d-block
                  text-center text-primary
                "
              >
                404
              </div>
            </div>
          </div>
          <div class="offset-lg-2 col-lg-8 text-center m-b-40">
            <p class="m-b-20">
              OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND.
            </p>
            <!-- <span class="text-primary">Try the search below to find matching pages:</span> -->
          </div>
          <!-- <div class="offset-lg-3 col-lg-6">
            <div class="input-buttons primary">
              <input type="text" placeholder="Search…" />
              <button><i class="fa fa-search"></i></button>
            </div>
          </div> -->
          
        </div>
      </div>
    </section>
    <!-- Page End -->
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Footer },
  head: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Error',
  },
}
</script>

<style>
.text-primary {
    color: #f25e22 !important;
}
</style>