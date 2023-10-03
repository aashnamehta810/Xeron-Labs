<template>
    <div class="hero-width-parent-container lg:nav-width-parent-container lg:flex-row py-[78px] gap-[83px] items-center  bg-smoke">

        <img
                alt=""
                class="bg-blue-gradient rounded-[20px] bg-cover w-full lg:w-6/12"
                src="/imgs/handshake.png">

        <div class="flex w-full flex-col text-left mobile-nav-child-even">
            <p class="text-[14px] uppercase text-dark-blue tracking-[3.08px] font-medium">ABOUT US</p>
            <p class="h1 mt-[53px] mb-8 lg:mb-0 lg:w-9/12">Committed to Providing the Best Experience</p>
            <p class="base opacity-80">Xeron Labs is a full-service laboratory that has been serving the community for
                over 20 years.
                Our team of experienced technicians and medical professionals are dedicated to providing you with the
                highest
                level of service and care. We understand the importance of accurate test results and are committed to
                ensuring
                that you receive them in a timely manner.</p>
            <button
                    class="cta bg-dark-blue text-white w-40 mt-[30px] justify-center"
                    @click="router.push('/about/values')">
                Learn more
                <svg
                        aria-hidden="true"
                        class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>
