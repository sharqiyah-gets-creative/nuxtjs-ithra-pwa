<script lang="ts" setup>
defineProps(['title'])
</script>
<template>
    <tr class="border-b last:border-b-0 border-opacity-40 border-valhalla-400">
        <td scope="row" class="w-1/6 min-w-min px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ title }}</td>
        <td class="px-6 py-2 break-all">
            <slot />
        </td>
    </tr>
</template>