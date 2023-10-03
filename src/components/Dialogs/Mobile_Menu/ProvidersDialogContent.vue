<template>
  <div class="flex flex-col w-full pl-6 pt-8">
    <div
        @click="emits('home')"
        class="flex w-full py-4 text-xl text-brown items-center gap-2 border-b-2 relative">
      <svg
          aria-hidden="true"
          class="w-4 h-4 text-charcoal absolute -left-6" fill="none" stroke="currentColor" stroke-width="3.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      For Providers
    </div>

    <p class="text-xl font-naga py-6 border-b-2">Our Online Portal</p>

    <div class="flex flex-col w-full divide-y-2">
      <a
          :href="item.url"
          target="_blank"
          v-for="item in items"
          :key="item.name"
          class="flex w-full items-center justify-between py-4">
        <p class="text-light-blue font-medium">{{ item.name }}</p>
        <svg
            v-if="item.chevron"
            aria-hidden="true"
            class="w-3 h-3 text-brown" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>

  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const emits = defineEmits(['home'])

const items = [
  {
    name: "Order a Test",
    chevron: true,
    url: ''
  },
  {
    name: "Provider Sign in",
    chevron: true,
    url: 'https://xeron.safemedicaldata.com'
  },


]


</script>
