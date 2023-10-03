<template>
  <div class="nav-width-parent-container">
    <div
        class="nav-child bg bg-cover bg-center w-full lg:h-[464px] rounded-[20px] lg:px-[83px] pt-[43px] pb-12 lg:pb-0
        flex flex-col text-white">
      <p class="text-[14px] tracking-[3.08px] font-medium">ABOUT US / INSURANCES</p>
      <p class="h1 lg:text-[60px]  -tracking-[1.2px] font-naga lg:text-center mt-[76px]">
        Maximize your coverage for streamlined results.
      </p>
      <div
          class="hidden lg:flex text-[20px] tracking-[0px] text-center w-full justify-center"
          v-html="paragraph"/>

    </div>
    <div
        class="lg:hidden base nav-child my-8 "
        v-html="paragraph"/>

  </div>
  <hr class="lg:hidden my-8">
</template>

<script setup>
const paragraph = `<p>Our laboratory tests are accepted by major insurance providers.<br />
                    See the complete list below.</p>`
</script>


<style scoped>
.bg {
  background-image: url("/imgs/insurances/banner_bg.png");
}
</style>


