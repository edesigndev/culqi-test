<script setup lang="ts">
import { useEmployees } from '@/composables/useEmployees'
import { useUIStore } from '@/store/ui'

const useUI = useUIStore()

const columns = ['Nombre', 'Cargo', 'Departamento', 'Oficina', 'Cuenta', 'Acciones']

const {
  professions,
  employees,
  isLoading,
  total,
  prevPage,
  nextPage,
  currentPage,
  pages,
  setPage,
  setItemsPerPage,
  position,
  searchName
} = useEmployees()
</script>

<template>
  <div class="h-full w-full flex">
    <SidebarComponent :class="useUI.showSidebar ? 'px-8 py-6  w-[280px]' : 'w-0'" />
    <div class="w-full h-screen bg-[#F1F2F4]">
      <NavbarComponent />
      <div class="mx-4 my-6 p-4 bg-white">
        <BoxSearcherComponent
          :isLoading="isLoading"
          :professions="professions"
          :employees="employees"
        />
        <div class="overflow-x-auto overflow-y-hidden">
          <TableComponent
            :isLoading="isLoading"
            :columns="columns"
            :initialData="employees"
            :total="total"
            :currentPage="currentPage"
            :pages="pages"
            @prev="prevPage"
            @next="nextPage"
            @set="setPage"
            @setItemsPerPage="setItemsPerPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>
