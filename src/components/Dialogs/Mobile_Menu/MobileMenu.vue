<template>
  <div
      :class="[(state.currentContent === 'about' || state.currentContent=== 'providers' ? 'border-b-4 border-b-dark-blue': ''),
      (state.currentContent === 'patients' ? 'border-b-4 border-b-teal': ''),
      ]"
      class="fixed left-1/2 -translate-x-1/2 top-2 flex flex-col w-[95vw] shadow-2xl bg-white z-50 py-[37px] px-3
      rounded-xl border-[1px] border-dark-grey">
    <div class="flex w-full justify-between">
      <img
          alt=""
          class="h-8 3xl:w-[194px] mr-[57px]" src="/imgs/xeron_logo.svg" @click="router.push('/')">
      <button
          class="bg-charcoal text-white cta px-4 rounded-xl h-[38px]"
          @click="emits('toggleMenu')">
        Close
      </button>
    </div>

    <home-dialog-content
        v-if="state.currentContent === 'home'"
        @about="state.currentContent = 'about'"
        @patients="state.currentContent = 'patients'"
        @providers="state.currentContent = 'providers'"
    />
    <about-dialog-content
        v-if="state.currentContent === 'about'"
        @home="state.currentContent = 'home'"
    />
    <patients-dialog-content
        v-if="state.currentContent === 'patients'"
        @home="state.currentContent = 'home'"/>
    <providers-dialog-content
        v-if="state.currentContent === 'providers'"
        @home="state.currentContent = 'home'"
    />

  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import HomeDialogContent from "@/components/Dialogs/Mobile_Menu/HomeDialogContent.vue";
import {reactive, watch} from "vue";
import AboutDialogContent from "@/components/Dialogs/Mobile_Menu/AboutDialogContent.vue";
import PatientsDialogContent from "@/components/Dialogs/Mobile_Menu/PatientsDialogContent.vue";
import ProvidersDialogContent from "@/components/Dialogs/Mobile_Menu/ProvidersDialogContent.vue";

const emits = defineEmits(['toggleMenu'])


const state = reactive({
  currentContent: "home"
})


const router = useRouter()
const route = useRoute()


watch(() => route.path, () => {
  emits('toggleMenu')
})

</script>
