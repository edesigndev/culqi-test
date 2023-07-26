import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    showSidebar: true
  }),
  getters: {},
  actions: {
    toogleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  }
})
