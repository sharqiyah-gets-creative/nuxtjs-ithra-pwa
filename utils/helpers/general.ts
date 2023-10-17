export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const getRandomColorClass = () => {
    const colors = ['primary', 'secondary'];
    const shades = ['violet', 'yellow', 'pink', 'green'];
    const randomColor = getRandomElement(colors);
    const randomShade = getRandomElement(shades);
    return `bg-${randomColor}-${randomShade} text-white`;
}