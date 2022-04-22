<template>
  <!-- item start -->
  <div class="box border-box rounded p-30 text-center testimonial">
    <div class="profile-photo d-inline-block rounded-circle overflow-hidden">
      <img :src="ImagePath" alt="" />
    </div>
    <h5>{{ Name }}</h5>
    <span class="d-block">{{ Designation }}</span>
    <span class="d-block m-b-15">{{ Company }}</span>
    <p class="m-b-15">
      {{ Message }}
    </p>
    <ul
      class="
        client-social
        list-unstyled
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <li>
        <a :href="preURL + Website" target="_blank" class="transition-3d-hover">
          <i class="fa fa-globe"></i>
        </a>
      </li>
    </ul>
  </div>
  <!-- item end -->
</template>

<script>
export default {
  props: {
    ImagePath: String,
    Name: String,
    Designation: String,
    Company: String,
    Message: String,
    Website: String,
  },
  data() {
    return{
        preURL: 'https://'
    }
  },
}
</script>

<style>
</style>