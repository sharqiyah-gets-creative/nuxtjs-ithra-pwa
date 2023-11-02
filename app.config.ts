export default defineAppConfig({
	ui: {
		avatar: {
			background: 'bg-gray-100 dark:bg-white-800 brightness-75',
			text: 'font-medium leading-none text-gray-900 dark:text-gray-800 truncate',
			size: {
				lg: 'h-12 w-12 text-xl',
			},
		},
		slideover: {
			background: 'bg-white dark:bg-indigo-950',
			base: 'relative rounded-e-3xl shadow flex-1 flex flex-col w-full focus:outline-none',
		},
		alert: {
			rounded: 'rounded-none',
		},
		notification: {
			wrapper: 'w-full pointer-events-auto',
			title: 'text-lg font-medium text-gray-900 dark:text-white',
			description: 'mt-1 text-lg leading-4 text-gray-500 dark:text-gray-400',
			background: 'bg-white dark:bg-gray-900',
			padding: 'p-4',
			ring: 'ring-1 ring-gray-200 dark:ring-gray-800',

		},
	},
});
