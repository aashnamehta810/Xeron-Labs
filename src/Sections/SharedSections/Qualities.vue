<template>
  <div class="hero-width-parent-container mt-[94px] mb-[81px]">
    <div class="mobile-nav-child-even lg:lg-child-container">
      <p class="text-center h2 mb-[56px] lg:w-9/12 self-center">{{title}}</p>
      <div class="flex flex-col lg:flex-row lg:justify-around divide-y-2 lg:divide-y-0 lg:divide-x-2   w-full">
        <div
            v-for="(item, index) in differences"
            :key="index"
            class="flex flex-col w-full items-center px-8 py-12 lg:py-0 3xl:px-12">
          <img :src="item.img" alt="" class="h-[70px]">
          <p class="text-[24px] w-full text-center -tracking-[.48px] text-night font-naga mt-[38px]">{{item.title}}</p>
          <p class="base w-full text-center break-words">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['title'])

const differences = [
  {
    img: "/imgs/differences/Labs.svg",
    title: "Accurate Results",
    desc: "Highly precise and accurate results in accordance with industry standards and protocol"
  },
  {
    img: "/imgs/differences/Stats.svg",
    title: "Reliable Service",
    desc: "Consistent and dependable service, delivering results in a timely and efficient manner"
  },
  {
    img: "/imgs/differences/Success.svg",
    title: "Compassionate Care",
    desc: "We're dedicated to treating patients with kindness, respect, and a genuine concern for their well-being."
  },
]
</script>