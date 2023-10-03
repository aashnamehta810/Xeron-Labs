<template>
  <div class="nav-width-parent-container mt-16 lg:flex-row gap-12 lg:gap-[125px] items-center overflow-x-clip">
    <img
        alt=""
        class="order-2 lg:order-1 lg:w-1/2"
        src="/imgs/clientele/team.png"
    >
    <div class="flex flex-col gap-[107px] mobile-nav-child-even order-1">
      <div v-for="(item, index) in teamItems" :key="index" class="flex flex-col">
        <div class="h2 lg:w-8/12 relative pl-2 lg:pl-0">
          {{ item.heading }}
          <div class="flex absolute top-2 lg:top-1/2 lg:-translate-y-1/2 -left-2 lg:-left-[30px] w-0 h-[65px]
          border-[2px] lg:border-[3px] border-dark-blue "/>

        </div>
        <p class="base pl-4 lg:pl-0">{{ item.desc }}</p>
      </div>
    </div>
  </div>
  <div class="nav-width-parent-container mt-[115px] lg:flex-row gap-12 lg:gap-[125px] items-center overflow-x-clip">
    <img
        alt=""
        class="lg:w-1/2 order-2"
        src="/imgs/clientele/old_lady.png"
    >
    <div class="flex flex-col gap-12 lg:gap-[107px] lg:ml-20 mobile-nav-child-even">
      <div v-for="(item, index) in ladyCareItems" :key="index" class="flex flex-col">
        <div class="h2 lg:w-10/12 relative pl-2 lg:pl-0">
          {{ item.heading }}
          <div
              class="flex absolute top-2 lg:top-1/2 lg:-translate-y-1/2  -left-2 lg:-left-[30px] w-0 h-[65px]
              border-[2px] lg:border-[3px] border-dark-blue"/>

        </div>
        <p class="base pl-4 lg:pl-0">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const teamItems = [
  {
    heading: "Physician Offices / Clinics",
    desc: "Testing services for patients of physician offices and clinics."
  },
  {
    heading: "Urgent Care",
    desc: "Fast and reliable testing services for urgent medical needs."
  },
]

const ladyCareItems = [
  {
    heading: "Inpatient/Outpatient Behavioral Health",
    desc: "Testing services for behavioral health patients, both inpatient and outpatient."
  },
  {
    heading: "Long Term Care / Assisted Living",
    desc: "Quality testing services for residents of long-term care and assisted living facilities."
  },
]
</script>
