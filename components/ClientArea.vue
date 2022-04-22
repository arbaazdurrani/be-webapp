<template>
  <div class="noClass">
    <!-- Clients Start -->
    <section class="p-t-120 p-b-120">
      <div class="container">
        <div class="row text-center">
          <div class="offset-lg-3 col-lg-6">
            <div class="header-badge m-b-15">Clients</div>
            <h2 class="m-b-10">Success Stories</h2>
            <p>
              To be honest, we can't make everyone happy but we try our best to
              grow your business.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="offset-lg-1 col-lg-10">
            <carousel
              :autoplay="true"
              :nav="false"
              class="slider-2-col owl--carousel blue-dots padding-slider"
            >
			
              <!-- item start -->
              <Testimanials
                ImagePath="https://media-exp1.licdn.com/dms/image/C4E03AQHVLYc13mscbQ/profile-displayphoto-shrink_100_100/0/1599301208337?e=1655942400&v=beta&t=D_YNUF-3kCaXEy38wyClI0eeuWY-E3kUAaSa0jiSd6I"
                Name="Khurshid Bhatti"
                Designation="Chief Executive Officer"
                Company="Association for Human Development"
                Message="Arbaz Durrani is professional and experienced one, I know Arbaz from last 10 years ...excellent with highly skills and positive attitude towards problems solving capability and capacity....."
                Website="www.ahdpak.org"
              />
              <!-- item end -->

              <!-- item start -->
              <Testimanials
                ImagePath="https://media-exp1.licdn.com/dms/image/C5103AQEE5sqdffHs7g/profile-displayphoto-shrink_100_100/0/1572602238590?e=1655942400&v=beta&t=vqBtoH_lH_qfj5mJ3J-PlHNdoMSXsndBVqiZHBsbOJ8"
                Name="Zeeshan Abro"
                Designation="Country Director"
                Company="WebHR"
                Message="Arbaaz has worked in my supervision in our creative department.. I found him dedicated and hardworking. His contribution helped us grow and bring more value in our offerings. His approach to answer customer queries were unmatchable. He is a great resource."
                Website="www.webhr.co"
              />
              <!-- item end -->

              <!-- item start -->
              <Testimanials
                ImagePath="https://media-exp1.licdn.com/dms/image/C4D03AQGAUpZ_TEF2xA/profile-displayphoto-shrink_200_200/0/1613386121635?e=1655942400&v=beta&t=Fhzxpp3a03wQX9z_fVHnFczj1oJKeozdyUZkt3_Ddao"
                Name="Jahanzaib Mahmood"
                Designation="Senior Brand Manager"
                Company="NBP Fund Management Limited"
                Message="Arbaaz is a real talented individual. It was a real pleasure to work with him. He does not shy away from challenges and proved to be a pivotal part of our marketing team . He is a true team player. He took various initiatives while working for NBP Funds. I wish him all the best for his future endeavours."
                Website="www.nbpfunds.com"
              />
              <!-- item end -->

              <!-- item start -->
              <Testimanials
                ImagePath="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                Name="Nizamuddin Nizamani"
                Designation="Assistant Vice President"
                Company="National Bank of Pakistan"
                Message="I am working with him for 10 years. He is very professional with problem solving skills."
                Website="www.ahdpak.org"
              />
              <!-- item end -->

            </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- Clients End -->
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Testimanials from './Testimonials/Testimanials.vue'

export default {
  components: { carousel, Testimanials },
}
</script>

<style>
.owl-theme .owl-dots .owl-dot span{
	display: none;
}
</style>