import { Timestamp } from "firebase/firestore";

export const isProduction = process.env.NODE_ENV === 'production'
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isIphone = /iPhone/i.test(navigator.userAgent);
export const hasAcknowledged = localStorage.getItem("hasAcknowledgedPrompt");



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
    //console.log(toRaw(timestamp));
    //console.log(Intl.DateTimeFormat('ar-SA', options).format(date))
    return new Intl.DateTimeFormat("ar-SA", options).format(date);
};