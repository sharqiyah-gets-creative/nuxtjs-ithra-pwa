import { FirebaseOptions } from "firebase/app";
import { getDocs, collection } from "firebase/firestore";

import { useFirebase } from "~/composables/useFirebase";

export const getEvents = async (config: any) => {
  try {
    const { firestore } = useFirebase(config);
    const eventsCollectionRef = collection(firestore, "events");
    const eventsCollectionSnapshot = await getDocs(eventsCollectionRef);

    const events: IEvent[] = eventsCollectionSnapshot.docs.map((doc) => {
      return { 
        id: doc.id, 
        ...doc.data() 
      } as IEvent;
    });

    return {
      events,
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { events: [] };
  }

};
