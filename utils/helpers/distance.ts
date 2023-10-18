
export const userPosition = async () =>{
  const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return position
}



export const sortByDistance = (items: Array<{lat: number, lon: number}>, lat: number, lon: number) => {
  items.sort((a, b) => {
      const distanceToA = getDistance(lat, lon, a.lat, a.lon);
      const distanceToB = getDistance(lat, lon, b.lat, b.lon);
      return distanceToA - distanceToB;
  });
}

export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * Math.PI / 180; // Latitude of first point converted to radians
  const φ2 = lat2 * Math.PI / 180; // Latitude of second point converted to radians
  const Δφ = (lat2 - lat1) * Math.PI / 180; // Change in latitude converted to radians
  const Δλ = (lon2 - lon1) * Math.PI / 180; // Change in longitude converted to radians

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // Distance in meters
  return d;
}