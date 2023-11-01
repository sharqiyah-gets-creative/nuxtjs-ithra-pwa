import { Timestamp } from 'firebase/firestore';
import { z } from 'zod';

declare global {
	interface IEvent {
		id?: string;
		title: string;
        description?: string;
		entity?: string;
		category?: string;
        start_date: Timestamp;
        end_date: Timestamp;
		start_time: string;
		end_time: string;
		language?: string[] | string;
        reviews?: IReview[];
		distance?: number;
		city?: string;
		area?: string;
		ll: string;
	}

    interface IReview {
        rating: number;
        review?: string;
    }

	interface MapPosition {
		lat?: number;
		lng?: number;
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

export { IEvent, MapPosition, IGetEvents, };
