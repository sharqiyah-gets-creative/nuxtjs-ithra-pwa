const COMMON_STORE_ID = 'myCommonStore'

export const useCommonStore = defineStore({
	id: COMMON_STORE_ID,

	state: () => ({
		lastColor: '',
	}),
	
	actions: {
    setLastColor(color: string) {
      this.lastColor = color;
    },
	},
});