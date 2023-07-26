import type { AuthState } from '@/interfaces/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: {
      id: 0,
      nombre: '',
      correo: '',
      cargo: '',
      departamento: '',
      oficina: '',
      estadoCuenta: ''
    }
  }),
  getters: {},
  actions: {
    setUser(payload: AuthState) {
      this.token = payload.data.token
      this.user = payload.data.user
    }
  }
})
