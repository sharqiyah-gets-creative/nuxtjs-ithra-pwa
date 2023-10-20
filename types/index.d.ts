import { Timestamp } from 'firebase/firestore';
import { z } from 'zod';

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
	interface MapPosition {
		lat?: number;
		lng?: number;
	}
	interface IGetEvents {
		events: IEvent[];
		error: Record<string, unknown> | null;
	}

    type IUser = {
        id: string;
        email: string;
        name: string;
        photoURL?: string;
    } & {
        [prop: string]: string;
    } & UserCredential;

    type Schema = z.output<typeof schema>;
}

export { IEvent, MapPosition, IGetEvents };
