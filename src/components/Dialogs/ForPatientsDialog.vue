<template>
  <div
      class="hidden lg:flex dialog absolute flex-row w-[700px] h-[333px]  items-center bg-white border-t-teal px-[41px]
       gap-[60px] top-[80px] right-0 z-20 shadow-[#9ca0a68f] shadow-2xl"
       @click.stop="">
    <div class="flex flex-col w-1/2">
      <p class="text-[14px] tracking-[3.08px] text-dark-blue font-medium">FOR PATIENTS</p>
      <p class="h2 tracking-[0px] mt-[31px] w-8/12">
        Our Online Portal
      </p>
      <p class="text-[16px] opacity-[0.54] text-black mt-[21px] w-8/12">
        Manage Your Testing from the Comfort of Your Home Our Online Portal
      </p>
    </div>

    <div class="flex flex-col gap-[20px] self-center">
      <p
          v-for="item in links"
          :key="item.url"
          class="text-light-blue text-[18px] tracking-[.36px] font-medium cursor-pointer"
          @click="handleClick(item.url)">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const emits = defineEmits(['close'])
const links = [
  {
    name: 'Covid Test Results',
    url: '/covid'
  }, {
    name: 'Patients Service Centers',
    url: '/patients/centers'
  }, {
    name: 'Patient Information',
    url: '/dev'
  }, {
    name: 'Pay a Bill',
    url: '/dev'
  },
]


const handleClick = (url) => {
  router.push(url)
  emits('close')
}


</script>

