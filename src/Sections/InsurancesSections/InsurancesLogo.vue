<template>
  <div
      class="nav-width-parent-container mb-8 lg:mt-[103px] lg:mb-[228px] grid grid-cols-2  lg:grid-cols-4 place-items-center
      gap-y-12 lg:gap-x-[179px] lg:gap-y-[149px]">
    <img
        class="w-24 lg:w-full"
        v-for="item in companies"
        :key="item"
        :src="item"
        alt="">
  </div>

  <div class="nav-width-parent-container">
    <p class="text-2xl font-naga lg:h1 mobile-nav-child-even">See the complete list below.</p>
    <div class="grid lg:grid-cols-3 gap-[100px] mt-4 lg:mt-12 pl-8 pr-2 lg:px-0">
      <div class="flex flex-col gap-1">
        <p
            v-for="item in list1"
            :key="item"
            class="text-[18px] tracking-[0px] text-[#707070]">{{ item }}</p>
      </div>
      <div class="flex flex-col gap-1">
        <p
            v-for="item in list2"
            :key="item"
            class="text-[18px] tracking-[0px] text-[#707070]">{{ item }}</p>
      </div>
      <div class="flex flex-col gap-1">
        <p
            v-for="item in list3"
            :key="item"
            class="text-[18px] tracking-[0px] text-[#707070]">
          {{ item }}
        </p>
        <p class="text-[18px] tracking-[0px] text-[#707070] mt-auto">*This list is subject to change.</p>
      </div>

    </div>
  </div>

</template>

<script setup>

const companies = [
  '/imgs/insurances/aethna.png',
  '/imgs/insurances/affinity.png',
  '/imgs/insurances/amida.png',
  '/imgs/insurances/centers.png',
  '/imgs/insurances/cigna.png',
  '/imgs/insurances/emblem.svg',
  '/imgs/insurances/empire.svg',
  '/imgs/insurances/fidelis.png',
  '/imgs/insurances/globe_life.png',
  '/imgs/insurances/elder-serve.png',
  '/imgs/insurances/health_first.svg',
  '/imgs/insurances/highmark.png',
  '/imgs/insurances/humana.png',
  '/imgs/insurances/blue_cross.png',
  '/imgs/insurances/champva.png',
  '/imgs/insurances/molina.png',
  '/imgs/insurances/assurant.png',
  '/imgs/insurances/oscar.png',
  '/imgs/insurances/united.png',
  '/imgs/insurances/oxford.png',
]


const list1 = [
  "Aetna (all plans)",
  "Affinity Medicaid Plan & Medicare Adv",
  "AIG W/C",
  "American Postal Workers(APWU)",
  "Amida Care Medicaid",
  "Center Light Healthcare Centers Plan for Healthy Living",
  "CIGNA (Out of Network)",
  "Elder Plans",
  "ElderServe",
  "Emblem Health, GHI, HIP",
  "Empire BCBS Health Plus/Ind Care Sys",
  "Empire BCBS Medicare Adv",
  "Empire BCBS of NY (PPO only)",
  "EMPIRE HealthPlus",
  "Fidelis Care Medicaid",
  "Globe Life",
  "Golden Rule ",
  "Group Health Inc (GHI)",
  "HealthCare Partners",
  "Healthfirst Medicare",
  "Healthfirst Medicare Care Complete",
  "Healthfirst NY MA Personal Wellness",
  "Healthfirst NY MA Senior Health",
  "Healthfirst NY Medicaid Healthfirst Commercial",
  "Highmark BC/BS PPO",
  "HIP OF NY/Emblem Health",
  "Humana MCR",
  "Independence Care System.",
]


const list2 = [
  "Lifestyle Health Plans",
  "LOCAL 1 Multiplan",
  "MagnaCare",
  "Medicare Medicare",
  "Replacement Plans (All)",
  "MetroPlus Enhanced without HBCS",
  "MetroPlus Medicare Adv & Medicaid",
  "Montefiore CMO",
  "Motor Vehicle Insurance (accidents)",
  "MultiPlan",
  "MVP Health Plan of NY",
  "NY Medicare",
  "Optimum Choice",
  " Oxford ",
  "Oxford Health Plan (UHC)",
  "Quality Health Plan",
  "Railroad Federal (RR Employees)",
  "Railroad Medicare",
  "Senior Whole Health of NY",
  "UHC AARP Medicare Complete",
  "UHC Community Plan of NY",
  "UHC Commercial",
  "UHC Dual Comp NY MCR REP",
  "UHC Empire Plan",
  "United Healthcare Charter Plus",
  "United Healthcare Community (All)",
  "United Healthcare Compass Plus",
  "United Healthcare HMO (All) United",
  "Healthcare - UMR",
]


const list3 = [
  "United Healthcare Charter (All)",
  "United Healthcare Charter Balanced",
  "United Healthcare Choice-eff. 11/1/16",
  "(PA/NJ/CT/NY ONLY)",
  "United Healthcare Choice (All other states)",
  "United Healthcare Choice Plus-eff.",
  "11-1-16 United Healthcare Comm of NY",
  "United Healthcare Compass (AII)",
  "United Healthcare Compass Balanced",
  "United Healthcare Core Essential",
  "United Healthcare Medicare Solutions",
  "(Medicare Replacement)",
  "United Healthcare Navigate (All)",
  "United Healthcare Navigate Balanced",
  "United Healthcare Core (All)",
  "United Healthcare Navigate Plus",
  "Village Senior Services (VL plan)",
  "VNS Choice Medicare",
  "WellCare Medicare & Medicald",
  " Workers Comp",
]
</script>


