declare global {
	interface IEvent {
		id: string;
		title: string;
		description?: string;
		timing: string;
		location: string;
	}
}

export { IEvent };
