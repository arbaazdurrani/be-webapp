<template>
  <div>
    <!-- Welcome Start -->
    <section class="welcome-overlay d-flex align-items-center m-t-80">
      <div class="background">
        <div class="bg-image imgfix overlay-black opacity-30">
          <img src="/images/photos/parallax/12.jpg" alt="" />
          <!-- <img src="/images/photos/welcome/2.jpg" alt="" /> -->
        </div>
        <div class="bg-1">
          <img src="/images/welcome/1.svg" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <h1 class="m-b-10">Pay less, do more.</h1>
              <p class="m-b-40">
                Hire your whole team today, in a single salary.
              </p>
              <div class="buttons d-flex align-items-center">
                <a
                  href="javascript:;"
                  class="
                    button button-primary
                    transition-3d-hover
                    m-r-30
                    sm-m-r-0
                  "
                  >About Us</a
                >
                <a href="javascript:;" class="video-button oval">
                  <div class="play"><i class="fa fa-play"></i></div>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              class="
                offset-lg-2
                col-lg-5
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <a href="javascript:;" class="play-button center-center">
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Welcome End -->
  </div>
</template>

<script>
export default {}
</script>

<style>
.welcome-overlay .background .bg-image img {
    position: absolute;
}
</style>