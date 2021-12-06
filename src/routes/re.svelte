<script context="module">
	import { browser, dev } from '$app/env';
	//import Counter from '$lib/Counter.svelte';
	import Header from '$lib/header/Header.svelte';
	import About from './about.svelte';
	import BHHS from '../../static/bhhs/SC307_V_SBS_Seal_cab_cmyk.png';

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
	<title>Real Estate</title>
</svelte:head>

<div class="items-center bg-transparent py-3 flex flex-col justify-start sm:py-8">
	<img src={BHHS} alt="BHHS Logo" />
</div>
<a
	href="https://emma.myhomecharleston.com"
	target="_blank"
	class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
	>Visit BHHS Properties &rarr;</a
>

<style>
	img {
		position: relative;
		width: 20%;
		height: auto;
		display: block;
		background-size: 125%;
		background-repeat: repeat-x;
		animation: animatedBackground 15s linear alternate infinite;
	}
</style>
