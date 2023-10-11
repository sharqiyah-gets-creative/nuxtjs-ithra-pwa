export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  actions: {
    async getAllPosts() {
    }
  },
})