<template>
  <div class="w-full flex flex-col">
    <div
      class="image-box w-full h-[380px] bg-white rounded-[20px] overflow-hidden mb-4"
    >
      <img
        class="w-full h-full object-contain object-bottom"
        :src="item.img"
        alt="image"
      />
    </div>
    <h3 class="font-naga text-[24px] -tracking-[.32px] text-night mb-2">
      {{ item.title }}
    </h3>
    <p class="text-[16px] text-night opacity-80 mb-2">
      {{ item.designation }}
    </p>
    <!-- <a href="" class="read-more-btn text-[16px] text-dark-blue">
      {{ item.button }}
    </a> -->
  </div>
</template>

<script setup>
const props = defineProps(["item", "alignLeft"]);
</script>
