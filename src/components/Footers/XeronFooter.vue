<template>
  <div
    class="nav-width-parent-container grid grid-cols-2 xl:grid-cols-6 gap-[20px] lg:gap-[40px] 3xl:gap-[90px] py-[76px] bg-smoke mt-[53px]"
  >
    <div
      class="footer-bottom-fixed-btn fixed bottom-0 right-0 px-4 py-3 bg-dark-blue text-white rounded-t-xl"
    >
      <a
        href="javascript:void(0)"
        @click="router.push('/about/contactus')"
        class="connect-rep-btn"
        >Connect with a rep</a
      >
    </div>
    <div class="flex flex-col col-span-2 lg:col-span-3 order-1 mb-16 lg:mb-0">
      <img alt="" class="w-[134px]" src="/imgs/logo.svg" />
      <p class="base text-[14px] mt-[38px] max-w-[480px]">
        Xeron Labs is a full-service laboratory that has been serving the
        community for over 20 years. Our team of experienced technicians and
        medical professionals are dedicated to providing you with the highest
        level of service and care.
      </p>
      <div class="flex items-center gap-[25px] mt-[38px]">
        <svg
          class="w-[17px] text-leather"
          fill="currentColor"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          />
        </svg>
        <svg
          class="w-[17px]"
          fill="#939698"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"
            ></path>
          </g>
        </svg>
        <svg
          class="text-leather w-[17px]"
          fill="currentColor"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
          />
        </svg>
      </div>
    </div>

    <div class="flex flex-col w-full gap-1 order-2">
      <p class="text-[20px] font-naga -tracking-[.4px] text-night">Company</p>
      <p
        @click="router.push(item.url)"
        v-for="(item, index) in companies"
        :key="index"
        class="tracking-[.28px] text-[14px] text-charcoal cursor-pointer"
      >
        {{ item.name }}
      </p>
    </div>

    <div class="flex flex-col w-full gap-1 order-4 lg:order-3 -mt-20 lg:-mt-0">
      <p class="text-[20px] font-naga -tracking-[.4px] text-night">Services</p>
      <p
        @click="router.push(item.url)"
        v-for="(item, index) in services"
        :key="index"
        class="tracking-[.28px] text-[14px] text-charcoal cursor-pointer"
      >
        {{ item.name }}
      </p>
    </div>

    <div class="flex flex-col w-full gap-1 col-span-1 order-3 lg:order-4">
      <p class="text-[20px] font-naga -tracking-[.4px] text-night">
        For Providers
      </p>
      <p
        @click="router.push(item.url)"
        v-for="(item, index) in forProviders"
        :key="index"
        class="tracking-[.28px] text-[14px] text-charcoal cursor-pointer"
      >
        {{ item.name }}
      </p>

      <p class="text-[20px] font-naga -tracking-[.4px] text-night mt-12">
        For Patients
      </p>
      <template v-for="(item, index) in forPatients" :key="index">
        <router-link
          class="tracking-[.28px] text-[14px] text-charcoal cursor-pointer"
          v-if="isInternalLink(item.url)"
          :to="{ path: item.url }"
        >
          {{ item.name }}
        </router-link>
        <a
          v-else
          :href="item.url"
          target="_blank"
          class="tracking-[.28px] text-[14px] text-charcoal cursor-pointer"
          rel="noopener noreferrer"
        >
          {{ item.name }}
        </a>
      </template>
    </div>

    <div
      class="flex flex-col lg:flex-row w-full col-span-2 lg:col-span-6 lg:border-t-2 py-2 tracking-[0px] text-black-cat opacity-[0.39] text-[12px] lg:text-[14px] divide-y-2 mt-8 lg:mt-0 lg:divide-y-0 order-5"
    >
      <div
        class="lg:order-2 flex justify-between lg:gap-[42px] lg:items-center lg:ml-auto whitespace-nowrap pb-4 lg:pb-0"
      >
        <p class="cursor-pointer" @click="router.push('/privacy-policy')">
          Privacy Policy
        </p>
        <p class="cursor-pointer" @click="router.push('/terms-conditions')">
          Terms & Conditions
        </p>
        <p class="cursor-pointer" @click="router.push('/accessibility-notice')">
          Accessibility Notice
        </p>
      </div>
      <div class="flex lg:order-1 pt-4 lg:pb-0">
        © 2023 Xeron Clinical Laboratories. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const openInNewTab = (url, target) => {
  window.open(url, target);
};
const isInternalLink = (link) => {
  return !link.startsWith("http");
};

const companies = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about/values",
  },
  {
    name: "Our values",
    url: "/about/values",
  },
  {
    name: "Insurances",
    url: "/about/insurances",
  },
  {
    name: "Careers",
    url: "/about/careers",
  },
  {
    name: "Contact us",
    url: "/about/contactus",
  },
];

const services = [
  {
    name: "General Testing",
    url: "/services/?tab=general-testing",
  },
  {
    name: "Andrology",
    url: "/services/?tab=andrology",
  },
  {
    name: "Cytology",
    url: "/services/?tab=cytology",
  },
  {
    name: "Chemistry",
    url: "/services/?tab=chemistry",
  },
  {
    name: "Hematology",
    url: "/services/?tab=hematology",
  },
  {
    name: "Molecular Virology",
    url: "/services/?tab=molecular-virology",
  },
  {
    name: "Endocrinology",
    url: "/services/?tab=endocrinology",
  },
  {
    name: "Serology",
    url: "/services/?tab=serology",
  },
];

const forProviders = [
  {
    name: "Order a Test",
    url: "/dev",
  },
  {
    name: "Health Resources",
    url: "/dev",
  },
  {
    name: "Client Sign in",
    url: "/dev",
  },
];

const forPatients = [
  {
    name: "Covid Test Results",
    url: "/covid",
    target: "_self",
  },
  {
    name: "Patients Centers Locations",
    url: "/patients/centers",
    target: "_self",
  },
  {
    name: "Patient information",
    url: "/dev",
    target: "_self",
  },
  {
    name: "Pay a Bill",
    url: "https://secure.cardknox.com/xeronclinicallaboratories",
    target: "_blank",
  },
  {
    name: "Patient Sign in",
    url: "https://xeronpatient.safemedicaldata.com/",
    target: "_blank",
  },
];
</script>
