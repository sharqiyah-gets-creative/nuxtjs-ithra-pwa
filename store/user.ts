import { defineStore } from "pinia";

const SETTINGS_LOCAL_STORAGE_KEY = 'user'

const defaultUser = null;

const getStateUser = () => {
  const user = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)
  console.log('🧑🏻 User Authenticated', user)
  return user ? JSON.parse(user) : defaultUser
}

export const useUserStore = defineStore({
  id: "myUserStore",

  state: () => ({
    user: getStateUser(),
  }),

  actions: {
    setUser(user: any) {
      this.user = user;
      this.updateLocalStorage();
      
      
    },
    clearUser() {
      this.user = null;
      this.updateLocalStorage();
      
    },
    updateLocalStorage(){
      console.log('📪 Updating local storage with user data')
      console.log(this.user)
      window.localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(this.user));
      window.location.replace("/")
      navigateTo({path: "/", force: true})
    },
  },
})