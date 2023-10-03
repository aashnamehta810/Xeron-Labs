<template>
  <div class="custom-service-card-box w-full lg:w-1/2 xl:w-1/3 px-4">
    <div
      class="flex-shrink-0 flex items-center justify-center flex-col text-left rounded-[11px] bg-white"
    >
      <div class="image-box h-[220px] w-full overflow-hidden mb-4">
        <img
          class="w-full h-full object-cover object-top rounded-[20px]"
          :src="service.img"
          alt=""
        />
      </div>
      <div class="content-box px-4">
        <h4 class="w-full text-night text-[26px] font-medium mb-1.5">
          {{ service.name }}
        </h4>
        <p class="desc text-[16px] text-night opacity-80 mb-4">
          {{ service.desc }}
        </p>
        <a
          class="pdf-btn bg-dark-blue text-white h-[42px] inline-flex items-center gap-1 text-[16px] tracking-[.32px] rounded-md px-6 py-2"
          download
          target="_blank"
          :href="service.pdf"
        >
          Download PDF
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
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["service"]);
</script>
