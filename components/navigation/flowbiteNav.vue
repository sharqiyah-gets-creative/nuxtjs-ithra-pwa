<template>
    
<div class="fixed bottom-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-primary-violet dark:border-gray-600">
    <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <button type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <UIcon class="text-3xl" name="i-mdi-home" />
            <span class="text-sm  ">الرئيسية</span>
        </button>

        <button type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <UIcon class="text-3xl" name="i-mdi-calendar" />
            <span class="text-sm  ">المبادرات</span>
        </button>

        <button type="button" class="inline-flex text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <UIcon class="text-3xl" name="i-mdi-help-circle" />
            <span class="text-sm  ">نبذة</span>
        </button>

    </div>
</div>
</template>