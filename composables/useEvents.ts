import { collection, getDocs, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
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

export const reviewEvent = async (eventId: string, userId:string,  rating: number, review: string): Promise<void> => {
    const { firestore } = useFirestore();

    try {
        const eventRef = doc(firestore, 'events', eventId);

        const ratingObject = {
            rating: rating,
            review: review,
        }

        console.log(ratingObject);
        
        await updateDoc(eventRef, {
            [`reviews.${userId}`]: ratingObject
        });

    } catch (error: any) {
        console.error('useEvents.ts', 'Error rating event:', error);
    }
}