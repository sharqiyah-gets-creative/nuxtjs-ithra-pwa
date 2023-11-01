import type { MapPosition } from '~/types';
import { saveUserInFirestore } from '~/composables/useFirestore';

export const useUserStore = defineStore('USER_STORE', {
	
    state: () => ({
		user: null as IUser,
		position: {} as MapPosition,
        location_enabled: false as boolean,
		position_alert_dismissed: false as boolean,
        add_to_home_screen_dismissed: false as boolean,
	}),

	getters: {
		getUser: (state) => state.user,
		getPosition: (state) => state.position,
        getLocationEnabled: (state) => state.location_enabled,
		getPositionAlertDismissed: (state) => state.position_alert_dismissed,
        getAddToHomeScreenDismissed: (state) => state.add_to_home_screen_dismissed,
	},

	actions: {
		async setUser(user: IUser) {
			this.user = user;
            await saveUserInFirestore(user);
            window.location.reload();
		},

        setLocationEnabled(enabled: boolean) {
            this.location_enabled = enabled;
        },

		setPosition(position: MapPosition) {
			this.position = position;
		},

		setPositionAlertDismissed(dismissed: boolean) {
			this.position_alert_dismissed = dismissed;
		},

        setAddToHomeScreenDismissed(dismissed: boolean) {
            this.add_to_home_screen_dismissed = dismissed;
        },

		clearUser() {
			this.user = null;
            window.location.reload();
		},
	},
	persist: true,
});

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}