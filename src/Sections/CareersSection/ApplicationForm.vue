<template>
    <div class="nav-width-parent-container lg:flex-row mt-[62px] lg:pl-[245px] lg:pr-[162px] 3xl:pl-[343px] 3xl:pr-[260px]
        justify-between gap-20">
        <div class="flex flex-col lg:w-5/12 mobile-nav-child-even">
            <p class="h2">Apply now</p>
            <p class="base">
                Ready to make a difference?
            </p>
            <p class="base mt-5 full">
                Join us as we expand and serve the communities in New York and New Jersey. We have
                both full- and part-time jobs available. Interested candidates should email
                <span class="text-dark-blue">customerservice@xeronlabs.com</span>
            </p>
        </div>

        <div
                class="flex flex-col border-[1px] border-[#D6D5EA] rounded-[11px] px-4 lg:w-[640px] py-[47px]
                lg:pl-[67px] lg:pr-[39px] items-end gap-[21px]">
            <xeron-input v-model="state.name" label="Name" placeholder="Enter your name"/>
            <xeron-input v-model="state.email" label="Email" placeholder="john@example.com" type="email"/>
            <xeron-input v-model="state.phone" label="Phone" placeholder="1-888-555-8786" type="tel"/>
            <xeron-text-area v-model="state.bio" label="Tell us more about yourself" placeholder="Type your message"/>
            <xeron-file-upload v-model="state.resume" label="Upload your resume"/>
            <button
                    class="cta bg-dark-blue text-center items-center text-white w-full flex flex-row justify-center
                    h-[61px]  lg:max-w-lg mt-[21px] rounded-[12px] self-start">
                Apply now
            </button>

        </div>
    </div>
</template>

<script setup>
import {reactive} from "vue";

const state = reactive({
    name: "",
    email: "",
    phone: "",
    bio: "",
    resume: ''
})
</script>
