<template>
    <div class="hero-width-parent-container lg:nav-width-parent-container py-[78px] items-center  bg-stone-100">

        <div class="w-full mb-10">
            <p class="tracking-[3.08px] text-dark-blue text-[14px] font-medium">Toxicology</p>
            <h2 class="h2 text-night mt-[20px]">Specialized Programs</h2>
        </div>

        <div class="toxicology-tab-block w-full -mx-4">
            <div class="tab-nav-block w-full md:w-1/4">
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#program-1" class="nav-link active">Cardiac Care</a>
                    </li>
                    <li class="nav-item">
                        <a href="#program-2" class="nav-link">Dementia Care</a>
                    </li>
                    <li class="nav-item">
                        <a href="#program-3" class="nav-link">Dialysis Care</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content-block w-full md:w-3/4">
                <div class="tab-content">
                    <div class="tab-pane active" id="program-1">
                        <div class="tab-desc-block flex flex-wrap -mx-4">
                            <div class="w-full md:w-3/4 px-4">
                                <p class="desc text-[18px] text-night mb-2.5">Supervised by board-certified cardiologists, the team is leading the way in innovative, successful care.</p>
                                <button class="tab-btn bg-dark-blue text-white h-[42px] flex items-center gap-1 text-[16px]  tracking-[.32px] rounded-md px-6 py-2 ">
                                    Get Care
                                    <svg
                                        aria-hidden="true"
                                        class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="w-full md:w-1/4 px-4">
                                <div class="bild-cover-logo w-full flex justify-end">
                                    <img
                                        alt="image"
                                        class=" h-[90px] object-contain"
                                        src="/imgs/toxicology/Cardiac-Care.svg">
                                </div>
                            </div>
                            <div class="w-full px-4 pt-10">
                                <div class="img-box">
                                    <img
                                        alt="image"
                                        class="w-full h-full object-contain"
                                        src="/imgs/toxicology/Home-page-Cardiac-Care.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="program-2">
                        <div class="tab-desc-block flex flex-wrap -mx-4">
                            <div class="w-full md:w-3/4 px-4">
                                <p class="desc text-[18px] text-night mb-2.5">Supervised by board-certified cardiologists, the team is leading the way in innovative, successful care.</p>
                                <button class="tab-btn bg-dark-blue text-white h-[42px] flex items-center gap-1 text-[16px]  tracking-[.32px] rounded-md px-6 py-2 ">
                                    Get Care
                                    <svg
                                        aria-hidden="true"
                                        class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="w-full md:w-1/4 px-4">
                                <div class="bild-cover-logo w-full flex justify-end">
                                    <img
                                        alt="image"
                                        class=" h-[90px] object-contain"
                                        src="/imgs/toxicology/Cardiac-Care.svg">
                                </div>
                            </div>
                            <div class="w-full px-4 pt-10">
                                <div class="img-box">
                                    <img
                                        alt="image"
                                        class="w-full h-full object-contain"
                                        src="/imgs/toxicology/Home-page-Cardiac-Care.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="program-3">
                        <div class="tab-desc-block flex flex-wrap -mx-4">
                            <div class="w-full md:w-3/4 px-4">
                                <p class="desc text-[18px] text-night mb-2.5">Supervised by board-certified cardiologists, the team is leading the way in innovative, successful care.</p>
                                <button class="tab-btn bg-dark-blue text-white h-[42px] flex items-center gap-1 text-[16px]  tracking-[.32px] rounded-md px-6 py-2 ">
                                    Get Care
                                    <svg
                                        aria-hidden="true"
                                        class="h-[10px]" fill="none" stroke="currentColor" stroke-width="4.5" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="w-full md:w-1/4 px-4">
                                <div class="bild-cover-logo w-full flex justify-end">
                                    <img
                                        alt="image"
                                        class=" h-[90px] object-contain"
                                        src="/imgs/toxicology/Cardiac-Care.svg">
                                </div>
                            </div>
                            <div class="w-full px-4 pt-10">
                                <div class="img-box">
                                    <img
                                        alt="image"
                                        class="w-full h-full object-contain"
                                        src="/imgs/toxicology/Home-page-Cardiac-Care.jpg">
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
import {useRouter} from "vue-router";

const router = useRouter()
</script>
