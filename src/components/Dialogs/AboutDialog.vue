<template>
    <div @click.stop=""
         class="hidden lg:flex dialog flex-row w-[672px] items-center bg-white  border-t-dark-blue
         px-[41px] pt-[30px] pb-[40px] gap-[60px] absolute top-[110px] left-[15%] 3xl:left-[30%] shadow-[#9ca0a68f] shadow-2xl">
      <div class="flex flex-col w-1/2">
        <p class="text-[14px] tracking-[3.08px] text-dark-blue font-medium">ABOUT US</p>
        <p class="h2 tracking-[0px] mt-[31px]">
          Committed to Providing the Best Results
        </p>
        <p class="text-[16px] opacity-[0.54] text-black mt-[41px] w-9/12">
          Manage Your Testing from the Comfort of Your Home Our Online Portal
        </p>
      </div>

      <div class="flex flex-col gap-[30px]">
        <p
            @click="handleClick(item.url)"
            v-for="item in links"
            :key="item.url"
            class="text-light-blue text-[18px] tracking-[3.08px] font-medium cursor-pointer">{{item.name}}</p>
      </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const emits = defineEmits(['close'])
const links = [
  {
    name: 'Our Values',
    url: 'values'
  },  {
    name: 'Insurances',
    url: 'insurances'
  },  {
    name: 'Careers',
    url: 'careers'
  },  {
    name: 'Contact us',
    url: 'contactus'
  },
]


const handleClick = (url) =>{
  router.push(`/about/${url}`)
  emits('close')
}



</script>

