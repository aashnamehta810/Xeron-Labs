<template>
  <div class="hero-width-parent-container pt-[95px] pb-[56px]">
    <div class="lg-child-container">
      <div class="flex flex-wrap flex-col text-center items-center">
        <div class="flex flex-col gap-y-3.5 lg:w-6/12 mb-7">
          <p class="h2 text-night w-full">Insurance Accepted</p>
          <p class="base">
            We accept most insurance plans and work with a variety of providers to ensure that our patients
            have access to affordable, high-quality testing.
          </p>
        </div>
        <button
            class="hidden lg:flex cta bg-dark-blue text-white w-40  justify-center gap-x-4"
            @click="router.push('/about/insurances')">
          See all
          <svg
              aria-hidden="true"
              class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="flex w-full overflow-x-scroll px-2 lg:overflow-x-clip lg:nav-width-parent-container ">
    <div class="flex flex-wrap gap-12 3xl:gap-[50px] 3xl:gap-[79px] min-w-[1024px] lg:min-w-full lg:items-center
    lg:justify-center py-4">
      <img
          v-for="(img_name, index) in companies"
          :key="index"
          :src="`/imgs/companies/${img_name}`"
          alt=""
          class="flex-shrink-0 w-24 lg:w-28 object-contain">
    </div>

  </div>
  <button
      @click="router.push('/about/insurances')"
      class="flex lg:hidden cta bg-dark-blue text-white w-28 mt-8 ml-10  justify-between">
    See all
    <svg
        aria-hidden="true"
        class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
</template>

<script setup>


import {useRouter} from "vue-router";

const router = useRouter()
const companies =
    [
      'aethna.png',
      'AmbetterHealth-Logo.png',
      'AMG_Logo.png',
      'anthem.png',
      'assurant-logo.png',
      'download.png',
      'champva.png',
      'cigna.png',
      'Logo.png',
      'Molina-logo.png',
      'Oscar_Logo_Blue.png',
      'oxford.png',
      'united.png'
    ]

</script>
