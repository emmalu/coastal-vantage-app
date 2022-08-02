<script context="module">
	import { browser, dev } from '$app/env';
	import Contact from '$lib/contact.svelte';
	import { Icon } from 'svelte-awesome';
	import { externalLink, spinner } from 'svelte-awesome/icons';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch }) {
		const response = await fetch('bytes.json');
		const data = await response.json();
		if (data) {
			return {
				props: {
					posts: data
				}
			};
		}
		return {
			error: new Error(`Couldn't load House Bytes posts. :(`)
		};
	}
</script>

<script>
	export let posts = [];
</script>

<svelte:head>
	<title>Bytes</title>
</svelte:head>

<div class="flex flex-col py-7 sm:py-12 items-center">
	<div class="text-center pb-4">
		<div>
			<p class="text-lg block font-bold">House Bytes [Blog]</p>
			<span class="block py-2 px-2">
				A place for CHS-focused Real Estate bits and bytes for existing & prospective homeowners.
			</span>
		</div>
		{#if posts.length === 0}
			<span class="block"><Icon data={spinner} pulse /></span>
			<span class="animate-pulse text-gray-600">Loading...</span>
		{:else if posts.length > 0}
			<div class="grid sm:grid-rows-1 md:grid-cols-2 items-center gap-2 py-2">
				{#each posts as post}
					<div
						class="items-center text-center bg-white py-2 px-2 rounded-xl drop-shadow-2xl shadow-amber-100 w-full"
					>
						<span class="block">
							<a
								href="https://emmalu.notion.site/{post.slug}-{post.id.split('-').join('')}"
								target="_blank"
								class="bhhs hover:text-red-700 text-2xl items-center"
								>{post.title}
								<Icon data={externalLink} /></a
							>
						</span>
						{#each post.tags as tag}
							<span
								class="inline-block bhhs bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2"
							>
								{tag}
							</span>
						{/each}
						<span class="block text-xs italic">
							Published {new Date(post.published).toLocaleDateString('en-us', {
								timeZone: 'UTC',
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</span>
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-red-400">Unable to load posts right now.. :( Please try again later.</p>
		{/if}
	</div>
	<Contact />
</div>
