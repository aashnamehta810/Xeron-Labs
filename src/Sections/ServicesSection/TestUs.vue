<template>
  <div class="cont bg-[#F8FAFD] lg:mt-[98px]">
    <div class="hero-width-parent-container lg:pl-[252px] 3xl:pl-[334px] lg:flex-row gap-9 pt-[112px] pb-[84px] items-center">
      <div class="flex flex-col w-full gap-4 order-2 lg:order-1 pl-5 lg:pl-0">
        <p class="font-naga text-night text-[30px] lg:text-[60px] -tracking-[1.2px] w-full">Put us to the test.</p>
        <p class="base text-black">
          At our laboratory, we believe that access to comprehensive and reliable testing should be available to
          everyone. That's why we're committed to providing customized services that make it easy and convenient for you
          to get the tests you need when you need them. Whether you're a new or returning patient, we're here to support
          you every step of the way.
        </p>
        <button
            @click="router.push('/about/values')"
            class="cta h-[42px] mt-14 w-[143px] bg-dark-blue text-white whitespace-nowrap  justify-between">
          Learn more
          <svg
              aria-hidden="true"
              class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
      <img
          class="bg-blue-gradient rounded-[20px] order-1 lg:order-2"
          src="/imgs/services/handshake.png" alt="">
    </div>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
</script>
