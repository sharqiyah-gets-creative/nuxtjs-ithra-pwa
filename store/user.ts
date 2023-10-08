import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    events: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  actions: {
    async getAllPosts() {
    }
  },
})