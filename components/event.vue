<template>
    
<div class="w-full text-slate-900  rounded-xl  overflow-hidden">
    <div :class="header_class" class="p-2 px-4 text-lg font-bold">{{ name }}</div>
    <div class="p-2 px-4 bg-white">
        <ul class="space-y-1 font-light text-base">
            <li class="flex justify-start items-center"><UIcon class="me-2" name="i-heroicons-clock" />{{ timing }}</li>
            <li class="flex justify-start items-center"><UIcon class="me-2" name="i-heroicons-map-pin-solid" />{{  location  }}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['name', 'header_class', 'timing', 'location']
};
</script>