import { defineStore } from "pinia";

const SETTINGS_LOCAL_STORAGE_KEY = 'events'

const defaultEvents = undefined;

const getStateEvents = () => {
  const events = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)
  return events ? JSON.parse(events) : defaultEvents
}

export const useEventsStore = defineStore({
	id: "myEventsStore",

	state: () => ({
		events: getStateEvents(),
	}),
	actions: {
		addEvent(event: IEvent) {
			if (this.events) {
				this.events.push(event);
			} else {
				this.events = [event];
			}
			this.updateLocalStorage();
		},

		removeEvent(id: string) {
			if (this.events) {
				this.events = this.events.filter((event: IEvent) => event.id !== id);
			}
      this.updateLocalStorage();
		},

		updateEvent(id: string, event: IEvent) {
			if (this.events) {
				const index = this.events.findIndex((event: IEvent) => event.id === id);
				this.events[index] = event;
			}
			this.updateLocalStorage();
		},

		clearEvents() {
			this.events = undefined;
      this.updateLocalStorage();
		},

    updateLocalStorage(){
      window.localStorage.setItem("events", JSON.stringify(this.events));
    },

		async boot() {
      
      console.log('💚 Booting Events')

			// should check store, if event exists, doesn't add it
			if (this.events === undefined || this.events.length === 0) {
				console.log("📪 Store empty, getting events from firebase");
				
        // get events from firebase
        const { $config } = useNuxtApp()
				const { events } = await getEvents($config);

				this.events = events;
        this.updateLocalStorage();
			} else {
				console.log(
					`💯 Store not empty, ${this.events.length} events found`
				);
			}
		},
	},
});
