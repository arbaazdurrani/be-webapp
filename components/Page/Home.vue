<template>
  <div class="noClass">
    <!-- End Welcome -->

    <Agency />
    <!-- <Saas /> -->
    <!-- <Business /> -->
    <!-- <Marketing /> -->
    <!-- <Service /> -->
    <!-- <Startup /> -->
    <!-- <Translation /> -->

    <!-- End Welcome -->

    <!-- Features Start -->
    <FeatureArea />
    <!-- Features End -->

    <!-- Divider Start -->
    <Divider />
    <!-- Divider End -->

    <!-- About Start -->
    <AboutArea />
    <!-- About End -->

    <!-- Divider Start -->
    <Divider />
    <!-- Divider End -->

    <!-- Clients Start -->
    <ClientArea />
    <!-- Clients End -->

    <!-- Parallax Start -->
    <ParallaxArea />
    <!-- Parallax End -->

    <!-- Pricing Start -->
    <PriceArea />
    <!-- Pricing End -->
    

  </div>
</template>

<script>
import Agency from '../Welcome/Agency.vue'
import Saas from '../Welcome/Saas.vue'
import Business from '../Welcome/Business.vue'
import Marketing from '../Welcome/Marketing.vue'
import Service from '../Welcome/Service.vue'
import Startup from '../Welcome/Startup.vue'
import Translation from '../Welcome/Translation.vue'
import FeatureArea from '../FeatureArea.vue'
import Divider from '../Divider.vue'
import AboutArea from '../AboutArea.vue'
import ClientArea from '../ClientArea.vue'
import ParallaxArea from '../ParallaxArea.vue'
import PriceArea from '../PriceArea.vue'

export default {
  components: {
    Agency,
    Saas,
    Business,
    Marketing,
    Service,
    Startup,
    Translation,
    FeatureArea,
    Divider,
    AboutArea,
    ClientArea,
    ParallaxArea,
    PriceArea
},
}
</script>

<style>
.noClass {
  padding: 0;
  margin: 0;
}
</style>