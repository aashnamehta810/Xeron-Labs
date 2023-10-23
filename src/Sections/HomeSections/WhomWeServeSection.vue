<template>
  <div
    class="hero-width-parent-container lg:nav-width-parent-container pt-[100px] pb-[71px] bg-white"
  >
    <div
      class="flex w-full flex-col text-left mobile-nav-child-even text-center"
    >
      <p
        class="text-[14px] uppercase text-dark-blue tracking-[3.08px] font-medium"
      >
        WHOM WE SERVE
      </p>
      <p
        class="h1 mt-[53px] mb-8 2xl:mb-12 mx-auto w-full lg:w-2/3 xl:w-3/5 2xl:w-1/2 tracking-[-0.96px] leading-[50px]"
      >
        Advancing Quality Care in in Every Medical Environment
      </p>

      <div class="serve-grid-block flex flex-wrap -mx-[15px] gap-y-[27px]">
        <div
          v-for="(item, index) in servePoints"
          :key="index"
          class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]"
        >
          <div class="item-box" v-html="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const servePoints = [
  "Primary Care Physicians",
  "Family Clinics",
  "Skilled Nursing Facilities",
  "Assisted Living Facilities",
  "Inpatient/Outpatient <br> Behavioral Health",
  "Urgent Cares",
  "Workplace Testing <br> Employee Screening",
  "Specialists & Physicians",
];
</script>
