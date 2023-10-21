export const DEFAULT_CENTER_POINT  = { lat: 26.3570737, lng: 50.1100591 };

/**
 * Check if location services are enabled in the browser.
 * @async
 * @return {Promise<boolean>} - Returns true if location is enabled, otherwise false.
 */
export const isLocationEnabled = async (): Promise<boolean> => {
	const { state } = await navigator.permissions.query({ name: 'geolocation' });
	return state === 'granted';
};

// not used anymore
export const getPositiony = async (options?: PositionOptions) => {
	console.log('utils/helpers/location.ts', '🗺 Getting user position from location.ts');
	try {
		const position = await navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			console.log(position);
			return {
				lng: position.coords.longitude,
				lat: position.coords.latitude,
			};
		});
		console.log('utils/helpers/location.ts', '🗺 Got user position from location.ts', position);

		return position;
	} catch (error) {
		console.error('utils/helpers/location.ts', 'Error getting user position', error);
		return null;
	}
};

export const getPosition = (options: any) : Promise<GeolocationCoordinates> => {
	console.log('utils/helpers/location.ts', '🗺 Returning promise of position');
	return new Promise((resolve, reject) => {
		console.log('utils/helpers/location.ts', '🗺 Getting user position from location.ts');
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log('utils/helpers/location.ts', '🗺 Got user position from location.ts', position);
				resolve(position.coords);
			},
			(err) => {
				console.error('utils/helpers/location.ts', '🗺 Error getting user position from location.ts', err);
				reject(err);
			},
      options
		);
	});
};
