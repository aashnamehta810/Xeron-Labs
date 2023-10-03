<template>
  <div
    class="hero-width-parent-container lg:nav-width-parent-container py-[78px] items-center bg-stone-100"
  >
    <div class="w-full mb-10">
      <p class="tracking-[3.08px] text-dark-blue text-[14px] font-medium">
        Toxicology
      </p>
      <h2 class="h2 text-night mt-[20px]">Specialized Programs</h2>
    </div>

    <div class="toxicology-tab-block w-full -mx-4">
      <div class="tab-nav-block w-full md:w-1/4">
        <ul class="nav">
          <li class="nav-item" v-for="(item, index) in toxicology" :key="index">
            <a
              :data-id="'#program-' + index"
              @click="tabHandler($event)"
              :class="index === 0 ? 'nav-link active' : 'nav-link'"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-content-block w-full md:w-3/4">
        <div class="tab-content">
          <div
            v-for="(item, index) in toxicology"
            :key="index"
            :class="['tab-pane', index === 0 ? 'active' : '']"
            :id="'program-' + index"
          >
            <div class="tab-desc-block flex flex-wrap -mx-4">
              <div class="w-full md:w-3/4 px-4">
                <p class="desc text-[18px] text-night mb-2.5">
                  {{ item.desc }}
                </p>
                <button
                  class="tab-btn bg-dark-blue text-white h-[42px] flex items-center gap-1 text-[16px] tracking-[.32px] rounded-md px-6 py-2"
                >
                  Get Care
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
                </button>
              </div>
              <div class="w-full md:w-1/4 px-4">
                <div class="bild-cover-logo w-full flex justify-end">
                  <img
                    alt="image"
                    class="h-[90px] object-contain"
                    :src="item.logo"
                  />
                </div>
              </div>
              <div class="w-full px-4 pt-10">
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

    <!-- <img
                alt=""
                class="bg-blue-gradient rounded-[20px] bg-cover w-full lg:w-6/12"
                src="/imgs/handshake.png"> -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { toxicology } from "@/data/toxicology.js";
const router = useRouter();
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
</script>
