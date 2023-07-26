<script setup lang="ts">
import { computed } from 'vue'

const skeleton = computed(() => Array.from({ length: 5 }, (_, index) => index + 1))
</script>
<template>
  <tr v-for="item in skeleton" :key="item">
    <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
      <Skeleton />
    </td>
    <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
      <Skeleton />
    </td>
    <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
      <Skeleton />
    </td>
    <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
      <Skeleton />
    </td>
    <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
      <Skeleton />
    </td>
    <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
      <Skeleton />
    </td>
  </tr>
</template>
