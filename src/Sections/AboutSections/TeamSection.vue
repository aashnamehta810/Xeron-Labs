<template>
  <div class="hero-width-parent-container bg-smoke lg:py-[100px]">
    <div class="lg:lg-child-container">
      <p class="text-center h1 mb-10 lg:mb-8">Meet the Team</p>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-[32px] gap-y-[40px]">
        <team-cards v-for="(item, index) in sectionsInfo" :key="index" :item="item" />
      </div>

    </div>
  </div>
</template>

<script setup>
import TeamCards from "@/Sections/SharedSections/TeamCards.vue";

const sectionsInfo = [
  {
    img: "/imgs/team-user-img1.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img2.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img3.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img2.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img3.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img1.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img3.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img2.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
  {
    img: "/imgs/team-user-img3.png",
    title: "Name and Surname",
    designation: "Job Title | Xeron Clinical Labs",
    button: "Read More"
  },
]
</script>