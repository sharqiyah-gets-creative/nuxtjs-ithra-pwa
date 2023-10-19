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
		distance?: number;
		city?: string;
		area?: string;
		ll: string;
	}
}

interface MapPosition {
	lat?: number;
	lng?: number;
}

interface IGetEvents {
	events: IEvent[];
	error: Record<string, unknown> | null;
  }

export { IEvent, MapPosition, IGetEvents };
