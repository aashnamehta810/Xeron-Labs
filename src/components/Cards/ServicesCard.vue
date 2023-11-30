<template>
  <div
    class="custom-service-card-box w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 px-[8px] sm:px-[15px]"
  >
    <a
      :href="'/services/?tab=' + service.link"
      class="flex items-center justify-center flex-col h-[230px] rounded-[9px] bg-[#EEF2FF] px-[20px] py-[46px] text-center"
    >
      <span class="image-box mb-4 block">
        <img class="" :src="service.img" alt="" />
      </span>
      <span class="content-box block">
        <h4 class="w-full text-night text-[18px] xl:text-[20px] font-medium">
          {{ service.name }}
        </h4>
      </span>
    </a>
  </div>
</template>

<script setup>
const props = defineProps(["service"]);
</script>
