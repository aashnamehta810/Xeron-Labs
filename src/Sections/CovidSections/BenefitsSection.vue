<template>
  <div class="mobile-nav-child-even flex flex-col lg:nav-child pt-[127px] gap-12 lg:gap-[36px]">
    <p class="text-center h1 lg:my-0">
      Benefits of Using Our Laboratory
    </p>
    <div class="lg:h-[391px] rounded-[20px] bg-[#DDE1EE]/[0.35] flex justify-between items-center lg:px-[115px] relative">
      <div class="flex flex-col gap-[14px] pl-4 py-16 ">
        <p class="h2 text-night opacity-100 w-8/12 lg:w-full">
          High-Tech Equipment
        </p>
        <p class="base w-7/12 lg:w-full">
          Our laboratory is equipped with state-of-the-art technology and staffed by experienced professionals to ensure
          accurate and reliable results and support public health efforts, providing peace of mind for those seeking
          testing.
        </p>
      </div>
      <img
          class="absolute bottom-0 -right-4 lg:relative"
          src="/imgs/covid/lady.png" alt="">
    </div>
    <div class="w-full grid lg:grid-cols-2 gap-[74px]">
      <trait-cards :align-left="true" v-for="(item, index) in sectionsInfo" :key="index" :item="item" />
    </div>
  </div>

  <hr class="my-20 lg:hidden" />
</template>

<script setup>


import TraitCards from "@/Sections/SharedSections/TraitCards.vue";

const sectionsInfo = [
  {
    img: "/imgs/covid/microscope.png",
    title: "Fast Turnaround Time",
    desc: "We understand the importance of timely results, which is why we strive to provide results as quickly as " +
        "possible. Many of our tests have a rapid turnaround time, and we also offer online reporting for easy access" +
        "to results."
  },
  {
    img: "/imgs/covid/handshake.png",
    title: "Insurance Accepted",
    desc: "We accept most insurance plans and work with a variety of providers to ensure that our patients have access" +
        " to affordable, high-quality testing."
  },
]
</script>