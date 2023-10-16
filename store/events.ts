import { defineStore } from "pinia";

const SETTINGS_LOCAL_STORAGE_KEY = 'events'

const defaultEvents = ref([]);

const getStateEvents = () => {
  const events = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)
  return events ? JSON.parse(events) : defaultEvents
}

export const useEventsStore = defineStore({
	id: "myEventsStore",

	state: () => ({
		events: getStateEvents(),
		eventsLastUpdated: localStorage.getItem('events_updated_at') || null,
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

		getEventById(id: string) {
			if (this.events) {
				return this.events.find((event: IEvent) => event.id === id);
			}
			return null;
		},

		getEventsCount() {
			return this.events ? this.events.length : 0;
		},

		// getEventsEntitiesUnique Count
		getEventsEntitiesCount() {
			if (this.events) {
				const entities = this.events.map((event: IEvent) => event.entity);
				return [...new Set(entities)].length;
			}
			return 0;
		},

		// getEventsCitiesCount
		getEventsCitiesCount() {
			if (this.events) {
				const cities = this.events.map((event: IEvent) => event.city);
				return [...new Set(cities)].length;
			}
			return 0;
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
			console.log('📪 Updating local storage with events data')
			window.localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(this.events));
			// store the time when the data was stored
			window.localStorage.setItem('events_updated_at', new Date().getTime().toString());
		},

		async boot() {
			console.log('💚 Booting Events')

			// should check store, if event exists, doesn't add it
			// if data is 1 day old, refresh it
			if (this.eventsLastUpdated === null || (new Date().getTime() - parseInt(this.eventsLastUpdated)) > 86400000 ) {
				console.log("📪 Store empty or old, getting events from firebase");
					
				// get events from firebase
				const { events } = await getEvents();

				this.events = events;
				this.updateLocalStorage();
			} else {
				console.log(`💯 Store not empty, ${this.events.length} events found`);
			}
		},
	},
});
