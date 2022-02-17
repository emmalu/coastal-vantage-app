<script context="module">
	import { browser, dev } from '$app/env';
	import Contact from '$lib/contact.svelte';
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;
	export const prerender = true;

	export async function load({ fetch }) {
		const apiUrl = 'https://cv-notion.herokuapp.com';
		const url = `${apiUrl}/lists`;
		const res = await fetch(url, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'content-type': 'application/json'
			}
		});

		if (res.ok) {
			return {
				props: {
					lists: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${apiUrl}`)
		};
	}
</script>

<script>
	export let lists = [];
</script>

<svelte:head>
	<title>Curated Lists</title>
</svelte:head>

<div class="grid grid-flow-row py-2 sm:py-8 text-center">
	<h2 class="block pb-4 font-bold">Curated Property Lists</h2>
	{#if lists.length === 0}
		<p class="text-gray-600">Loading lists...</p>
	{:else if lists.length > 0}
		<div
			class="grid grid-rows-4 md:grid-rows-2 grid-flow-col justify-center items-center pb-8 gap-4"
		>
			{#each lists as list}
				<div class="w-72 bg-white hover:bg-yellow-100 rounded-xl shadow-xl px-1 py-4">
					<a href={list.url} target="_blank" class="items-center bhhs hover:text-red-700 text-2xl">
						<p>
							{list.title}
							<!-- <Icon data={externalLink} /> -->
						</p>
						<p class="text-xs text-blue-900 pt-2 italic">
							Updated: {new Date(list.edited).toLocaleDateString('en-us', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</p>
					</a>
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-red-400">
			Unable to load lists at this time, but rest assured we're looking into it.. <br /> Apologies!
		</p>
	{/if}
	<div>
		<Contact />
	</div>
</div>

<style>
</style>
