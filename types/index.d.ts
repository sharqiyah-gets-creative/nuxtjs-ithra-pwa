import { Timestamp } from "firebase/firestore";

declare global {
	interface IEvent {
		id: string;
		title: string;
		entity?: string;
		category?: string;
		start_time: Timestamp;
		end_time: Timestamp;
		language?: string[];
		city?: string;
		area?: string;
		ll: string;
	}
}

export { IEvent };
