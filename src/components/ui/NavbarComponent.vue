<script setup lang="ts">
import { useAuthStore } from '@/store/auth'
import { useUIStore } from '@/store/ui'
const { user } = useAuthStore()
const useUI = useUIStore()

const initials = (fullName: string) => {
  return fullName
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
}
</script>

<template>
  <div class="h-16 bg-white flex items-center justify-between px-4">
    <button
      @click="useUI.toogleSidebar()"
      type="button"
      class="h-8 w-8 flex items-center justify-center rounded-md focus:outline-none"
    >
      <IconMenuBars />
    </button>
    <div as="div" class="relative inline-block items-center">
      <div class="inline-flex w-full items-center justify-center px-4 py-2">
        <div
          class="mr-2 rounded-full bg-orange-400 text-sm w-[30px] h-[30px] flex justify-center items-center text-white"
        >
          {{ initials(user.nombre) }}
        </div>
        <p class="mr-2 text-[#111827] font-medium text-xs">
          {{ user.nombre }}
        </p>
      </div>
    </div>
  </div>
</template>
