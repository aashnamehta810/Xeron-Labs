<template>
  <div class="flex flex-col gap-4 w-full lg:max-w-lg">
    <label
        class="text-[18px] tracking-[0px] text-[#2A2832] text-left">
      {{ label }}
    </label>
    <input ref="inputRef" class="hidden" type="file">
    <div @click="openFileInput" class="flex items-center h-[61px] rounded-[12px] px-[25px] border-[1px] hover:border-dark-blue
    text-gray-400 hover:text-dark-blue lg:w-[429px] lg:self-end gap-2">
      <svg
          class="rounded-full w-8 h-8 bg-dark-blue text-white p-1"
          aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Select or drop file
    </div>
  </div>


</template>

<script setup>
import {computed, reactive, ref} from "vue";

const inputRef = ref()

const openFileInput = () => {
  inputRef.value.click();
};


const props = defineProps({
  type: {
    type: String,
    default: "text"
  },
  label: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String
  },
  rules: {
    type: Array,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    default: null
  },
  id: {
    type: String,
    default: ""
  },
})

const emit = defineEmits(["input", "keypress", "update:modelValue"])
const state = reactive({
  errorMessage: null
})


const inputVal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    if (props.required && props.rules.length === 0) {
      val ? (state.errorMessage = false) : (state.errorMessage = "Required")
    }
    emit('update:modelValue', val)
  }

})

const rulesChecker = () => {
  if (props.rules && props.rules.length > 0) {
    for (let i = 0; i < props.rules.length; i++) {
      if (props.rules[i](inputVal.value) !== true) {
        state.errorMessage = props.rules[i](inputVal.value)
        return;
      } else {
        state.errorMessage = null
      }
    }
  }
}


</script>
