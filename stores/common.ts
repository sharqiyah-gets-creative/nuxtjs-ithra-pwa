import { defineStore } from 'pinia';

export const useCommonStore = defineStore('COMMON_STORE', {

	state: () => ({
		lastColor: '',
	}),

	actions: {
		setLastColor(color: string) {
			this.lastColor = color;
		},
	},
	persist: true
});
