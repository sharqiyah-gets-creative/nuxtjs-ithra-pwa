export const useCommonStore = defineStore('common', {
  state: () => ({
    lastColor: '',
  }),
  actions: {
    setLastColor(color: string) {
      this.lastColor = color
    },
  },
})