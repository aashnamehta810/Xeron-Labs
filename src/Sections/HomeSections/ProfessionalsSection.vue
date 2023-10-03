<template>
  <div class="hero-width-parent-container flex-col lg:flex-row justify-between lg:px-[220px] 3xl:px-[302px] gap-[74px]
   mt-[90px]">
    <trait-cards v-for="(item, index) in sectionsInfo" :key="index" :item="item"/>
  </div>
</template>

<script setup>


import TraitCards from "@/Sections/SharedSections/TraitCards.vue";

const sectionsInfo = [
  {
    img: "/imgs/pros.png",
    title: "Highly Trained Professionals",
    desc: "Our laboratory is staffed by highly trained and experienced professionals who are dedicated to providing" +
        " accurate and reliable results. Our team is available to answer any questions or concerns that providers may have."
  },
  {
    img: "/imgs/microscope.png",
    title: "High-Tech Equipment",
    desc: "We use state-of-the-art equipment and technology to ensure accurate and reliable results. Our equipment is" +
        " regularly maintained and calibrated to ensure optimal performance."
  },
]

</script>
