<template>
  <div class="nav-width-parent-container">
    <div class="nav-child bg bg-cover bg-center lg:bg-cover lg:bg-center  lg:h-[464px] rounded-[20px] lg:px-[83px]
     pt-[43px] pb-32 flex flex-col text-white">
      <p class="text-[14px] tracking-[3.08px] font-medium">ABOUT US / CAREERS</p>
      <p class="h1 lg:text-[60px]  -tracking-[1.2px] font-naga mt-4 lg:mt-[105px] pr-16 lg:pr-0">
        Join a caring team
      </p>
      <p class="hidden lg:flex text-[20px] tracking-[0px] w-1/2">
        {{ paragraph }}
      </p>
    </div>

    <p class="nav-child base my-8 lg:hidden">{{ paragraph }}</p>
    <hr class="my-8 lg:hidden">
  </div>


</template>

<script setup>
const paragraph = `Looking for a rewarding career? Candidates that are committed, motivated, and passionate about
helping others are always in demand at XCL. Join XCL to work with a group of caring medical professionals.`
</script>


<style scoped>
.bg {
  background-image: url("/imgs/careers/smiles.png");
}
</style>


