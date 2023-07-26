import { createRouter, createWebHistory } from 'vue-router'
import Cookie from 'js-cookie'
import { useAuthStore } from '@/store/auth'

function lazyLoad(view: string) {
  return () => import(`@/views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('HomeView'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: lazyLoad('LoginView')
    },
    {
      path: '/:pathMatch(.*)*',
      component: lazyLoad('NotFoundView')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const cookie = Cookie.get('user')
  const { setUser } = useAuthStore()
  if (requiresAuth && !cookie) {
    next({ name: 'login' })
  } else {
    if (cookie) {
      try {
        const user = JSON.parse(cookie)
        setUser(user)
      } catch (error) {
        console.error('Error cookie:', error)
      }
    }
    next()
  }
})

export default router
