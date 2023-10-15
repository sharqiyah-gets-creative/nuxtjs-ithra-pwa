export const isProduction = process.env.NODE_ENV === 'production'
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isIphone = /iPhone/i.test(navigator.userAgent);
export const hasAcknowledged = localStorage.getItem("hasAcknowledgedPrompt");
