export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  actions: {
    async getAllPosts() {
    }
  },
})