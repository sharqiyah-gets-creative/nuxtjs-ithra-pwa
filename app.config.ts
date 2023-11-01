export default defineAppConfig({
    ui:{
        avatar:{
            background: "bg-gray-100 dark:bg-white-800 brightness-75",
            text: "font-medium leading-none text-gray-900 dark:text-gray-800 truncate",
            size: {
                lg: "h-12 w-12 text-xl",
            },
        },
        slideover:{
            background: "bg-white dark:bg-indigo-950",
            base: "relative rounded-e-3xl shadow flex-1 flex flex-col w-full focus:outline-none",

        },
        alert:{
            rounded: 'rounded-none',
        },
    }
})