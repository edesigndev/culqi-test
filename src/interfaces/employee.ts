import type { User } from './auth'

export interface EmployeeState extends User {
  status: string
  data: User[]
  total: number
}

export interface IEmployees {
  professions: Profession[]
  employees: User[]
  isLoading: boolean
  messageError: string
  total: number
  currentPage: number
  pages: number[]
  position: string
  searchName: string
  loadEmployees: () => void
  nextPage: () => void
  prevPage: () => void
  setPage: (value: number) => void
  setItemsPerPage: (value: number) => void
  setEmployees: (array: User[]) => void
  filterPosition: (name: string) => void
  filterName: (name: string) => void
}

export type Profession = { [key: string]: string[] }
