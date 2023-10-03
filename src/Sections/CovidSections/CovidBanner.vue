<template>
  <div class="nav-width-parent-container">
    <div class="bg bg-center bg-cover bg-no-repeat text-white mobile-nav-child-uneven lg:px-[83px] pt-[44px] pb-[100px]
     rounded-[20px]">
      <p class="tracking-[3.08px] text-[14px]">COVID 19</p>
      <p class="h1 mt-[57px]">
        Better people providing better results.
      </p>
      <p class="hidden base lg:flex">
        {{paragraph}}
      </p>
    </div>

    <p class="base lg:hidden nav-child mt-5">{{paragraph}}</p>
  </div>

  <hr class="my-16 lg:hidden">
</template>

<script setup>

const paragraph = `Comprehensive medical testing services for a range of conditions and ailments.`
</script>


<style scoped>
.bg{
  background-image: url("/imgs/covid/retro_bg.png");
}
</style>
