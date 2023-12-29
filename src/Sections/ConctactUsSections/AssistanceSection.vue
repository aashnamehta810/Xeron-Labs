<template>
  <div
    class="mobile-nav-child-even lg:nav-child lg:flex-row items-center mt-[58px] gap-[40px] 3xl:gap-[109px] lg:pr-[162px] 3xl:pr-[260px]"
  >
    <div class="flex flex-col w-full">
      <p
        class="text-[14px] tracking-[3.08px] font-medium text-center lg:text-left"
      >
        ABOUT US / CONTACT US
      </p>
      <p
        class="mt-[75px] text-[35px] lg:text-[60px] -tracking-[1.2px] font-naga mobile-nav-child-uneven"
      >
        Got any questions? We're here to help.
      </p>
      <p class="base mt-5 px-6 lg:px-0">
        If you have any questions or need assistance, please do not hesitate to
        contact us. We are here to help and look forward to serving you.
      </p>

      <p class="mt-14 text-[16px] tracking-[0px] text-[#444650]">
        CONTACT US AT:
      </p>
      <hr />
      <div
        class="flex flex-wrap gap-y-[51px] items-center gap-x-[35px] mt-[31px] border-b-[1px] pb-8 lg:border-b-0 lg:pb-0"
      >
        <div v-for="item in contacts" :key="item.title" class="flex gap-2">
          <img :src="item.icon" alt="" class="w-[30px] h-6" />
          <div class="flex flex-col gap-1">
            <p class="base opacity-100 text-black">{{ item.title }}</p>
            <p
              class="text-[18px] tracking-[0px] text-[#444650]"
              v-html="sanitizeHtml(item.desc)"
            ></p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col border-[1px] border-[#D6D5EA] rounded-[11px] py-[47px] px-4 lg:pl-[67px] lg:pr-[39px] gap-[21px]"
    >
      <p class="tracking-[0px] text-[#444650] text-[16px]">
        If you have any questions, concerns, or comments, please fill out the
        contact form below.
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import DOMPurify from "dompurify";
const sanitizeHtml = (html) => {
  return DOMPurify.sanitize(html);
};

const state = reactive({
  name: "",
  email: "",
  phone: "",
  bio: "",
  resume: "",
});

const contacts = [
  {
    icon: "/imgs/contactus/envelope.svg",
    title: "Email",
    desc: "<a href='mailto:customerservice@xeronlabs.com'>customerservice@xeronlabs.com</a>",
  },
  {
    icon: "/imgs/contactus/phone.svg",
    title: "Call",
    desc: "<a href='tel:908-829-8200'>908-829-8200</a>",
  },
  {
    icon: "/imgs/contactus/fax-icon.svg",
    title: "Fax",
    desc: "908-636-7522",
  },
  {
    icon: "/imgs/contactus/location_arrow.svg",
    title: "Address",
    desc: "<a href='https://maps.app.goo.gl/7Rt97syWCqu24eEh6' target='_blank'>629 Springfield Rd, Kenilworth/NJ, 07033</a>",
  },
];
</script>
