import { defineStore } from 'pinia';
import { getDistance } from '@/utils/helpers';

export const useEventsStore = defineStore('EVENTS_STORE', {
	state: () => ({
		events: [] as IEvent[],
		eventsLastUpdated: null,
		searchKeywords: '',
	}),

	actions: {
		addEvent(event: IEvent) {
			if (this.events) {
				this.events.push(event);
			} else {
				this.events = [event];
			}
		},

		setSearchKeywords(keywords: string) {
			this.searchKeywords = keywords;
		},

		removeEvent(id: string) {
			if (this.events) {
				this.events = this.events.filter((event: IEvent) => event.id !== id);
			}
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
		},

		clearEvents() {
			this.events.length = 0;
		},

		async boot() {
			try {
				console.log('💚 Booting Events');

				// should check store, if event exists, doesn't add it
				// if data is 1 day old, refresh it
				if (this.eventsLastUpdated === null || new Date().getTime() - parseInt(this.eventsLastUpdated) > 86400000) {
					console.log('📪 Store empty or old, getting events from firebase');

					// get events from firebase
					const { events } = await getEvents();

					this.events = events;
				} else {
					console.log(`💯 Store not empty, ${this.events.length} events found`);
				}
			} catch (e) {
				console.error('📪 Error booting Events', e);
			}
		},
	},
	persist: true,
});
