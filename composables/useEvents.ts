import { collection, getDocs } from 'firebase/firestore';
import { IGetEvents } from '~/types';

export const getEvents = async (): Promise<IGetEvents> => {
	const { firestore } = useFirestore();

	const error = null;
	let events: IEvent[] = [];

	try {
		const eventsCollectionRef = collection(firestore, 'events');
		const eventsCollectionSnapshot = await getDocs(eventsCollectionRef);

		events = eventsCollectionSnapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			} as IEvent;
		});
	} catch (error: any) {
		error.value = error;
		console.error('useEvents.ts', 'Error fetching events:', error);
	}

	return {
		events,
		error,
	};
};
