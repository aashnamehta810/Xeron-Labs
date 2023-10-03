<template>
  <div>
    <navbar @toggleMenu="state.isMenuOpen = !state.isMenuOpen"/>
    <slot></slot>
    <xeron-footer/>
    <mobile-menu v-if="state.isMenuOpen" @toggleMenu="state.isMenuOpen = !state.isMenuOpen"/>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbars/Navbar.vue";
import XeronFooter from "@/components/Footers/XeronFooter.vue";
import {useRoute} from "vue-router";
import {reactive, watch} from "vue";
import MobileMenu from "@/components/Dialogs/Mobile_Menu/MobileMenu.vue";

const state = reactive({
  isMenuOpen: false
})


const route = useRoute()

watch(()=> route.path, ()=>{
  window.scrollTo(0, 0)
})
</script>
