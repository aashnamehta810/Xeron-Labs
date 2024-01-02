import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/about/insurances",
    name: "insurances",
    component: () => import("@/pages/about/Insurances.vue"),
  },
  {
    path: "/about/careers",
    name: "careers",
    component: () => import("@/pages/about/Careers.vue"),
  },
  {
    path: "/about/contactus",
    name: "contactus",
    component: () => import("@/pages/about/ContactUs.vue"),
  },
  {
    path: "/patients/centers",
    name: "centers",
    component: () => import("@/pages/ForPatients/ServiceCenters.vue"),
  },
  {
    path: "/about/values",
    name: "about",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/pages/Services.vue"),
  },
  {
    path: "/covid",
    name: "covid",
    component: () => import("@/pages/Covid.vue"),
  },
  {
    path: "/clientele",
    name: "clientele",
    component: () => import("@/pages/Clientele.vue"),
  },
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/pages/UnderDevelopment.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: () => import("@/pages/PrivacyPolicy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "Terms",
    component: () => import("@/pages/TermsConditions.vue"),
  },
  {
    path: "/accessibility-notice",
    name: "Accessibility Notice",
    component: () => import("@/pages/AccessibilityNotice.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@/pages/Demo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
