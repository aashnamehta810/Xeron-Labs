<template>
  <div class="hero-width-parent-container flex-row">
    <div
      class="mobile-nav-child-even lg:lg-child-container pt-[91px] pb-[40px]"
    >
      <p class="tracking-[3.08px] text-dark-blue text-[14px] font-medium">
        OUR SERVICES
      </p>
      <p class="h1 text-night mt-[50px]">Full Spectrum of Testing Services</p>
      <div
        class="flex items-center w-full justify-between flex-col lg:flex-row"
      >
        <p class="inline-flex base lg:max-w-[60%] opacity-80">
          At Xeron Labs, we offer a wide range of testing services to meet the
          needs of both providers and patients. Our services include, but not
          limited to:
        </p>
        <div
          @click="router.push('/services')"
          class="flex lg:inline-flex cta-text text-dark-blue gap-3 items-center self-start lg:self-end cursor-pointer pt-4 lg:pt-0"
        >
          View Full Test Directory
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
        </div>
      </div>
    </div>
  </div>

  <div class="nav-width-parent-container bg-white">
    <div
      class="flex flex-row flex-wrap items-center justify-start gap-y-[20px] sm:gap-y-[34px] flex-shrink-0 -mx[8px] sm:-mx-[15px]"
    >
      <services-card
        v-for="(item, index) in services"
        :key="index"
        :service="item"
      />
    </div>
  </div>

  <div class="hero-width-parent-container">
    <hr class="mt-[97.5px] w-full" />
  </div>

  <div
    class="nav-width-parent-container lg:flex-row justify-between items-stretch py-[86.5px]"
  >
    <div class="mobile-nav-child-even flex flex-col lg:w-7/12">
      <p class="text-[36px] font-naga -leading-[.72px] text-night">
        20+ Years of Quality Service
      </p>
      <p class="base opacity-80">
        At Xeron Labs, we understand the importance of timely and accurate test
        results. That's why we've invested in the latest technology and
        assembled a team of experts to provide you with the best possible
        experience.
      </p>
      <button
        @click="router.push('/about/values')"
        class="cta bg-dark-blue text-white w-[141px] mt-12 mb-20 lg:mt-auto lg:mb-0"
      >
        Our Values
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

    <div class="mobile-nav-child-even flex flex-col h-full lg:w-3/12">
      <p class="text-[24px] font-naga -leading-[.48px] text-night">
        Quick Actions
      </p>
      <div
        @click="router.push('/dev')"
        v-for="(items, index) in quickActions"
        :key="index"
        :class="[
          index < quickActions.length - 1 ? 'border-b-[1px] border-black' : '',
        ]"
        class="text-light-blue py-[27px] flex w-full justify-between font-medium cursor-pointer"
      >
        {{ items }}
        <svg
          aria-hidden="true"
          class="w-[19px] h-[19px]"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServicesCard from "@/components/Cards/ServicesCard.vue";
import { services } from "@/data/services.js";
import { useRouter } from "vue-router";

const router = useRouter();
const quickActions = [
  "Order Supplies",
  "Test Menu",
  "Provider Sign in",
  "Patient Sign in",
];
</script>
