<template>
  <about-banner/>
  <reputation-section/>
  <qualities
      title="We are a team of professionals committed to taking care of patients, our clients,
       and our employees."
  />
  <culture-section />
  <team-section />
  <benefits-section />
  <questions-banner />
</template>

<script setup>

import AboutBanner from "@/Sections/AboutSections/AboutBanner.vue";
import ReputationSection from "@/Sections/AboutSections/ReputationSection.vue";
import CultureSection from "@/Sections/AboutSections/CultureSection.vue";
import TeamSection from "@/Sections/AboutSections/TeamSection.vue";
import BenefitsSection from "@/Sections/AboutSections/BenefitsSection.vue";
import Qualities from "@/Sections/SharedSections/Qualities.vue";
import QuestionsBanner from "@/Sections/SharedSections/QuestionsBanner.vue";
</script>