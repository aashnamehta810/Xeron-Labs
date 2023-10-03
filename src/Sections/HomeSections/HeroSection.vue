<template>
  <div class="hero-width-parent-container">
    <div
        class="flex flex-col w-full bg lg:h-[493px] bg-cover bg-no-repeat bg-center rounded-[20px] py-[66px]
        text-white mobile-nav-child-even lg:lg-child-container">
      <p class="tracking-[3.08px] text-[14px] font-medium w-10/12 lg:w-full">WELCOME TO XERON CLINICAL LABORATORIES</p>
      <p class="mt-11 h1 lg:max-w-[70%] 3xl:max-w-[60%] break-words">
        Innovative laboratory services with a human touch.
      </p>
      <p class="hidden lg:flex base max-w-[55%]">{{paragraph}}</p>
      <div class="flex items-center justify-between lg:justify-start lg:gap-[58px] mt-32 lg:mt-[43px]">
        <button
            @click="router.push('/about/contactus')"
            class="cta bg-dark-blue gap-2 py-4">
          Contact us
          <svg
              aria-hidden="true"
              class="h-[10px]" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <div
            @click="router.push('/patients/centers')"
            class="text-[13px] lg:text-[20px] leading-[.32px] flex  items-center gap-1 lg:gap-2 cursor-pointer text-night
            lg:text-white">
          Find a Patient Center
          <svg
              aria-hidden="true"
              class="h-[10px] w-[10px]" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="mobile-nav-child-even lg:lg-child-container lg:hidden mt-16">
      {{paragraph}}
      <hr class="mt-16 ">
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router  = useRouter()



const paragraph = 'We provide accurate on-time results so that you can make informedmedical decisions for your patients.' +
    'Our clinical laboratories are committed to excellence in clinical service and customer satisfaction.'
</script>

<style scoped>
.bg {
  background-image: url("/imgs/hero_banner.png");
}
</style>
