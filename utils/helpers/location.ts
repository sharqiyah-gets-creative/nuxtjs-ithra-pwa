import { MapPosition } from '~/types';

/**
 * Check if location services are enabled in the browser.
 * @async
 * @return {Promise<boolean>} - Returns true if location is enabled, otherwise false.
 */
export const isLocationEnabled = async (): Promise<boolean> => {
	const { state } = await navigator.permissions.query({ name: 'geolocation' });
	return state === 'granted' || state === 'prompt';
};

// not used anymore
export const getPositiony = async (options?: PositionOptions) => {
	console.log('🗺 Getting user position from location.ts');
	try {
		const position = await navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			console.log(position);
			return {
				lng: position.coords.longitude,
				lat: position.coords.latitude,
			};
		});
		console.log('🗺 Got user position from location.ts', position);

		return position;
	} catch (error) {
		console.error('Error getting user position', error);
		return null;
	}
};

export const getPosition = (options: any) : Promise<GeolocationCoordinates> => {
	console.log('🗺 Returning promise of position');
	return new Promise((resolve, reject) => {
		console.log('🗺 Getting user position from location.ts');
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log('🗺 Got user position from location.ts', position);
				resolve(position.coords);
			},
			(err) => {
				console.error('🗺 Error getting user position from location.ts', err);
				reject(err);
			},
      options
		);
	});
};
