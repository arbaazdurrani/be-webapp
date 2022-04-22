<template>
  <div class="noClass">
    <!-- Pricing Start -->
    <section class="p-t-120 p-b-90 packages">
      <div class="container">
        <div class="row text-center">
          <div class="offset-lg-3 col-lg-6">
            <div class="header-badge m-b-15">Pricing</div>
            <h2 class="m-b-10">Our Packages</h2>
            <p class="m-b-40">
              Hiring and managing a team and paying more is a stress. Save money and make it simple.
              We give all in one go to make your business and life stress free.
            </p>
          </div>
        </div>
        <div class="row">
          
          <PricePlan 
            Title="Business Portfolio Plan"
            Price= "$1000/m"
            Description= "Enhance your online presence."
            ServiceOne= "Website Developer"
            ServiceTwo= "Graphic Designer"
            ServiceThree= "Video Editor"
          />
          
          <PricePlan 
            Title="Business Solution Plan"
            Price= "$5000/m"
            Description= "Create ease for you business."
            ServiceOne= "Project Manager"
            ServiceTwo= "Technical Team"
            ServiceThree= "Product Designer"
          />
          
          <PricePlan 
            Title="Startup Plan"
            Price= "10%"
            Description= "Let's build the unexpected."
            ServiceOne= "Development Dept."
            ServiceTwo= "Marketing Dept."
            ServiceThree= "QA Dept."
          />

          
        </div>
      </div>
    </section>
    <!-- Pricing End -->
  </div>
</template>

<script>
import PricePlan from './Packages/PricePlan.vue'

export default {
 
  components: { PricePlan },
}
</script>

<style>
.packages ul {
  margin-top: 20px;
  list-style-type: none;
}
.packages ul li {
  text-align: left;
}
.icon-list p {
  margin-bottom: 0rem;
}
.packages h6{
 text-transform: uppercase;
}

</style>