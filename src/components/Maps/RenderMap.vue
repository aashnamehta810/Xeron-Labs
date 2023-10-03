<template>
  <GoogleMap
      :center="center"
      :zoom="15"
      api-key="AIzaSyAv2xtC-tAYBAFZ_CxkFUQIb4kRzfpfPK4"
      map-type-id="roadmap"
      style="width: 100%; height: 100%"
  >
    <custom-marker :options="{position: center}">
      <svg class="w-8" fill="currentColor"  viewBox="0 0 16 16"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
    </custom-marker>
  </GoogleMap>
</template>

<script setup>
import {CustomMarker, GoogleMap} from 'vue3-google-map'
const props = defineProps(['center'])

</script>