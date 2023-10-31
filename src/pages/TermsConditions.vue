<template>
  <div
    class="flex flex-col mobile-nav-child-even lg:px-[305px] 3xl:px-[505px] py-[100px] 3xl:py-[143px] text-center w-full items-center"
  >
    <p class="font-medium text-[14px] tracking-[3.08px] text-dark-blue">
      WEBSITE UNDER DEVELOPMENT
    </p>
    <p
      class="text-[40px] lg:text-[68px] -tracking-[1.36px] font-naga text-night mt-[70px] leading-[70px] max-w-5xl"
    >
      Terms And Conditions
    </p>

    <p class="text-[18px] text-brown mt-[68px] max-w-3xl">Coming Soon ...</p>
    <p class="text-[18px] text-brown mt-12 max-w-3xl">
      Look out for updates and progress as we continue our journey towards
      launching our website. In the meantime, if you have any questions or
      comments, please don't hesitate to get in touch. We'd love to hear from
      you!
    </p>
    <button
      @click="router.push('/about/contactus')"
      class="cta h-[42px] w-[143px] bg-dark-blue text-white self-center mt-16"
    >
      Contact us
      <svg
        aria-hidden="true"
        class="h-[10px]"
        fill="none"
        stroke="currentColor"
        stroke-width="4.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
