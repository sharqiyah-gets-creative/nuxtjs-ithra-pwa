import { getDocs, collection } from "firebase/firestore";
import { useFirebase } from "~/composables/useFirebase";

interface Event {
  id: string;
  title: string;
  description?: string;
  timing: string;
  location: string;
}

export const getEvents = async (config: any) => {
  try {
    const { firestore } = useFirebase(config);
    const eventsCollectionRef = collection(firestore, "events");
    const eventsCollectionSnapshot = await getDocs(eventsCollectionRef);

    const events: Event[] = eventsCollectionSnapshot.docs.map((doc) => {
      return { 
        id: doc.id, 
        ...doc.data() 
      } as Event;
    });

    return {
      events,
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { events: [] };
  }

};
