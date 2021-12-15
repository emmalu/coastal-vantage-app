<script context="module">
	import { browser, dev } from '$app/env';
	import { Icon } from 'svelte-awesome';
	import { comment, camera, globe } from 'svelte-awesome/icons';

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
	<p class="pt-3 bhhs"><em>Coming Soon</em></p>
	<Icon data={comment} flip="horizontal" />
	<Icon data={camera} flip="horizontal" />
</div>
