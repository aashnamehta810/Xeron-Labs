<template>
  <div
    class="hero-width-parent-container lg:nav-width-parent-container pt-[168px] bg-white"
  >
    <div
      class="flex w-full flex-col text-left mobile-nav-child-even text-center"
    >
      <p
        class="text-[14px] uppercase text-dark-blue tracking-[3.08px] font-medium"
      >
        Licenses, Certification & Accreditation
      </p>
      <p
        class="h1 mt-[53px] mb-8 2xl:mb-12 mx-auto w-full lg:w-2/3 xl:w-3/5 2xl:w-3/5 md:px-5 tracking-[-0.96px] leading-[50px]"
      >
        Setting the Standard for excellence and trusted by leading physicians.
      </p>

      <div
        class="certification-images-block flex flex-wrap justify-center -mx-[15px] gap-y-[30px]"
      >
        <div
          class="certification-img-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]"
          v-for="(vImg, index) in licenses"
          :key="index"
        >
          <div class="h-[92px] flex items-center justify-center">
            <img :src="vImg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const licenses = [
  "/imgs/licenses-certification/certification-img1.svg",
  "/imgs/licenses-certification/certification-img2.svg",
  "/imgs/licenses-certification/certification-img3.svg",
  "/imgs/licenses-certification/certification-img4.svg",
  "/imgs/licenses-certification/certification-img5.svg",
  "/imgs/licenses-certification/certification-img6.svg",
  "/imgs/licenses-certification/certification-img7.svg",
];
</script>
