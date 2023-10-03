<template>
  <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full flex-shrink-0">
    <label
        class="text-[18px] tracking-[0px] text-[#2A2832] text-left whitespace-nowrap">
      {{ label }}
    </label>
    <input
        :id="id"
        ref="refInput"
        v-model="inputVal"
        :disabled="disabled"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :type="type"
        class="rounded-[12px] border-[1px] focus:border-dark-blue focus:placeholder:text-dark-blue
        placeholder:text-[18px] h-[56px] lg:w-[429px] px-[23px] focus:outline-none lg:self-end"
        @keypress="emit('keypress', $event)"
        @keyup="rulesChecker"
    />

  </div>


</template>

<script setup>
import {computed, reactive} from "vue";

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
  disabled: {
    type: Boolean,
    default: false
  },
  maxLength: {
    type: String,
    default: null
  }
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
