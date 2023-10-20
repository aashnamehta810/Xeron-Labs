<template>
  <div class="nav-width-parent-container xl:hero-width-parent-container xl:px-[220px] 3xl:px-[302px] lg:mt-[137px]">

    <div class="w-full  grid lg:grid-cols-2 gap-x-[73px] gap-y-[41px]">
      <trait-cards
          v-for="(item, index) in firstBatch"
          :key="index"
          :align-left="true"
          :item="item"
      />
    </div>

    <hr class="my-16 lg:hidden">

    <div class="flex max-w-full mt-0 lg:mt-[67px] ">
      <div
          id="parentDiv"
          @scroll="handleScroll"
          class="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-7 overflow-x-scroll lg:overflow-clip lg:w-full  py-5">
        <trait-cards
            v-for="(item, index) in secondBatch"
            :key="index"
            :align-left="true"
            :item="item"
            class="w-[70vw] lg:w-full flex-shrink-0"
        />


      </div>
    </div>
    <div class="flex lg:hidden items-center gap-3 mt-4 self-center">
      <div
          v-for="(item, index) in secondBatch"
          :class="[(index-1)/(secondBatch.length-1) * 100 < state.scrolledPercentage ? 'bg-dark-blue': 'bg-dark-grey' ]"
          class="w-2 h-2  rounded-full"
      />
    </div>

    <hr class="my-20 lg:hidden">


    
    <div class="py-10 lg:mt-[83px] lg:pl-8 w-full flex flex-col 2xl:flex-row items-start 2xl:items-center gap-10 2xl:gap-[83px]">
      <img :src="drug_item.img" alt="">
      <div class="flex flex-col gap-[11px]">
        <p class="text-[30px]  font-naga text-night -tracking-[.6px]">Drug Screening</p>
        <p class="base">
          Our hematology laboratory provides a range of tests to assess your blood and blood-forming tissues. From complete blood counts to coagulation studies, we use the latest techniques to help diagnose and treat a variety of conditions.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed, reactive} from "vue";
import TraitCards from "@/Sections/SharedSections/TraitCards.vue";


const state = reactive({
  scrolledPercentage: 0
})

const handleScroll = (evt)=>{
  let parentDiv = document.getElementById("parentDiv")


  let scrollWidth = parentDiv.scrollWidth
  let scrolledDistance = parentDiv.scrollLeft

  let scrolledPercentage = (scrolledDistance / scrollWidth )* 100

  state.scrolledPercentage = scrolledPercentage
}

const testingServices = [
  {
    id: 0,
    img: "/imgs/services/general_testing/general_testing.png",
    title: "General Testing",
    desc: "Our general testing services cover a wide range of procedures, from routine blood tests to comprehensive" +
        " health panels. Our team of experts uses state-of-the-art equipment and techniques to deliver accurate and" +
        " reliable results, helping you stay on top of your health."
  },
  {
    id: 1,
    img: "/imgs/services/andrology/andrology.png",
    title: "Andrology",
    desc: "Our andrology laboratory specializes in male reproductive health, providing a range of tests to assess fertility, sexual function, and overall health. From sperm analysis to hormone testing, we use the latest techniques to diagnose and treat male infertility."
  },
  {
    id: 2,
    img: "/imgs/services/cytology/cytology.png",
    title: "Cytology",
    desc: "Our cytology laboratory provides expertise in the analysis of cells, helping diagnose cancer and other conditions. From Pap smears to fine needle aspirates, our team uses the most advanced techniques to ensure accurate results."
  },
  {
    id: 3,
    img: "/imgs/services/chemistry/chemistry.png",
    title: "Chemistry",
    desc: "Our chemistry laboratory provides a wide range of tests to assess your body's chemical balance. From electrolyte levels to liver function, our team uses advanced techniques to deliver results that help guide your treatment plan."
  },
  {
    id: 4,
    img: "/imgs/services/hematology/hematology.png",
    title: "Hematology",
    desc: "Our hematology laboratory provides a range of tests to assess your blood and blood-forming tissues. From complete blood counts to coagulation studies, we use the latest techniques to help diagnose and treat a variety of conditions."
  },
  {
    id: 5,
    img: "/imgs/services/molecular_virology/molecular_virology.png",
    title: "Molecular Virology",
    desc: "Our molecular virology laboratory specializes in the detection and analysis of viruses, including the novel coronavirus. Using real-time RT-PCR and other advanced techniques, we help diagnose and track the spread of viral infections."
  },
  {
    id: 6,
    img: "/imgs/services/endocrinology/endocrinology.png",
    title: "Endocrinology",
    desc: "Our endocrinology laboratory provides a range of tests to assess your hormones and metabolism. From thyroid function tests to glucose tolerance tests, we use the latest techniques to diagnose and treat endocrine disorders."
  },
  {
    id: 7,
    img: "/imgs/services/serology/serology.png",
    title: "Serology",
    desc: "Our serology laboratory provides tests to assess your immune system, including the detection of antibodies for a range of infectious diseases. Our team uses the most advanced techniques to deliver accurate results that help guide your treatment plan."
  },
  {
    id: 8,
    img: "/imgs/services/lead/lead.png",
    title: "Lead",
    desc: "Our lead testing services provide accurate and reliable results to assess exposure to lead, a toxic heavy metal that can cause serious health problems. Whether you are concerned about exposure in your home or workplace, we use the most advanced techniques to help ensure your safety."
  },
  {
    id: 9,
    img: "/imgs/services/drug_screening/drug_screening.png",
    title: "Drug Screening",
    desc: "Our hematology laboratory provides a range of tests to assess your blood and blood-forming tissues. From complete blood counts to coagulation studies, we use the latest techniques to help diagnose and treat a variety of conditions."
  },
]


const firstBatch = computed(() => testingServices.filter(item => item.id < 6))
const secondBatch = computed(() => testingServices.filter(item => item.id > 5 && item.id < 9))
const drug_item = computed(() => testingServices.find(item => item.id === 9))

</script>
