<script context="module">
	import Contact from '$lib/contact.svelte';
	import { Icon } from 'svelte-awesome';
	import { externalLink } from 'svelte-awesome/icons';
	//export const prerender = true;

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

<div class="flex flex-col py-2 sm:py-8 items-center">
	<div class="text-center contents-center pb-16">
		<h2 class="block pb-4 font-bold">House Bytes [Blog]</h2>
		<p class="pb-4 w-96">
			A place for CHS-focused Real Estate bits & bytes for existing & prospective homeowners.
		</p>
		{#if posts.length === 0}
			<p class="text-center animate-pulse">Loading posts...</p>
		{:else if posts.length > 0}
			<table class="w-full text-center">
				<tbody>
					{#each posts as post}
						<tr>
							<td class="items-center text-center pt-8">
								<p>
									<a
										href="https://emmalu.notion.site/{post.slug}-{post.id.split('-').join('')}"
										target="_blank"
										class="bhhs hover:text-red-700 text-2xl items-center"
										>{post.title}
										<Icon data={externalLink} /></a
									>
								</p>
								{#each post.tags as tag}
									<p
										class="inline-block bhhs bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
									>
										{tag}
									</p>
								{/each}
								<p class="text-xs italic">
									Published {new Date(post.published).toLocaleDateString('en-us', {
										year: 'numeric',
										month: 'short',
										day: 'numeric'
									})}
								</p>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<p class="text-red-400">
				Unable to load posts at this time, but rest assured we're looking into it.. <br /> Apologies!
			</p>
		{/if}
	</div>
	<Contact />
</div>
