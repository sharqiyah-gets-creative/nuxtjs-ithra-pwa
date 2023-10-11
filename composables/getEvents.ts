import { collection, getDocs } from "firebase/firestore";

export const getEvents = async (config: any) => {

  const { firestore } = useFirestore();

  const error = ref<any | null>(null);

  const events = ref<IEvent[]>([]);

  try {
    const eventsCollectionRef = collection(firestore, "events");
    const eventsCollectionSnapshot = await getDocs(eventsCollectionRef);
    
    events.value = eventsCollectionSnapshot.docs.map((doc) => {
      return { 
        id: doc.id, 
        ...doc.data() 
      } as IEvent;
    });

  } 
  catch (error: any) {
    error.value = error;
    console.error("Error fetching events:", error);
  }

  return {
    events, error
  };

};
