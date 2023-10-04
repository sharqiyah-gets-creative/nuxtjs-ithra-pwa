<template>
    <main class="bg-teal-600 min-h-screen text-white space-y-24">
        <VitePwaManifest />
        <div class="bg-pink-500 p-4">
            <p>Some default layout shared across all pages</p>
        </div>
        <slot />
    </main>
</template>
