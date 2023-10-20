<template>
  <div class="custom-service-card-box w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 px-[8px] sm:px-[15px]">
    <div
      class=" flex items-center justify-end flex-col h-[230px] rounded-[9px] bg-[#EEF2FF] px-[20px] py-[46px] text-center"
    >
      <div class="image-box mb-4">
        <img
          class=""
          :src="service.img"
          alt=""
        />
      </div>
      <div class="content-box">
        <h4 class="w-full text-night text-[18px] xl:text-[20px] font-medium">
          {{ service.name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["service"]);
</script>
