<template>
  <div class="nav-width-parent-container lg:mb-[186px]">
  <div class="nav-child px-10 lg:flex-row lg:mt-[119px] justify-between">
    <div class="flex flex-col gap-12 3xl:gap-[83px] lg:w-4/12">
      <p class="text-[14px] tracking-[3.08px] text-dark-blue font-medium">ABOUT US</p>
      <p class="h1">
        Committed to Providing the Best Experience
      </p>
    </div>
    <div class="flex flex-col justify-between lg:w-6/12">
      <p class="base mt-12 lg:mt-0">
        Xeron Labs is a full-service laboratory that has been serving the community for over 20 years. Our team of
        experienced technicians and medical professionals are dedicated to providing you with the highest level of
        service and care. We understand the importance of accurate test results and are committed to ensuring that you
        receive them in a timely manner.
      </p>
      <button
          @click="router.push('/about/values')"
          class="cta h-[42px w-[143px] bg-dark-blue text-white whitespace-nowrap  justify-between">
        Learn more
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
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

</script>
