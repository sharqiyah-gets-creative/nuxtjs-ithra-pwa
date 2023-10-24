export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const colorGenerator = () => {
    const shades = ['valhalla', 'my-sin'];
    const values = ['400', '500', '600', '700','800', '900'];

    const randomShade = getRandomElement(shades);
    const randomValue = values[Math.floor(Math.random() * values.length)];
	return `bg-${randomShade}-${randomValue} text-white`;
};

export const getRandomColorClass = (lastColor: string) => {
	let color = colorGenerator();

    // if the generated color is the same as the previous one in the store, generate another
	while (color === lastColor) {
		color = colorGenerator();
	}

	return color;
};
