<template>
  <div
      class="hidden lg:flex dialog absolute flex-row w-[700px] h-[220px]  items-center bg-white border-t-dark-blue px-[41px]
       gap-[60px] top-[80px] right-0  z-20 shadow-[#9ca0a68f] shadow-2xl">
    <div class="flex flex-col w-1/2">
      <p class="text-[14px] tracking-[3.08px] text-dark-blue font-medium">
        FOR PROVIDERS
      </p>
      <p class="h2 tracking-[0px] mt-[31px] w-8/12">
        Our Online Portal
      </p>
    </div>

    <div class="flex flex-col gap-[20px] self-center">
      <a
          :href="item.url"
          target="_blank"
          v-for="item in links"
          :key="item.url"
          class="text-light-blue text-[18px] tracking-[.36px] font-medium cursor-pointer"
          @click="handleClick">{{ item.name }}</a>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";


const router = useRouter()
const emits = defineEmits(['close'])


const links = [
  {
    name: 'Order a Test',
    url: ''
  }, {
    name: 'Provider Sign in',
    url: 'https://xeron.safemedicaldata.com'
  }
]


const handleClick = () => {
  emits('close')
}


</script>

