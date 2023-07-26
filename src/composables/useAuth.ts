import serviceApi from '@/api/serviceApi'
import type { AuthState } from '@/interfaces/auth'
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'
import router from '@/router'
import Cookie from 'js-cookie'

interface Credentials {
  correo: string
  password: string
}

export const useAuth = () => {
  const { setUser } = useAuthStore()

  const isLoading = ref<boolean>(false)
  const messageError = ref<string>('')

  const login = async (credentials: Credentials) => {
    isLoading.value = true
    try {
      const { data } = await serviceApi.post<AuthState>('/auth/login', credentials)
      Cookie.set('user', JSON.stringify(data))
      setUser(data)
      messageError.value = ''

      router.push('/')
    } catch (e) {
      messageError.value = 'Credenciales incorrectas. Inténtalo de nuevo.'
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    Cookie.remove('user')
    router.replace('/login')
  }

  return {
    isLoading,
    messageError,
    login,
    logout
  }
}
