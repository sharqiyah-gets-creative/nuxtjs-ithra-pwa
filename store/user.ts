import { defineStore } from "pinia";

const SETTINGS_LOCAL_STORAGE_KEY = 'user'

const defaultUser = null;

const getStateUser = () => {
  const user = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)
  return user ? JSON.parse(user) : defaultUser
}

export const useUserStore = defineStore({
  id: "myUserStore",

  state: () => ({
    // user is null or any
    user: getStateUser(),
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  actions: {
    async getAllPosts() {
    },
    setUser(user: any) {
      this.updateLocalStorage();
      this.user = user;
      
    },
    clearUser() {
      this.updateLocalStorage();
      this.user = null;
    },
    updateLocalStorage(){
      console.log('📪 Updating local storage with user data')
      window.localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(this.user));
    },
  },
})