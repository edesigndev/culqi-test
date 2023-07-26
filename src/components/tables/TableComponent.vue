<script setup lang="ts">
import type { IUsers, IColumns } from '@/interfaces/auth'
import { ref, computed } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  initialData: {
    type: Array as PropType<IUsers[]>,
    required: true,
    default: () => []
  },
  columns: {
    type: Array as PropType<IColumns[]>,
    required: true,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  total: {
    type: Number,
    default: 0
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pages: {
    type: Array as PropType<number[]>,
    default: () => []
  }
})

const emit = defineEmits(['prev', 'next', 'set', 'setItemsPerPage'])

const totalPages = computed<number>(() => Math.ceil(props.total / selectPage.value))

const totalItems = computed<number>(() => props.total)
const firstItem = computed<number>(() => (props.currentPage - 1) * selectPage.value + 1)
const lastItem = computed<number>(() =>
  Math.min(props.currentPage * selectPage.value, totalItems.value)
)

const pages = computed(() => {
  const pagesArray: number[] = []
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i)
  }
  return pagesArray
})

const prevPage = () => emit('prev')
const nextPage = () => emit('next')
const changePage = (value: number) => emit('set', value)

const selectPage = ref<number>(props.itemsPerPage)

const changeItemsPerPage = (value: number) => {
  selectPage.value = value
  emit('setItemsPerPage', value)
}
</script>

<template>
  <div>
    <table class="table-auto w-full border-0">
      <thead>
        <tr class="bg-[#FAFAFA] border-[#FAFAFA] border">
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="px-4 py-4 text-[#687588] text-xs font-semibold text-left"
          >
            <div v-if="column.toString() == 'Acciones'" class="text-right">
              {{ column }}
            </div>
            <div v-else>
              {{ column }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="!isLoading">
        <tr v-for="(item, index) in initialData" :key="index">
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
            {{ item.nombre }}
          </td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
            {{ item.cargo }}
          </td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
            {{ item.departamento }}
          </td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
            {{ item.oficina }}
          </td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">
            {{ item.estadoCuenta }}
          </td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-right">
            <div class="flex gap-2 justify-end">
              <button
                class="flex justify-center items-center bg-green-500 hover:bg-green-700 text-white font-bold w-[30px] h-[30px] rounded"
              >
                <IconEye />
              </button>
              <button
                class="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold w-[30px] h-[30px] rounded"
              >
                <IconEdit />
              </button>
              <button
                class="flex justify-center items-center bg-red-500 hover:bg-red-700 text-white font-bold w-[30px] h-[30px] rounded"
              >
                <IconTrash />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <TableSkeleton />
      </tbody>
    </table>

    <div class="mt-6 flex justify-between">
      <div class="flex items-center">
        <button
          class="px-2"
          @click="prevPage"
          :class="props.currentPage === 1 ? 'opacity-30' : ''"
          :disabled="props.currentPage === 1"
        >
          <div class="rotate-180">
            <IconArrow />
          </div>
        </button>
        <template v-for="sPage in pages" :key="sPage">
          <button
            class="px-2 text-xs"
            @click="changePage(sPage)"
            :class="{ 'font-bold': props.currentPage === sPage }"
          >
            {{ sPage }}
          </button>
        </template>
        <button
          class="px-2"
          @click="nextPage"
          :class="props.currentPage === totalPages ? 'opacity-30' : ''"
          :disabled="props.currentPage === totalPages"
        >
          <IconArrow />
        </button>
      </div>
      <div class="flex items-center text-[#687588] text-xs">
        <span class="px-1"
          >Mostrando {{ firstItem }} a {{ lastItem }} de {{ totalItems }} registros</span
        >
        <select
          class="border rounded-md px-1 py-1 text-xs"
          v-model="selectPage"
          @change="changeItemsPerPage(selectPage)"
        >
          <template v-for="page in props.pages" :key="page">
            <option :value="page">Mostrar {{ page }}</option>
          </template>
        </select>
      </div>
    </div>
  </div>
</template>
