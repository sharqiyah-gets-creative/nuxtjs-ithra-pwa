import { defineStore } from "pinia";

const SETTINGS_LOCAL_STORAGE_USER_KEY = 'user'
const SETTINGS_LOCAL_STORAGE_POSITION_KEY = 'userPosition'
const SETTINGS_LOCAL_STORAGE_ALERT_DISMISSED_KEY = 'positionAlertDismissed'

const defaultUser = null;
const defaultAlertDismissed = false;
const defaultPosition = null;

const getStateUser = () => {
  const user = localStorage.getItem(SETTINGS_LOCAL_STORAGE_USER_KEY)
  console.log('🧑🏻 User Authenticated', user)
  return user ? JSON.parse(user) : defaultUser
}

const getUserAlertDismissed = () => {
  const dismissed = localStorage.getItem(SETTINGS_LOCAL_STORAGE_ALERT_DISMISSED_KEY)
  console.log('🧑🏻 User Dismissed Alert', dismissed)
  return dismissed ? JSON.parse(dismissed) : defaultAlertDismissed
}

const getStatePosition = () => {
  const position = localStorage.getItem(SETTINGS_LOCAL_STORAGE_POSITION_KEY)
  console.log('🧑🏻 User Position', position)
  return position ? JSON.parse(position) : defaultPosition
}

export const useUserStore = defineStore({
  id: "myUserStore",

  state: () => ({
    user: getStateUser(),
    position: getStatePosition(),
    position_alert_dismissed: getUserAlertDismissed(),
  }),

  actions: {
    setUser(user: any) {
      this.user = user;
      this.updateLocalStorage();
    },

    setPosition(position: any) {
      this.position = position;
      this.updateLocalStorage();
    },

    setAlertDismissed(dismissed: boolean) {
      this.position_alert_dismissed = dismissed;
      this.updateLocalStorage();
    },
    
    clearUser() {
      this.user = null;
      this.updateLocalStorage();
      
    },
    updateLocalStorage(){
      console.log('📪 Updating local storage with user data')
      console.log(this.user)
      window.localStorage.setItem(SETTINGS_LOCAL_STORAGE_USER_KEY, JSON.stringify(this.user));
      window.localStorage.setItem(SETTINGS_LOCAL_STORAGE_POSITION_KEY, JSON.stringify(this.position));
      window.localStorage.setItem(SETTINGS_LOCAL_STORAGE_ALERT_DISMISSED_KEY, JSON.stringify(this.position_alert_dismissed));
    
      window.location.replace("/")
      navigateTo({path: "/", force: true})
    },
  },
})