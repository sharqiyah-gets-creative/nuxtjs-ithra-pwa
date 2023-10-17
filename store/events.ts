import { defineStore } from "pinia";
import { getDistance, setLocalStorageItem, getLocalStorageItem } from "@/utils/helpers";


const EVENTS_STORE_ID = 'myEventsStore'
const EVENTS_LOCAL_STORAGE_KEY = 'events'
const EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY = 'events_updated_at'

export const useEventsStore = defineStore({
	id: EVENTS_STORE_ID,

	state: () => ({
		events: getLocalStorageItem(EVENTS_LOCAL_STORAGE_KEY, []),
		eventsLastUpdated: getLocalStorageItem(EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY, null),
	}),
	
	actions: {
		addEvent(event: IEvent) {
			if (this.events) {
				this.events.push(event);
			} else {
				this.events = [event];
			}
			setLocalStorageItem(EVENTS_LOCAL_STORAGE_KEY, this.events, false)
			setLocalStorageItem(EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY, new Date().getTime().toString(), false)
		},

		removeEvent(id: string) {
			if (this.events) {
				this.events = this.events.filter((event: IEvent) => event.id !== id);
			}
			setLocalStorageItem(EVENTS_LOCAL_STORAGE_KEY, this.events, false)
			setLocalStorageItem(EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY, new Date().getTime().toString(), false)
		},

		getEventsByPosition(position: any) {
			const events = this.events.sort((a: IEvent, b: IEvent) => {
				const distanceToA = getDistance(position.lat, position.lng, parseFloat(a.ll.split(',')[0]), parseFloat(a.ll.split(',')[1]));
				const distanceToB = getDistance(position.lat, position.lng, parseFloat(b.ll.split(',')[0]), parseFloat(b.ll.split(',')[1]));
				return distanceToA - distanceToB;
			});
			events.map((event: IEvent) => {
				event.distance = getDistance(position.lat, position.lng, parseFloat(event.ll.split(',')[0]), parseFloat(event.ll.split(',')[1]));
				return event;
			});
			
			return events;
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
			setLocalStorageItem(EVENTS_LOCAL_STORAGE_KEY, this.events, false)
			setLocalStorageItem(EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY, new Date().getTime().toString(), false)
		},

		clearEvents() {
			this.events = undefined;
			setLocalStorageItem(EVENTS_LOCAL_STORAGE_KEY, this.events, false)
			setLocalStorageItem(EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY, new Date().getTime().toString(), false)
		},


		async boot() {
			try{
				console.log('💚 Booting Events')

				// should check store, if event exists, doesn't add it
				// if data is 1 day old, refresh it
				if (this.eventsLastUpdated === null || (new Date().getTime() - parseInt(this.eventsLastUpdated)) > 86400000 ) {
					console.log("📪 Store empty or old, getting events from firebase");
						
					// get events from firebase
					const { events } = await getEvents();

					this.events = events;

					setLocalStorageItem(EVENTS_LOCAL_STORAGE_KEY, this.events, false)
					setLocalStorageItem(EVENTS_LAST_UPDATED_LOCAL_STORAGE_KEY, new Date().getTime().toString(), false)
				} else {
					console.log(`💯 Store not empty, ${this.events.length} events found`);
				}
			}
			catch(e) {
				console.error('📪 Error booting Events', e);
			}
		},
	},
});
