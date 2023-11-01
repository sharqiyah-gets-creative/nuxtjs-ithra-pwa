export const useEventsStore = defineStore('EVENTS_STORE', {
	state: () => ({
		events: [] as IEvent[],
		eventsLastUpdated: null as string | null,
		searchKeywords: ref(null) as Ref<string | null>,
	}),

	actions: {
		addEvent(event: IEvent) {
			if (this.events) {
				this.events.push(event);
			} else {
				this.events = [event];
			}
		},

		removeEvent(id: string) {
			if (this.events) {
				this.events = this.events.filter((event: IEvent) => event.id !== id);
			}
		},

		setSearchKeywords(keywords: string) {
			this.searchKeywords = keywords;
		},

		getEventsByDistance(position: any) {
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

        getEventsGroupedByLocation(events: IEvent[]) {
            const response = events.reduce((acc: any, event: IEvent) => {
                if (acc[event.ll]) {
                    acc[event.ll].push(event);
                } else {
                    acc[event.ll] = [event];
                }
                return acc;
            }, {});

            return response;
        },

        getEventsCities(events: IEvent[]) {
            const cities = [...new Set(events.map((event: IEvent) => event.city))];
            return cities;
        },

        getEventsByCity(city: string) {
            const events = this.events.filter((event: IEvent) => event.city === city);
            return events;
        },

		getEventById(id: string): IEvent | null {
			if (this.events) {
				const event = this.events.find((event: IEvent) => event.id === id) as IEvent;
				return event;
			}
			return null;
		},

		getCounters() {
			return {
				events: this.events ? this.events.length : 0,
				entities: this.events ? [...new Set(this.events.map((event: IEvent) => event.entity))].length : 0,
				cities: this.events ? [...new Set(this.events.map((event: IEvent) => event.city))].length : 0,
			};
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

        // refresh storage
        async refreshEvents() {
            try {
                console.log('stores/events.ts', '📪 Updating events from firebase');

                // get events from firebase
                const events = await getEvents();
                if(events.length === 0) {
                    console.log('stores/events.ts', '📪 No events found in firebase');
                }
                else{
                    console.log('stores/events.ts', `📪 ${events.length} events found in firebase`);
                    this.events = events;
                    this.eventsLastUpdated = new Date().getTime().toString();
                }
                
            } catch (e) {
                console.error('stores/events.ts', '📪 Error updating Events', e);
            }
        },

		async boot() {
			try {
				console.log('stores/events.ts', '💚 Booting Events');

                const A_DAY = 86400000;
                const isEventsLastUpdatedaDayAgo = this.eventsLastUpdated !== null && new Date().getTime() - parseInt(this.eventsLastUpdated) > A_DAY;
                const areThereEvents = this.events.length > 0;
				// if events are not in store or old, get them from firebase
				if (!areThereEvents || isEventsLastUpdatedaDayAgo) {
					console.log('stores/events.ts', '📪 Store empty or old, getting events from firebase');

					// get events from firebase
					let events = await getEvents();

                    if(events.length === 0) {
                        console.log('stores/events.ts', '📪 No events found in firebase');
                        return;
                    }

                    console.log('stores/events.ts', `📪 ${events.length} events found in firebase`);
                    this.events = events;
                    console.log("Events from Firebase: ", this.events);

                    this.eventsLastUpdated = new Date().getTime().toString();

                    // Get the last event's cursor for next query
			        let lastEvent = events[events.length - 1];

                    while (true) {
                        console.log('stores/events.ts', `📪 Getting more events from firebase`);
                        let newEvents = await getEvents(lastEvent.id);
                        if (newEvents.length === 0) {
                            break; // Stop if there are no more events
                        }
                        this.events.push(...newEvents); // Add new events to your store
        
                        // Update the last cursor
                        lastEvent = newEvents[newEvents.length - 1];
                        console.log('stores/events.ts', `📪 ${newEvents.length} events found in firebase`);
                    }
        
				} 
                else {
					console.log('stores/events.ts', `💯 Store not empty, ${this.events.length} events found`);
				}
			} catch (e) {
				console.error('stores/events.ts', '📪 Error booting Events', e);
			}
		},
	},
	persist: true,
});

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useEventsStore, import.meta.hot));
}