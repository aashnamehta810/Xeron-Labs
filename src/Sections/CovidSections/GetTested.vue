<template>
  <div class="px-5 lg:nav-child mt-24 lg:mt-0">
    <div
        class="h-80 lg:h-[167px] mobile-nav-child-even lg:px-[111px] flex flex-col lg:flex-row items-start
        lg:items-center justify-center mobile-nav-child-even lg:justify-between bg-teal rounded-[16px]  border-b-[6px]
        border-dark-blue gap-20 lg:gap-0">
      <p class="h2">
        Get tested for COVID-19
      </p>
      <button
          class="cta h-[42px] bg-dark-blue text-white whitespace-nowrap  justify-between"
          @click="router.push('/patients/centers')">
        Find your testing center
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
