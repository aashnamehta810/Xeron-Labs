<template>
  <div class="nav-width-parent-container">
    <div
        class="mobile-nav-child-uneven lg:lg-child-container bg bg-center bg-cover bg-no-repeat text-white lg:px-[63px] pt-[44px] pb-[100px] rounded-[20px]">
      <p class="tracking-[3.08px] text-[14px]">ABOUT US</p>
      <p class="font-naga h1 lg:text-center mt-[57px] lg:px-[50px]">
        At Xeron, we are dedicated to delivering accurate diagnostic solutions.
      </p>
      <p class="base text-center mt-6 px-[173px] font-normal hidden lg:flex">
        {{paragraph}}
      </p>
    </div>
    <p class="base mt-8 mobile-nav-child-even lg:hidden">{{paragraph}}</p>
    <hr class="lg:hidden my-12">
  </div>
</template>

<script setup>

const paragraph = 'We are a local medical diagnostic laboratory providing testing services for physicians and patients\n' +
    '        in the NYC metropolitan area, committed to the highest level of accuracy and compassion.'

</script>

<style scoped>
.bg {
  background-image: url("/imgs/about_banner.png");
}
</style>
