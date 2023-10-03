import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js";
import XeronInput from "@/components/fields/XeronInput.vue";
import XeronTextArea from "@/components/fields/XeronTextArea.vue";
import XeronFileUpload from "@/components/fields/XeronFileUpload.vue";

const app = createApp(App);

app
    .use(router)
    .component('xeron-input', XeronInput)
    .component('xeron-text-area', XeronTextArea)
    .component('xeron-file-upload', XeronFileUpload)
    .mount("#app")

