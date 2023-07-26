import serviceApi from '@/api/serviceApi'
import type { User } from '@/interfaces/auth'
import type { EmployeeState, Profession } from '@/interfaces/employee'
import { useAuthStore } from '@/store/auth'
import { onMounted, ref, watch } from 'vue'

export const useEmployees = () => {
  const employees = ref<User[]>([])
  const isLoading = ref<boolean>(true)
  const messageError = ref<string>('')
  const newToken = ref<string>('')

  const professions = ref<Profession[]>()
  const position = ref<string>('')
  const searchName = ref<string>('')

  //PAGINACION
  const total = ref<number>(0)
  const itemsPerPage = ref<number>(10)
  const currentPage = ref<number>(1)

  const pages = ref<number[]>([10, 15, 20])

  onMounted(async () => {
    const { token } = useAuthStore()
    newToken.value = token
    loadEmployees()
  })

  watch(currentPage, () => {
    loadEmployees()
  })

  watch(itemsPerPage, () => {
    loadEmployees()
  })

  const loadEmployees = async () => {
    isLoading.value = true
    try {
      const { data } = await serviceApi.get<EmployeeState>('/empleados', {
        headers: {
          Authorization: `Bearer ${newToken.value}`
        },
        params: {
          limit: itemsPerPage.value,
          page: currentPage.value
        }
      })

      total.value = data.total
      employees.value = data.data
      isLoading.value = false
      professions.value = getProfessions(employees.value)
    } catch (e) {
      messageError.value = 'Ocurrió un error inesperado.'
    } finally {
      isLoading.value = false
    }
  }

  const nextPage = () => {
    currentPage.value = currentPage.value + 1
  }

  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value -= 1
  }

  const setPage = (value: number) => (currentPage.value = value)

  const setItemsPerPage = (value: number) => {
    itemsPerPage.value = value
    currentPage.value = 1
  }

  const getProfessions = (array: User[]) => [...new Set(array.map((item) => item.cargo))]

  const setEmployees = (array: User[]) => (employees.value = array)

  const filterPosition = (name: string) => {
    position.value = name
  }
  const filterName = (name: string) => {
    searchName.value = name
    employees.value = employees.value.filter((user) =>
      user.nombre.toLowerCase().includes(name.toLowerCase())
    )
  }

  return {
    professions,
    employees,
    isLoading,
    messageError,
    total,
    currentPage,
    pages,
    position,
    searchName,
    loadEmployees,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage,
    setEmployees,
    filterPosition,
    filterName
  }
}
