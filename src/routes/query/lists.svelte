<script context="module">
	import Contact from '$lib/contact.svelte';

	export async function load({ fetch }) {
		const rHeaders = new Headers();
		rHeaders.append('Accept', 'application/json');
		const requestOptions = {
			method: 'GET',
			headers: rHeaders,
			mode: 'cors',
			cache: 'default'
		};
		const rootUrl = 'https://cv-notion.herokuapp.com';
		const response = await fetch('https://cv-notion.herokuapp.com/lists', requestOptions);
		const data = await response.text();
		//console.log(data);
		if (data) {
			return {
				props: {
					lists: JSON.parse(data)
				}
			};
		}
		return {
			error: new Error(`Couldn't load ${rootUrl}/posts`)
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
