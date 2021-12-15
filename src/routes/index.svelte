<script context="module">
	import BHHS from '$lib/bhhs.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="pb-4">
		<img src="/logos/logo-am.svg" alt="Coastal Vantage logo" width="450rem" height="auto" />
	</div>
	<div class="flex">
		<div class="flex-wrap rounded-lg shadow-lg bg-gray-50 px-5 py-4 pb-4 text-xl">
			<div class="divide-y divide-gray-300 pt-5 pb-5 text-center">
				A <span class="font-semibold">neighborhood-focused</span> view of our Lowcountry
			</div>
			<!-- <img class="object-cover w-40" src="/cover.png" alt="Beaufort Aerial" /> -->
			<!-- <div class="max-w-md mx-auto"><BHHS /></div> -->
		</div>
	</div>
</section>
