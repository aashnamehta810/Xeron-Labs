<template>
    <div class="mobile-nav-child-even cont w-full lg:px-[245px] 3xl:px-[343px] pt-[57px] flex flex-col">
      <p class="base lg:text-[18px] tracking-[0px] lg:font-medium lg:text-center lg:w-8/12 self-center pl-6 lg:pl-0">
        Xeron has multiple patient service centers, offering convenient access to testing services for individuals
        across the region.
      </p>
        <hr class="mt-12 lg:hidden">
      <div class="grid lg:grid-cols-2 gap-10 mt-[26px]">
        <div
            v-for="item in locations"
            :key="item.name"
            class="flex flex-col px-[35px] py-[33px] rounded-[11px] border-[1px] border-[#D8DCEA]">
            <div class="flex w-full h-[150px]">
              <render-map :center="{lat: item.lat, lng:item.lng}" />
            </div>
          <p class="text-night h2 mt-[30px]">{{item.name}}</p>
          <div class="flex items-center gap-2">
            <img
                class="w-4 h-4 lg:w-full lg:h-[21px]"
                src="/imgs/contactus/location_arrow.svg" alt="">
            <p class="text-sm lg:base text-[#444650]">{{item.location}}</p>
          </div>
          <p class="text-shade text-[16px] opacity-[0.66] uppercase mt-3">Hours:</p>
          <hr class="mb-[28px]">

          <div class="flex flex-col gap-2 w-full">
            <div :key="hour.days" v-for="hour in item.hours" class="grid grid-cols-2">
              <p class="text-xs lg:base text-shade opacity-100 font-semibold">{{hour.days}}</p>
              <p class="text-xs lg:base text-shade text-left">{{hour.time}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

</template>

<script setup>
import RenderMap from "@/components/Maps/RenderMap.vue";
import {locations} from "@/data/locations.js";

</script>




