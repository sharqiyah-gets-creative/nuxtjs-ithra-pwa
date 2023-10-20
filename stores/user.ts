import { MapPosition } from '~/types';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('USER_STORE', {
	
    state: () => ({
		user: null as IUser,
		position: {} as MapPosition,
		position_alert_dismissed: false as boolean,
        add_to_home_screen_dismissed: false as boolean,
	}),

	getters: {
		getUser: (state) => state.user,
		getPosition: (state) => state.position,
		getPositionAlertDismissed: (state) => state.position_alert_dismissed,
        getAddToHomeScreenDismissed: (state) => state.add_to_home_screen_dismissed,
	},

	actions: {
		setUser(user: IUser) {
			this.user = user;
            window.location.reload();
		},

		setPosition(position: MapPosition) {
			this.position = position;
		},

		setAlertDismissed(dismissed: boolean) {
			this.position_alert_dismissed = dismissed;
		},

        setAddToHomeScreenDismissed(dismissed: boolean) {
            this.add_to_home_screen_dismissed = dismissed;
        },

		clearUser() {
			this.user = null;
            navigateTo('/', )
		},
	},
	persist: true,
});
