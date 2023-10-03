<template>
    <centers-banner/>
    <maps/>
    <div class="nav-child lg:flex-row mt-20 lg:mt-[111px] gap-[75px] 3xl:gap-[109px] lg:pr-[162px] 3xl:pr-[260px]">
        <trait-cards v-for="item in traits" :key="item.img" :align-left="true" :item="item"/>
    </div>
    <questions-banner/>
    <qualities title="Discover the XCL Labs Difference"/>
</template>

<script setup>
import CentersBanner from "@/Sections/CentersSection/CentersBanner.vue";
import Maps from "@/Sections/CentersSection/Locations.vue";
import QuestionsBanner from "@/Sections/SharedSections/QuestionsBanner.vue";
import Qualities from "@/Sections/SharedSections/Qualities.vue";
import TraitCards from "@/Sections/SharedSections/TraitCards.vue";

const traits = [
    {
        img: "/imgs/contactus/sample.png",
        title: "Fast Turnaround Time",
        desc: "We understand the importance of timely results, which is why we strive to provide results as quickly as possible. Many of our tests have a rapid turnaround time, and we also offer online reporting for easy access to results."
    },
    {
        img: "/imgs/contactus/handshake.png",
        title: "Insurance Accepted",
        desc: "We accept most insurance plans and work with a variety of providers to ensure that our patients have access to affordable, high-quality testing."
    },
]
</script>