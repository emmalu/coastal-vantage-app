<script context="module">
	import { browser, dev } from '$app/env';
	import Contact from '$lib/contact.svelte';
	import { Icon } from 'svelte-awesome';
	import { externalLink } from 'svelte-awesome/icons';

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
	<title>House Bytes</title>
</svelte:head>
<div class="flex flex-col py-2 sm:py-8">
	<div class="text-center pb-28">
		<h2>House Bytes [Blog]</h2>
		<ul>
			<li>
				<a
					href="https://emmalu.notion.site/NEW-in-2022-2e0906b7e6d9411bb9abc404abe10376"
					target="_blank"
					class="bhhs hover:text-red-700 text-3xl items-center"
					>New in 2022
					<Icon data={externalLink} />
				</a>
			</li>
		</ul>
	</div>
	<div>
		<Contact />
	</div>
</div>

<style>
</style>
