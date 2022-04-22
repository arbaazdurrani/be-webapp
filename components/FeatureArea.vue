<template>
  <div class="noClass">
    <!-- Features Start -->
    <section class="p-t-120 p-b-70">
      <div class="container">
        <div class="row">
          
          <Features
            ImagePath="/images/icons/1.gif"
            Title="Hire Your Team"
            Description="Purabitur mollis mauris nisi, sed posuere nisi varius quis. Nunc
              viverra lobortis."
          />
          
          <Features
            ImagePath="/images/icons/2.gif"
            Title="Discuss Your Requirements"
            Description="Purabitur mollis mauris nisi, sed posuere nisi varius quis. Nunc
              viverra lobortis."
          />
          
          <Features
            ImagePath="/images/icons/3.gif"
            Title="Let's Get Started"
            Description="Purabitur mollis mauris nisi, sed posuere nisi varius quis. Nunc
              viverra lobortis."
          />

        </div>
      </div>
    </section>
    <!-- Features End -->
  </div>
</template>

<script>
import Features from "./Features/Features.vue";
export default { components: { Features } }
</script>

<style>
</style>