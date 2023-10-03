<template>
  <div class="nav-width-parent-container ">
    <div class="mobile-nav-child-uneven bg bg-center bg-cover bg-no-repeat text-white lg:nav-child h-[380px] lg:px-[83px] lg:h-[317px]
     rounded-[20px] flex flex-col">
      <p class="tracking-[3.08px] text-[14px] mt-[53px]">CLIENTS SERVED</p>
      <p class="h1 mt-[57px]">
        Better people providing better results.
      </p>
      <p class="base hidden lg:flex">{{paragraph}}</p>
    </div>
    <p class="base lg:hidden mobile-nav-child-uneven my-12">{{paragraph}}</p>

  </div>

  <hr class=" my-8 lg:hidden">
</template>

<script setup>

const paragraph = `Comprehensive medical testing services for a range of conditions and ailments.`
</script>

<style scoped>
.bg{
  background-image: url("/imgs/clientele/retro_bg.png");
}
</style>