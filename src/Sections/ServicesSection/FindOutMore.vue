<template>
  <div class="hero-width-parent-container lg:px-[220px] 3xl:px-[302px]">
    <div
        class="mobile-nav-child-even flex bg-[#DDE1EE] mt-14 flex-col lg:flex-row items-start lg:items-center rounded-[20px] gap-8 relative
        border-b-4 border-dark-blue gap-8 py-14 lg:py-[29px]  lg:px-[65px]">
      <p class="font-naga text-[30px] -tracking-[.6px] text-night whitespace-nowrap">Find out more</p>
      <p class="base opacity-100">
        Reach out to us for any questions you have about our services or testing options. Or, if you have any questions
        about our services or testing procedures.
      </p>
      <button
          @click="router.push('/about/contactus')"
          class="cta h-[42px] bg-dark-blue text-white whitespace-nowrap  justify-between">
        Contact us
        <svg
            aria-hidden="true"
            class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </div>

  <hr class="my-20 lg:hidden">
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>
