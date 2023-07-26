<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '40px'
  }
})
</script>

<template>
  <div role="status" class="w-full animate-pulse">
    <div
      :style="{ width: props.width, height: props.height }"
      class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
    ></div>
  </div>
</template>
