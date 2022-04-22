<template>
  <div
    class="col-lg-4 col-md-4 col-sm-12 text-center m-b-50"
    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
  >
    <img :src="ImagePath" class="m-b-30" width="150" />
    <h5 class="m-b-10">{{ Title }}</h5>
    <p class="m-b-20">
      {{ Description }}
    </p>
  </div>
</template>

<script>
export default {
    props:{
        ImagePath: String,
        Title: String,
        Description: String,
    },
  
}
</script>

<style>
</style>