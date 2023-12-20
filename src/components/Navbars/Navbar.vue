<template>
  <div class="header-main-block flex flex-col">
    <div class="nav-width-parent-container bg-[#1B4ACC] hidden xl:block">
      <div
        class="header-top-bar flex items-center justify-end text-right text-white min-h-[44px] py-2"
      >
        <div
          class="flex items-center justify-end flex-wrap gap-y-[14px] gap-x-[34px] ml-auto"
        >
          <router-link
            v-for="(item, index) in navTopLinks"
            :key="index"
            :to="item.link"
            @click="item.handler"
          >
            {{ item.text }}
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="nav-width-parent-container flex-row py-[32px] items-center w-full z-20"
    >
      <img
        alt=""
        class="h-[48px] mr-[40px] 2xl:mr-[64px]"
        src="/imgs/logo.svg"
        @click="router.push('/')"
      />
      <button
        @click="emits('toggleMenu')"
        class="flex xl:hidden cta bg-dark-blue text-white w-20 ml-auto"
      >
        Menu
      </button>
      <div class="hidden xl:flex items-center w-full gap-[20px]">
        <div
          ref="navRef"
          class="flex items-center gap-[20px] xl:gap-[20px] 2xl:gap-[30px] mr-auto"
        >
          <router-link
            v-for="(item, index) in navLinks"
            :key="index"
            :to="item.link"
            class="text-[14px] tracking-[.32px] whitespace-nowrap flex gap-1 items-center text-charcoal relative"
            @click="item.handler"
          >
            <div
              v-if="item.link === route.path"
              class="flex absolute w-9 h-0 border-2 border-dark-blue -bottom-2 left-1/2 -translate-x-1/2"
            />
            {{ item.text }}
            <div v-if="item.list" class="flex">
              <svg
                v-if="!state.isAboutDialogOpen"
                aria-hidden="true"
                class="w-[10px] self-center mt-1"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                v-else
                aria-hidden="true"
                class="w-[10px] self-center mt-1 text-dark-blue"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </router-link>
        </div>

        <div
          ref="btnDivRef"
          class="flex justify-end gap-x-[20px] xl:gap-x-[20px] 2xl:gap-x-[42px] ml-auto w-full relative"
        >
          <router-link
            v-for="(item, index) in navSecondNavLinks"
            :key="index"
            :to="item.link"
            class="text-[14px] tracking-[.32px] whitespace-nowrap flex gap-1 items-center text-charcoal relative"
            @click="item.handler"
          >
            {{ item.text }}
          </router-link>

          <button
            @click="router.push('/about/contactus')"
            class="text-base tracking-[0.32px] leading-[20px] bg-[#0A0A0B] w-[149px] h-[50px] rounded-md text-white whitespace-nowrap flex items-center justify-center"
          >
            Contact us
          </button>
          <!-- <button
            :class="[
              state.buttonDialogState === 'providers'
                ? 'bg-[#bcc6e0]'
                : 'bg-teal',
            ]"
            class="cta text-oil whitespace-nowrap flex items-center gap-1 justify-center"
            @click="
              state.buttonDialogState === 'patients'
                ? (state.buttonDialogState = '')
                : (state.buttonDialogState = 'patients')
            "
          >
            For Patients
            <svg
              v-if="state.buttonDialogState !== 'patients'"
              aria-hidden="true"
              class="w-[10px] self-center"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              v-else
              aria-hidden="true"
              class="w-[10px] self-center"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button
            :class="[
              state.buttonDialogState === 'patients'
                ? 'bg-[#bcc6e0]'
                : 'bg-dark-blue',
            ]"
            class="cta text-white whitespace-nowrap flex items-center gap-1 justify-center"
            @click="
              state.buttonDialogState === 'providers'
                ? (state.buttonDialogState = '')
                : (state.buttonDialogState = 'providers')
            "
          >
            For Providers
            <svg
              v-if="state.buttonDialogState !== 'providers'"
              aria-hidden="true"
              class="w-[10px] self-center"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              v-else
              aria-hidden="true"
              class="w-[10px] self-center"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <for-patients-dialog
            @close="state.buttonDialogState = ''"
            v-if="state.buttonDialogState === 'patients'"
          />
          <providers-dialog
            v-if="state.buttonDialogState === 'providers'"
            @close="state.buttonDialogState = ''"
          /> -->
        </div>
      </div>
    </div>
  </div>
  <about-dialog
    v-if="state.isAboutDialogOpen"
    @close="state.isAboutDialogOpen = !state.isAboutDialogOpen"
  />
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { reactive, ref, watch } from "vue";
import AboutDialog from "@/components/Dialogs/AboutDialog.vue";
import ProvidersDialog from "@/components/Dialogs/ProvidersDialog.vue";
import ForPatientsDialog from "@/components/Dialogs/ForPatientsDialog.vue";
import { useClickAwayListener } from "@/composables/useClickAwayListener.js";

const emits = defineEmits(["toggleMenu"]);

const route = useRoute();
const router = useRouter();
const btnDivRef = ref();
const navRef = ref();

const state = reactive({
  isAboutDialogOpen: false,
  buttonDialogState: "",
});

const handleAboutClick = () => {
  state.isAboutDialogOpen = !state.isAboutDialogOpen;
};

const navLinks = [
  {
    text: "Home",
    link: "/",
    handler: "",
  },
  {
    text: "About us",
    link: "/about/values",
    list: [],
    handler: handleAboutClick,
  },
  {
    text: "Services",
    link: "/services",
    handler: "",
  },
  {
    text: "Covid 19",
    link: "/covid",
    handler: "",
  },
  {
    text: "Clients Served",
    link: "/clientele",
    handler: "",
  },
  {
    text: "Locations",
    link: "/patients/centers",
    handler: "",
  },
];

const navTopLinks = [
  {
    text: "Insurances",
    link: "/about/insurances",
    handler: "",
  },
  {
    text: "Pay a Bill",
    link: "/dev",
    handler: "",
  },
  {
    text: "Order Supplies",
    link: "",
    handler: "",
  },
  {
    text: "Courier Pickup",
    link: "",
    handler: "",
  },
];

const navSecondNavLinks = [
  {
    text: "Lab Results",
    link: "/dev",
    handler: "",
  },
];

useClickAwayListener(btnDivRef, () => {
  state.buttonDialogState = "";
});
useClickAwayListener(navRef, () => {
  state.isAboutDialogOpen = false;
});

watch(
  () => route.path,
  (value) => {
    if (value === "/about") state.isAboutDialogOpen = true;
    else state.isAboutDialogOpen = false;
  }
);
</script>
