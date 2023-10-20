import { MapPosition } from "~/types";
import { getDistance, getPosition, isLocationEnabled } from "~/utils/helpers";
import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin(async () => {

    const DEFAULT_CENTER_POINT : MapPosition = { lat: 26.3570737, lng: 50.1100591 };
    const { position, setPosition, position_alert_dismissed, setAlertDismissed } = useUserStore();

    // Initialize default state for location, Check if state already exists in local storage, if not set it
    initState();

    // Check user's location settings and act accordingly
    await checkUserLocationSettings();

    // Initialize the location state if it doesn't exist
    function initState() {
        // Check local storage for existing state
        // If state exists, return
        if(position) {
            console.log('user-location.cliehnt.ts', '🗺 User location already exists', position)
            return;
        }
        else {
            // Set default location
            console.log('🗺 Initializing user location with default center point')
            setPosition(DEFAULT_CENTER_POINT);
        }
    }

    // Check if user has location services enabled and handle scenarios
    async function checkUserLocationSettings() {
        console.log('user-location.cliehnt.ts', '🗺 Checking user location settings')
        try {
            const locationEnabled = await isLocationEnabled();
            
            // If location not enabled
            if (!locationEnabled) {
                console.log('user-location.cliehnt.ts', '🗺 Location not enabled')
                await handleLocationDisabled();
            } else {
                console.log('user-location.cliehnt.ts', '🗺 Location enabled', locationEnabled)
            // If location enabled
                await updateAndWatchLocation();
            }
        } catch (error) {
            console.error('user-location.cliehnt.ts', 'Error checking location settings', error)
        }
    }

    // Handle scenarios where location is disabled
    async function handleLocationDisabled() {
        console.log('user-location.cliehnt.ts', '🗺 Handling location disabled')
        // Check local storage if alert dismissed  
        const alertDismissed = position_alert_dismissed;
        // If alert not dismissed
        if (!alertDismissed) {
            console.log('user-location.cliehnt.ts', '🗺 Location alert not dismissed')
            // Show modal to prompt for enabling location
            const toast = useToast();
            
            await toast.add({
                id: 'approve_permission',
                title: 'Enable location',
                description: 'Please enable location to use the app',
                color: 'primary',
                timeout: 0,
                actions:[
                    {
                        label: 'Accept',
                        click: async () => {
                            console.log('user-location.cliehnt.ts', '🗺 Location toast accepted')
                            await updateAndWatchLocation();
                        },
                    },
                    {
                        label: 'Dismiss',
                        click: () => {
                            console.log('user-location.cliehnt.ts', '🗺 Location toast dismissed')
                            setAlertDismissed(true);
                        }
                    }
                ] 
            })
        }
    }

    // Get, set, and periodically update the location in the state  
    async function updateAndWatchLocation() {
        console.log('user-location.cliehnt.ts', '🗺 Updating and watching user location')
        const LOCATION_REFRESH_INTERVAL = 300000; // 5 minutes
        try {
            // Get the location and set it in local storage
            const location = await getPositionWithHighAccuracy(true);
            console.log('user-location.cliehnt.ts', '🗺 Got', location);
            // Set an interval to update location every 5 minutes
            setInterval(async () => {
                try {
                    const location = await getPositionWithHighAccuracy(true); 
                } 
                catch (error) {
                    console.error('user-location.cliehnt.ts', 'Error updating location', error);
                }
            }, LOCATION_REFRESH_INTERVAL);
    
        } catch (error) {
            // Handle error, possibly use a default mechanism
            console.error('user-location.cliehnt.ts', 'Error getting location', error)
        }
    }

    async function getPositionWithHighAccuracy(high_accuracy: boolean){
        try {
            console.log('user-location.cliehnt.ts', '🗺 Getting user position with high accuracy', high_accuracy)
            
            const position = await getPosition({ enableHighAccuracy: high_accuracy });
            console.log('user-location.cliehnt.ts', '🗺 Got user position with high accuracy', position)
            
            const coords: MapPosition = { lat: position.latitude, lng: position.longitude };
            console.log('user-location.cliehnt.ts', '🗺 Updating user position with high accuracy', coords)
            
            // if user location is more than 100 km from the default center point, set it to the default center point
            const distance = getDistance(coords.lat, coords.lng, DEFAULT_CENTER_POINT.lat, DEFAULT_CENTER_POINT.lng);
            
            if(distance > 100000) {
                console.log('user-location.cliehnt.ts', '🗺 User location is more than 100 km from the default center point, setting it to the default center point')
                setPosition(DEFAULT_CENTER_POINT);
                return DEFAULT_CENTER_POINT;
            }

            setPosition(coords)
            return coords;
        } catch (error) {
            console.error('user-location.cliehnt.ts', 'Error getting position with high accuracy', error)
        }
    }
})