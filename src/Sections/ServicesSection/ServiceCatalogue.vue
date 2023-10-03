<template>
  <div
      class="nav-width-parent-container grid grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:items-center
      lg:justify-center gap-4 lg:gap-x-[1.3%] gap-y-[25px] bg-white flex-shrink-0 mt-11">
    <services-card
        v-for="(item, index) in services"
        :key="index"
        :service="item"/>
  </div>
  <hr class="mt-16 lg:hidden">
</template>

<script setup>
import {services} from "@/data/services.js";
import ServicesCard from "@/components/Cards/ServicesCard.vue";
</script>