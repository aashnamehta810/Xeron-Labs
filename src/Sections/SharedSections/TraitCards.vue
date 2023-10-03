<template>
  <div class="w-full flex flex-col">
    <img
        class="w-full"
        :src="item.img"
        alt="">
    <p
        :class="[alignLeft ? 'ml-4 lg:ml-0': 'ml-4 lg:ml-12']"
        class="mt-9 font-naga text-[24px] lg:text-[30px] -tracking-[.6px] text-night ">
      {{ item.title }}
    </p>
    <p
        :class="[alignLeft ? 'ml-4 lg:ml-0': 'ml-4 lg:ml-12']"
        class="mt-4 lg:mt-[1px]">
      {{ item.desc }}
    </p>
  </div>
</template>

<script setup>

const props = defineProps(['item', 'alignLeft'])
</script>
