import { Timestamp } from "firebase/firestore";

export const formatDate = (timestamp: Timestamp) => {
  const date: Date = new Date(timestamp.seconds * 1000);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    calendar: "gregory",
  };
  return new Intl.DateTimeFormat("ar-SA", options).format(date);
};

export function formatDistance(distanceInMeters: number): string {
  const distanceInKilos = distanceInMeters / 1000;
  return `${distanceInKilos.toFixed(2)} كم`;
}