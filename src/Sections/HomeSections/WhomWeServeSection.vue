<template>
    <div class="hero-width-parent-container lg:nav-width-parent-container pt-[100px] pb-[71px] bg-white">
        <div class="flex w-full flex-col text-left mobile-nav-child-even text-center">
            <p class="text-[14px] uppercase text-dark-blue tracking-[3.08px] font-medium">WHOM WE SERVE</p>
            <p class="h1 mt-[53px] mb-8 2xl:mb-12 mx-auto w-full lg:w-2/3 xl:w-3/5 2xl:w-1/2 tracking-[-0.96px] leading-[50px]">Advancing Quality Care in in Every Medical Environment</p>
            
            <div class="serve-grid-block flex flex-wrap -mx-[15px] gap-y-[27px]">
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Primary Care Physicians</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Family Clinics</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Skilled Nursing Facilities</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Assisted Living Facilities</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Inpatient/Outpatient <br> Behavioral Health</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Urgent Cares</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Workplace Testing <br> Employee Screening</div>
                </div>
                <div class="serve-grid-item w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-[15px]">
                    <div class="item-box">Specialists & Physicians</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>
