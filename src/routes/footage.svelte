<script context="module">
	import { browser, dev } from '$app/env';
	import Carousel from '$lib/carousel.svelte';

	const images = [
		{
			path: '/footage/MP_PittSt_Edge.png',
			id: 'wa-1',
			location: 'Mt Pleasant',
			alt: 'Marsh view @ Pitt St Bridge',
			refLink: 'https://emma.myhomecharleston.com'
		},
		{
			path: '/footage/WA_CawCaw_Swamp.png',
			id: 'cv-3',
			location: 'West of the Ashley',
			alt: 'Rainbow Swamp @ Caw Caw',
			refLink: 'https://coastal-vantage.com'
		},
		{
			path: '/footage/JO_Stono_Edge.png',
			id: 'cv-4',
			location: 'Johns Island',
			alt: 'Marsh view @ Stono Park',
			refLink: 'https://coastal-vantage.com'
		},
		{
			path: '/footage/DT_Alley.png',
			id: 'cv-6',
			location: 'Peninsula',
			alt: 'Downtown Alley',
			refLink: 'https://coastal-vantage.com'
		}
	];
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Footage</title>
</svelte:head>
<div class="items-center bg-transparent py-3 flex flex-col justify-start sm:py-8">
	<Carousel {images} />
	<p class="pt-3 bhhs">
		<em>
			View More
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 inline"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			<a href="https://instagram.com/coastal_vantage" target="_blank"
				><svg
					version="1.1"
					class="fa-icon inline bhhs hover:text-red-700"
					width="27.428571428571427"
					height="32"
					aria-label="Instagram"
					role="img"
					viewBox="0 0 1536 1822"
					style="font-size: 2.15em"
				>
					<path
						id="path-0"
						d="M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1162 896q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zM1270 486q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM768 266q-7 0-76.5-0.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5 0.5 76.5-0.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-0.5 76.5 0.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-0.5-76.5 0.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5 0.5zM1536 896q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
					/>
				</svg></a
			>
		</em>
	</p>
</div>
