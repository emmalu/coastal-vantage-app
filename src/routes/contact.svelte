<script context="module">
	import { browser, dev } from '$app/env';
	import { Icon } from 'svelte-awesome';
	import { globe } from 'svelte-awesome/icons';
	import Contact from '$lib/contact.svelte';

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
	<Contact />
	<section class="max-w-xl mx-auto p-3 text-sm text-justify">
		<div>
			<span class="float-left text-6xl pr-2">E</span>mma first moved to Charleston in
			<span class="font-semibold">2009</span>, to enroll in the M.S. Environmental Studies program
			the
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
		</div>
	</section>
</div>

<style>
	/* img {
		position: relative;
		width: 30%;
		height: auto;
		display: block;
		background-size: 125%;
		background-repeat: repeat-x;
		animation: animatedBackground 15s linear alternate infinite;
	}
	.drop-cap::first-letter {
		-webkit-initial-letter: 1;
		initial-letter: 1;
		font-size: 20px;
	} */
</style>
