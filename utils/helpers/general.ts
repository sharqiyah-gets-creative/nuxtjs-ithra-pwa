export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const colorGenerator = () => {
    const colors = ['primary', 'secondary'];
    const shades = ['violet', 'yellow', 'pink', 'green'];
    const values = ['400', '500', '600', '700'];

    const randomColor = getRandomElement(colors);
    const randomShade = getRandomElement(shades);
    const randomValue = values[Math.floor(Math.random() * values.length)];
	return `bg-${randomShade}-${randomColor}-${randomValue} text-white`;
};

export const getRandomColorClass = (lastColor: string) => {
	let color = colorGenerator();

    // if the generated color is the same as the previous one in the store, generate another
	while (color === lastColor) {
		color = colorGenerator();
	}

	return color;
};
