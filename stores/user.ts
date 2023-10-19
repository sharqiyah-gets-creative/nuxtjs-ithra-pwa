import { MapPosition } from '~/types';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('USER_STORE', {
	state: () => ({
		user: null,
		position: {},
		position_alert_dismissed: false,
	}),

	getters: {
		getUser: (state) => state.user,
		getPosition: (state) => state.position,
		getPositionAlertDismissed: (state) => state.position_alert_dismissed,
	},

	actions: {
		setUser(user: any) {
			this.user = user;
		},

		setPosition(position: MapPosition) {
			this.position = position;
		},

		setAlertDismissed(dismissed: boolean) {
			this.position_alert_dismissed = dismissed;
		},

		clearUser() {
			this.user = null;
		},
	},
	persist: true,
});
