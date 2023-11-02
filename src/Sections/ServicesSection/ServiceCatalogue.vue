<template>
  <div
    class="nav-width-parent-container xl:hero-width-parent-container xl:px-[220px] 3xl:px-[302px] py-[72px] items-center bg-white scrollTarget"
  >
    <div class="w-full mb-20 2xl:px-[30px]">
      <p class="tracking-[3.08px] text-dark-blue text-[14px] font-medium">
        OUR SERVICES
      </p>
      <p class="h1 text-night mt-[50px]">Full Spectrum of Testing Services</p>
      <div class="flex items-center w-full justify-between">
        <p class="inline-flex base lg:max-w-[60%] opacity-80">
          At Xeron Labs, we offer a wide range of testing services to meet the
          needs of both providers and patients. Our services include, but not
          limited to:
        </p>
        <div
          @click="router.push('/services')"
          class="hidden lg:inline-flex cta-text text-dark-blue gap-3 items-center self-end cursor-pointer"
        >
          View Full Test Directory
          <svg
            aria-hidden="true"
            class="h-[10px]"
            fill="none"
            stroke="currentColor"
            stroke-width="4.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="services-tab-block w-full 2xl:px-[30px]">
      <div
        class="flex flex-wrap md:flex-nowrap md:gap-[30px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-[95px]"
      >
        <div
          class="tab-nav-block w-full md:max-w-[230px] xl:max-w-[255px] mb-10 md:mb-0"
        >
          <div class="tabs-container" @click="dropDownHandler($event)">
            <div class="nav-box">
              <ul class="nav">
                <li
                  class="nav-item"
                  v-for="(item, index) in servicesTabs"
                  :key="index"
                >
                  <button
                    :data-id="'#program-' + index"
                    @click="tabHandler($event)"
                    :class="index === 0 ? 'nav-link active' : 'nav-link'"
                    :data-tab="item.link"
                  >
                    {{ item.name }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.65"
                      height="16.478"
                      viewBox="0 0 15.65 16.478"
                    >
                      <g
                        id="Icon_feather-arrow-right"
                        data-name="Icon feather-arrow-right"
                        transform="translate(-6.5 -6.086)"
                      >
                        <path
                          id="Path_2251"
                          data-name="Path 2251"
                          d="M7.5,18H21.15"
                          transform="translate(0 -3.675)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_2252"
                          data-name="Path 2252"
                          d="M18,7.5l6.825,6.825L18,21.15"
                          transform="translate(-3.675)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-content-block w-full">
          <div class="tab-content">
            <div
              v-for="(item, index) in servicesTabs"
              :key="index"
              :class="['tab-pane', index === 0 ? 'active' : '']"
              :id="'program-' + index"
              :data-tab="item.link"
            >
              <div
                class="responsive-header md:hidden"
                :id="'mob-' + index"
                @click="mobHandler($event)"
              >
                <button
                  :data-id="'#program-' + index"
                  @click="tabHandler($event)"
                  :class="index === 0 ? 'nav-link active' : 'nav-link'"
                  :data-tab="item.link"
                >
                  {{ item.name }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.65"
                    height="16.478"
                    viewBox="0 0 15.65 16.478"
                  >
                    <g
                      id="Icon_feather-arrow-right"
                      data-name="Icon feather-arrow-right"
                      transform="translate(-6.5 -6.086)"
                    >
                      <path
                        id="Path_2251"
                        data-name="Path 2251"
                        d="M7.5,18H21.15"
                        transform="translate(0 -3.675)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_2252"
                        data-name="Path 2252"
                        d="M18,7.5l6.825,6.825L18,21.15"
                        transform="translate(-3.675)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <div class="tab-desc-block flex flex-wrap p-5 pb-10 md:p-0">
                <div class="flex flex-wrap md:flex-nowrap xl:gap-[10px] -mx-4">
                  <div class="w-full md:w-auto px-4">
                    <p class="heading text-[30px] text-night mb-2">
                      {{ item.name }}
                    </p>
                    <div
                      class="bild-cover-logo w-[100px] h-[100px] flex md:hidden items-center justify-center rounded-[9px] mb-3 p-4 bg-[#EEF2FF]"
                    >
                      <img
                        alt="image"
                        class="max-h-[100%] object-contain"
                        :src="item.logo"
                      />
                    </div>
                    <p
                      class="desc text-[16px] leading-[30px] text-night mb-2.5"
                    >
                      {{ item.desc }}
                    </p>
                  </div>
                  <div class="w-full md:w-auto px-4 hidden md:flex">
                    <div
                      class="bild-cover-logo w-[148px] h-[148px] flex items-center justify-center rounded-[9px] bg-[#EEF2FF]"
                    >
                      <img
                        alt="image"
                        class="h-[90px] object-contain"
                        :src="item.logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full pt-10">
                  <div class="img-box">
                    <img
                      alt="image"
                      class="w-full h-full object-contain"
                      :src="item.img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div
      class="nav-width-parent-container grid grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:items-center
      lg:justify-center gap-4 lg:gap-x-[1.3%] gap-y-[25px] bg-white flex-shrink-0 mt-11 test">
    <services-card
        v-for="(item, index) in services"
        :key="index"
        :service="item"/>
  </div> -->
  <!-- <hr class="mt-16 lg:hidden"> -->
</template>

<script setup>
// import {services} from "@/data/services.js";
// import ServicesCard from "@/components/Cards/ServicesCard.vue";

import { useRouter } from "vue-router";
import { servicesTabs } from "@/data/servicesTabs.js";
import { ref, watch, onMounted } from "vue";
const router = useRouter();
const tabVal = router.currentRoute.value.query.tab;

watch(
  () => router.currentRoute.value.query.tab,
  (newQuery, oldQuery) => {
    handleQueryChange(newQuery);
  }
);

onMounted(() => {
  handleQueryChange(tabVal);
});

const handleQueryChange = (tabVal) => {
  const targetElement = document.querySelector(".scrollTarget");
  if (tabVal) {
    const tabPanes = document.querySelectorAll(".tab-pane");
    tabPanes.forEach((tabPane) => {
      tabPane.classList.remove("active");
      if (tabPane.getAttribute("data-tab") === tabVal) {
        tabPane.classList.add("active");
      }
    });
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((navLink) => {
      navLink.classList.remove("active");
      if (navLink.getAttribute("data-tab") === tabVal) {
        navLink.classList.add("active");
      }
    });
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
};

const mobHandler = (e) => {
  const tabID = e.currentTarget.getAttribute("id");
  if (tabID) {
    const targetElement = document.querySelector("#" + tabID);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
};

const tabHandler = (e) => {
  const tabPanes = document.querySelectorAll(".tab-pane");
  tabPanes.forEach((tabPane) => {
    tabPane.classList.remove("active");
  });
  const navLink = document.querySelectorAll(".nav-link");
  navLink.forEach((navLink) => {
    navLink.classList.remove("active");
  });
  const getTarget = e.target.getAttribute("data-id");
  e.target.classList.add("active");
  document.querySelector(getTarget).classList.add("active");
};
const dropDownHandler = (e) => {
  e.preventDefault();
  document.querySelector(".nav")?.classList.toggle("expanded");
};
</script>
