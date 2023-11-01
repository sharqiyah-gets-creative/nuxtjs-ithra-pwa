import { getDistance, getPosition, isLocationEnabled } from "~/utils/helpers";
import { useUserStore } from '~/stores/user'
import { DEFAULT_CENTER_POINT } from '~/utils/helpers/location';

export default defineNuxtPlugin(async () => {

    
    const { position, setPosition, position_alert_dismissed, setAlertDismissed } = useUserStore();

    // Initialize default state for location, Check if state already exists in local storage, if not set it
    initState();

    // Check user's location settings and act accordingly
    await checkUserLocationSettings();

    // Initialize the location state if it doesn't exist
    function initState() {
        // Check local storage for existing state
        // If state exists, return
        if(position?.lat && position?.lng) {
            console.log('user-location.cliehnt.ts', '🗺 User location already exists', position)
            return;
        }
        else {
            // Set default location
            //console.log('🗺 Initializing user location with default center point')
            //setPosition(DEFAULT_CENTER_POINT);
        }
    }

    // Check if user has location services enabled and handle scenarios
    async function checkUserLocationSettings() {

        try {
            const locationEnabled = await isLocationEnabled();
            console.log('user-location.client.ts', '🗺 Location enabled', locationEnabled)
            
            // If location not enabled
            if (!locationEnabled) {
                // set state not enabled
                useUserStore().setLocationEnabled(false);

                // Handle scenarios where location is disabled
                await handleLocationDisabled();
            } else {
                // set state enabled
                useUserStore().setLocationEnabled(true);

                // If location enabled
                await updateAndWatchLocation();
            }
        } catch (error) {
            console.error('user-location.client.ts', 'Error checking location settings', error)
        }
    }

    // Handle scenarios where location is disabled
    // logic should be moved somewhere else
    async function handleLocationDisabled() {
        // Check local storage if alert dismissed  
        const alertDismissed = position_alert_dismissed;
        // If alert not dismissed
        if (!alertDismissed) {
            console.log('user-location.cliehnt.ts', '🗺 Location alert not dismissed')
            // Show modal to prompt for enabling location
        }
    }

    // Get, set, and periodically update the location in the state  
    async function updateAndWatchLocation() {

        const LOCATION_REFRESH_INTERVAL = 300000; // 5 minutes

        try {
            // Get the location and set it in local storage
            const location = await getPositionWithHighAccuracy(true);
            
            // Set an interval to update location every 5 minutes
            setInterval(async () => {
                try {
                    const location = await getPositionWithHighAccuracy(true); 
                } 
                catch (error) {
                    console.error('user-location.client.ts', 'Error updating location', error);
                }
            }, LOCATION_REFRESH_INTERVAL);
    
        } catch (error) {
            // Handle error, possibly use a default mechanism
            console.error('user-location.client.ts', 'Error getting location', error)
        }
    }

    async function getPositionWithHighAccuracy(high_accuracy: boolean){
        try {
            
            const position = await getPosition({ enableHighAccuracy: high_accuracy });

            const lng = position.longitude;
            const lat = position.latitude;
            
            const coords = { lat: lat, lng: lng };
            
            // if user location is more than 100 km from the default center point, set it to the default center point
            const distance = getDistance(coords.lat, coords.lng, DEFAULT_CENTER_POINT.lat, DEFAULT_CENTER_POINT.lng);
            
            if(distance > 100000) {
                console.log('user-location.client.ts', '🗺 User location is more than 100 km from the default center point, setting it to the default center point')
                setPosition(DEFAULT_CENTER_POINT);
                return DEFAULT_CENTER_POINT;
            }

            setPosition(coords)
            return coords;
        } catch (error) {
            console.error('user-location.client.ts', 'Error getting position with high accuracy', error)
        }
    }
})