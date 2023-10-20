<template>
  <div class="flex flex-col w-full pl-10 pr-4 pt-8 pb-[52px]">
    <div
        @click="emits('home')"
        class="flex w-full py-4 text-2xl tracking-[0.48px] leading-[29px] text-[#354352] items-center gap-2 border-b border-[#D4DBE1] relative">
      <svg
          aria-hidden="true"
          class="w-4 h-4 text-[#354352] absolute -left-[28px]" fill="none" stroke="#354352" stroke-width="3.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      About us
    </div>

    <p class="text-2xl leading-[28px] text-[#020001] font-naga pt-8 pb-5 border-b border-[#D4DBE1]">Committed to Providing the Best Results</p>

    <div class="flex flex-col w-full divide-y-[1px] divide-[#D4DBE1]">
      <div
          @click="item.action()"
          v-for="item in items"
          :key="item.name"
          class="flex w-full items-center justify-between py-[18px]">
        <p class="text-light-blue text-xl tracking-[0.4px] leading-[24px] font-medium">{{ item.name }}</p>
        <svg
            v-if="item.chevron"
            aria-hidden="true"
            class="w-4 h-4 text-[#354352] mr-3" fill="none" stroke="#354352" stroke-width="3.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const emits = defineEmits(['home'])

const items = [
  {
    name: "Our values",
    action: () => router.push("/about"),
    chevron: true
  },
  {
    name: "Insurances",
    action: () => router.push("/about/insurances"),
    chevron: true
  },
  {
    name: "Careers",
    action: () => router.push("/about/careers"),
    chevron: true
  },
  {
    name: "Contact us",
    action: () => router.push("/about/contactus"),
    chevron: true
  },

]


</script>
