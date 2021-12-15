<script context="module">
	import { browser, dev } from '$app/env';
	import { Icon } from 'svelte-awesome';
	import { globe } from 'svelte-awesome/icons';

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
	<title>Contact</title>
</svelte:head>
<div class="items-center bg-transparent py-3 flex flex-col justify-start sm:py-8">
	<section>
		<p class="font-semibold">Emma Paz</p>
		<p class="pb-3">Licensed REALTOR&reg; with</p>
	</section>
	<section>
		<img src="/logos/bhhs.png" alt="BHHS Logo" />

		<p class="pt-3">License #: 126299</p>
		<p>1440 Ben Sawyer Blvd Ste 1503</p>
		<p>Mt Pleasant, SC 29464</p>
		<p class="pb-3"><a class="bhhs" href="tel:+18433888118">843-388-8118</a></p>
		<a
			href="https://emma.myhomecharleston.com"
			target="_blank"
			class="button shadow-md bg-blue-900 text-white hover:bg-yellow-400 hover:text-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
			>BHHS Properties <svg
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
		</a>
	</section>
	<section class="max-w-xl mx-auto p-3 text-sm text-justify">
		<p class="drop-cap">
			Emma first moved to Charleston in <span class="font-semibold">2009</span>, to enroll in the
			M.S. Environmental Studies program the
			<span class="font-semibold">College of Charleston</span>. Throughout her time in graduate
			school, Emma learned the history &amp; science of the
			<span class="font-semibold">Coastal Estuarine environment</span>
			that is unique to our beautiful Lowcountry; this was the origin of her personal love for this place.
			<br /><br />
			Over the years, Emma has pursued her career in
			<a
				href="https://en.wikipedia.org/wiki/Geographic_information_system"
				target="_blank"
				class="bhhs hover:text-red-700 font-semibold"
				>Geographic Information Systems <Icon data={globe} /></a
			>
			&amp; programming, taking on several opportunities to dig deeper into the geography of Charleston,
			as well as some of the challenges we face as a community—most notably regarding flooding in light
			of Climate Change. To that end, Emma brings her technical skills &amp; academic/professional background
			in
			<span class="font-semibold">Resiliency &amp; Sustainability</span> to the field of Real Estate,
			with the intent of providing as much added value to her clients as she can.
		</p>
	</section>
</div>

<style>
	img {
		position: relative;
		width: 30%;
		height: auto;
		display: block;
		background-size: 125%;
		background-repeat: repeat-x;
		animation: animatedBackground 15s linear alternate infinite;
	}
	.drop-cap::first-letter {
		-webkit-initial-letter: 3;
		initial-letter: 3;
		font-size: 20px;
	}
</style>
