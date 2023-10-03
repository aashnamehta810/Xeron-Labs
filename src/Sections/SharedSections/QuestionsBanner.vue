<template>
  <div class="nav-width-parent-container mt-20 lg:mt-32  text-white">
    <div
        class="mobile-nav-child-uneven lg:pl-[80px] lg:pr-[111px] banner bg-center bg-cover bg-no-repeat py-16 lg:py-[94px] rounded-[20px]
         flex flex-col lg:flex-row w-full lg:items-center justify-between">
      <div class="flex flex-col">
        <p class="h2 text-white">Have any questions? We're here to help.</p>
        <p class="base mt-6 lg:mt-0">Contact Our Dedicated Customer Service Team</p>
      </div>
      <button
          @click="router.push('/about/contactus')"
          class="cta h-[42px] bg-dark-blue text-white w-32 mt-40 lg:mt-0 lg:w-44  justify-between">
        Reach out
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

<style>
.banner {
  background-image: url("/imgs/banner.png");
}
</style>
