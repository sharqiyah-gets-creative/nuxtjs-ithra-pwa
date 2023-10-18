/**
 *  Nuxt Plugin to handle user location
 *  @module defineNuxtPlugin
 * 
 *  Psuedo code for this plugin:
 *  - Default state for location would be a point in Sharqiyah which will be the center for google maps
 *  - On Init, if the state value doesn't exist, set this value in store
 * 
 *  - check if the user has location enabled
 *      - if location not enabled: check if they dismessed alert from store
 *          - if alert dismissed: just use the existing value in state
 *          - if alert not dismissed: prompt them to enable it through a modal or alert
 *              - if modal accepted: prompt them through the native browser api,
 *                  - if native accepted: get the location, set it in store, watch value and update it in store every 5 minutes
 *                  - if native rejected: set a state dismessed so that the prompt doesn't open again
 *              - if modal reject, set a state dismessed so that the prompt doesn't open again
 *      - if location enabled:  get the location, set it in store, watch value and update it in store every 5 minutes
 */

import { MapPosition } from "~/types";
import { getPosition, isLocationEnabled } from "~/utils/helpers";

export default defineNuxtPlugin(async (nuxtApp) => {

    const DEFAULT_CENTER_POINT : MapPosition = { lat: 26.3570737, lng: 50.1100591 };
    const store = useUserStore();

    /**
   * Initialize default state for location
   * Check if state already exists in local storage, if not set it
   */
    initState();
    /**
     * Check user's location settings and act accordingly
     */
    await checkUserLocationSettings();

    /**
     * Initialize the location state if it doesn't exist
     */
    function initState() {
        // Check local storage for existing state
        // If state exists, return
        if(store.position) {
            console.log('🗺 User location already exists', store.position)
            return;
        }
        else {
            // Set default location
            console.log('🗺 Initializing user location with default center point')
            store.setPosition(DEFAULT_CENTER_POINT);
        }
    }

    /**
     * Check if user has location services enabled and handle scenarios
     */
    async function checkUserLocationSettings() {
        console.log('🗺 Checking user location settings')
        try {
            const locationEnabled = await isLocationEnabled();
            
            // If location not enabled
            if (!locationEnabled) {
                console.log('🗺 Location not enabled')
                await handleLocationDisabled();
            } else {
                console.log('🗺 Location enabled', locationEnabled)
            // If location enabled
                await updateAndWatchLocation();
            }
        } catch (error) {
            console.error('Error checking location settings', error)
        }
    }

    /**
     * Handle scenarios where location is disabled
     */
    async function handleLocationDisabled() {
        console.log('🗺 Handling location disabled')
        // Check local storage if alert dismissed  
        const alertDismissed = store.position_alert_dismissed;
        // If alert not dismissed
        if (!alertDismissed) {
            console.log('🗺 Location alert not dismissed')
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
                            console.log('🗺 Location toast accepted')
                            await updateAndWatchLocation();
                        },
                    },
                    {
                        label: 'Dismiss',
                        click: () => {
                            console.log('🗺 Location toast dismissed')
                            setDismissed();
                        }
                    }
                ] 
            })
        }
    }

    function setDismissed(){
        store.setAlertDismissed(true);
    }

    /**
     * Get, set, and periodically update the location in the state
     */
    
    async function updateAndWatchLocation() {
        console.log('🗺 Updating and watching user location')
        const LOCATION_REFRESH_INTERVAL = 300000; // 5 minutes
        try {
            // Get the location and set it in local storage
            const location = await getPositionWithHighAccuracy(true);
            console.log('🗺 Got from locations.ts', location);
            // Set an interval to update location every 5 minutes
            setInterval(async () => {
                try {
                    const location = await getPositionWithHighAccuracy(true); 
                } 
                catch (error) {
                    console.error('Error updating location', error);
                }
            }, LOCATION_REFRESH_INTERVAL);
    
        } catch (error) {
            // Handle error, possibly use a default mechanism
            console.error('Error getting location', error)
        }
    }

    async function getPositionWithHighAccuracy(high_accuracy: boolean){
        try {
            console.log('🗺 Getting user position with high accuracy', high_accuracy)
            const position = await getPosition({ enableHighAccuracy: high_accuracy });
            console.log('🗺 Got user position with high accuracy', position)
            const coords: MapPosition = { lat: position.latitude, lng: position.longitude };
            console.log('🗺 Updating user position with ', coords)
            store.setPosition(coords)
        } catch (error) {
            console.error('Error getting position with high accuracy', error)
        }
    }
})