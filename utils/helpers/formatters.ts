import { Timestamp } from 'firebase/firestore';

export const formatDate = (timestamp: Timestamp) => {
	const date: Date = new Date(timestamp.seconds * 1000);

	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		calendar: 'gregory',
	};
	return new Intl.DateTimeFormat('ar-SA', options).format(date);
};

export function formatDistance(distanceInMeters: number): string {
	const distanceInKilos = distanceInMeters / 1000;
	return `${distanceInKilos.toFixed(2)} كم`;
}

// takes time as a string in this format "17:30" and returns "5:30 pm"
export const formatTime = (time: string) => {
	const [hour, minute] = time.split(':');
	const date = new Date();
	date.setHours(parseInt(hour));
	date.setMinutes(parseInt(minute));
	const options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	};
	return new Intl.DateTimeFormat('ar-SA', options).format(date);
};

export const roundToNearest50 = (n:any, withPlus:boolean = true) => {
    const num = parseInt(n, 10);

    if (isNaN(num)) {
        return n;
    }
    return Math.floor(num / 50) * 50 + (withPlus ? "+" : "");
    //return Math.floor(num / 30) * 30 + "+";
}
