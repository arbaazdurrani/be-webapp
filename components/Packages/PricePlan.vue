<template>
  
      <div class="col-lg-4 m-b-30 transition-3d-hover">
            <div class="box border-box p-25 rounded text-center">
              <h6 class="text-color-primary m-b-30">{{ Title }}</h6>
              <span class="display-3 d-block m-b-40">{{ Price }}</span>
              <p class="m-b-40">
                {{ Description }}
                <br><br><b>You will hire: </b>
                <ul>
                  <li>
                    <div class="icon-list d-flex align-items-center m-b-15">
                      <div class="icon"><i class="fa fa-check"></i></div><p>{{ ServiceOne }}</p>
                   </div>  
                  </li>
                  <li>
                    <div class="icon-list d-flex align-items-center m-b-15">
                      <div class="icon"><i class="fa fa-check"></i></div><p>{{ ServiceTwo }}</p>
                   </div>  
                  </li>
                  <li>
                    <div class="icon-list d-flex align-items-center m-b-15">
                      <div class="icon"><i class="fa fa-check"></i></div><p>{{ ServiceThree }}</p>
                   </div>  
                  </li>
                  
                </ul>
              </p>
              <a href="#" class="button button-primary-soft d-block"
                >Select Plan</a
              >
            </div>
          </div>
  
</template>

<script>
export default {
  props: {
    Title: String,
    Price: String,
    Description: String,
    ServiceOne: String,
    ServiceTwo: String,
    ServiceThree: String,
  },
}
</script>

<style>
</style>