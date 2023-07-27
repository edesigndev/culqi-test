<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { logout } = useAuth()
</script>

<template>
  <aside
    class="bg-white px-8 py-6 w-[280px] box-border fixed top-0 left-0 z-[999] h-screen border-r-[#F1F2F4] border-r-2"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto flex flex-col justify-between">
      <div class="">
        <div class="mb-12 flex items-center justify-start flex-row">
          <IconAlterCulqui />
        </div>
        <ul>
          <li class="flex items-center mb-8">
            <router-link
              acti
              to="/"
              class="text-sm flex font-semibold"
              active-class="!text-[#00A19B]"
            >
              <div class="mr-2">
                <IconUsers />
              </div>
              Empleados
            </router-link>
          </li>
          <li class="flex items-center mb-8">
            <router-link
              to="/reclutamiento"
              class="text-sm flex font-semibold"
              active-class="text-[#00A19B]"
            >
              <div class="mr-2">
                <IconBriefcase />
              </div>
              Reclutamiento
            </router-link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        @click="logout"
        class="px-4 py-3 border w-full border-[#111827] rounded-lg text-sm font-semibold flex justify-center items-center text-[#111827]"
      >
        Salir
      </button>
    </div>
  </aside>
</template>
