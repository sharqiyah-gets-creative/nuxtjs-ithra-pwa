import { collection, getDocs, doc,  updateDoc , query, orderBy, startAt, startAfter, limit, documentId} from 'firebase/firestore';


const DEFAULT_PAGE_SIZE = 75;
const SORT_BY = 'start_date';

export const getEvents = async (cursor: any = null): Promise<IEvent[]> => {
	const { firestore } = useFirestore();

	let events: IEvent[] = [];    
    
	try {
		const eventsCollectionRef = collection(firestore, 'events');
        let q = null;
        
        if (cursor) {
            console.log('useEvents.ts', 'cursor', cursor)
            q = query(eventsCollectionRef, orderBy(documentId()), startAfter(cursor), limit(DEFAULT_PAGE_SIZE));
        }
        else{
            console.log('useEvents.ts', 'no cursor')
            q = query(eventsCollectionRef, orderBy(documentId()), limit(DEFAULT_PAGE_SIZE));
            
        }

        const documentSnapshots = await getDocs(q);
        events = documentSnapshots.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            } as IEvent;
        });

        return events;
	} catch (error: any) {
		error.value = error;
		console.error('useEvents.ts', 'Error fetching events:', error);
        throw error; // Propagate the error
	}
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

export const getAverageReviews = (reviews: IReview[]) => {
    const reviewsArray: IReview[] = Object.values(reviews || {}) as IReview[];
    console.log('event/id.vue', 'Number of reviews:', reviewsArray.length); // Debugging line

    let average = 0;

    if (reviewsArray.length > 0) {
        average = reviewsArray.reduce((a: any, b: IReview) => a + (b.rating || 0), 0) / reviewsArray.length;
    } else {
        average = 0;
    }

    // If there's only one review
    if (reviewsArray.length === 1) {
        average = reviewsArray[0].rating;
    }
    console.log('useEvents.ts', 'average_reviews', average);
    return average;
};

export const getTopReviewsComments = (reviews: IReview[], count: number) => {
    const reviewsArray: IReview[] = Object.values(reviews || {}) as IReview[];

    let topReviews: IReview[] = [];

    if (reviewsArray.length > 0) {
        topReviews = reviewsArray.sort((a: any, b: IReview) => b.rating - a.rating).slice(0, count);
    } else {
        topReviews = [];
    }

    // If there's only one review
    if (reviewsArray.length === 1) {
        topReviews = reviewsArray;
    }
    console.log('useEvents.ts', 'topReviews', topReviews);
    return topReviews;
};