<template>
  <div class="hero-width-parent-container lg:nav-width-parent-container">
    <div class="flex flex-col retro-bg bg-right bg-no-repeat bg-contain retro-bg
     mobile-nav-child-even lg:px-[62px] py-[104px] rounded-[20px] relative ">
      <img src="/imgs/state_map.png" alt="" class="absolute top-1/2 right-0 -translate-y-1/2">
      <p class="text-teal tracking-[3.08px] text-[14px] uppercase">LOCATIONS</p>
      <p class="text-white h1 mt-[67px] lg:w-6/12">Easily Accessible Labs Multiple Locations Across the State</p>
      <p class="base opacity-80 text-white lg:w-7/12 mt-[21px]">
        Our laboratory has several convenient locations across the country where patients can
        receive fast and easy testing that is covered by insurance.
      </p>
      <button
          @click="router.push('/patients/centers')"
          class="cta bg-dark-blue text-white w-40 mt-[114px] justify-center">
        Locations
        <svg
            aria-hidden="true"
            class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>

  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style scoped>
.retro-bg{
  background: linear-gradient(135deg, black 60%, #48EF98);
}
</style>