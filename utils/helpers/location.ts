/**
 * Check if location services are enabled in the browser.
 * @async
 * @return {Promise<boolean>} - Returns true if location is enabled, otherwise false.
 */
export const isLocationEnabled = async () : Promise<boolean> => {
  const { state } = await navigator.permissions.query({ name: 'geolocation' });
  return state === 'granted' || state === 'prompt';
};
