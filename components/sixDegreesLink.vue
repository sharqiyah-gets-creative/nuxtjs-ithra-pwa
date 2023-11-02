<script lang="ts" setup></script>
<template>
	<NuxtLink to="https://www.6degrees.com.sa/" target="_blank" class="flex justify-center items-center">
		<svg class="fill-current h-5 me-2" viewBox="0 0 763 1077">
			<g filter="url(#a)">
				<path
					d="M683.73 788.885 542.622 962.666c-40.077 43.384 20.039 89.684 51.35 48.804l150.709-185.877c22.961-43.799-34.233-75.919-60.951-36.708Zm-5.845-204.982L340.116 999.374c-40.077 43.386 20.039 89.686 51.35 48.806l346.536-427.152c22.961-43.799-33.398-76.336-60.117-37.125Zm-66.379-130.982-409.157 502.72c-40.077 43.382 20.039 89.689 51.35 48.809l411.244-506.061c28.806-38.376-23.796-79.673-53.437-45.468Zm-104.369-84.446L97.9799 871.195C57.9024 914.577 118.019 960.88 149.33 920l411.244-506.056c28.806-38.377-23.796-79.673-53.437-45.469ZM619.855 19.7471 24.534 752.01c-30.05839 36.709 22.1262 83.428 55.107 43.8L673.292 65.2155c28.806-38.3763-23.796-79.673-53.437-45.4684ZM436.166 30.7768 15.9955 547.612c-30.0583 36.708 22.1263 83.428 55.107 43.8L488.768 78.7482c30.476-40.0456-20.039-80.09113-52.602-47.9714Z" />
			</g>
			<defs>
				<filter id="a" width="763" height="1077" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dx="3" dy="3" />
					<feGaussianBlur stdDeviation="5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_501_86" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow_501_86" result="shape" />
				</filter>
			</defs>
		</svg>
		<span>{{ $t('done_by') }}</span>
	</NuxtLink>
</template>
