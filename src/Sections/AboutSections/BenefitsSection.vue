<template>
  <div class="hero-width-parent-container lg:mt-[133px]">
    <div class="lg:lg-child-container">
      <p class="text-center h1 mb-10 lg:mb-5">Benefits of Using Our Laboratory</p>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-[74px]">
        <trait-cards v-for="(item, index) in sectionsInfo" :key="index" :item="item" />
      </div>

    </div>
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
  {
    img: "/imgs/about/sample.png",
    title: "Fast Turnaround Time",
    desc: "We understand the importance of timely results, which is why we strive to provide results as quickly as " +
        "possible. Many of our tests have a rapid turnaround time, and we also offer online reporting for easy access" +
        "to results."
  },
  {
    img: "/imgs/about/handshake.png",
    title: "Insurance Accepted",
    desc: "We accept most insurance plans and work with a variety of providers to ensure that our patients have access" +
        " to affordable, high-quality testing."
  },
]
</script>