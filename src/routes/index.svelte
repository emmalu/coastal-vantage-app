<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	//import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="pb-5">
		<img src="/logos/logo-am.svg" alt="Coastal Vantage logo" width="500rem" height="auto" />
	</div>
	<div class="flex cv">
		<div class="flex-wrap rounded-lg shadow-lg bg-gray-50 px-5 py-5 pb-5">
			<div class="divide-y divide-gray-200">
				A <span class="font-semibold">neighborhood-focused</span> view of our Lowcountry
				<!-- <picture>
					<source src="cover.png" type="image/svg" />
					<img src="cover.png" alt="Coastal Vantage" />
				</picture> -->
			</div>
			<div class="bhhs text-sm text-center pt-5 italic">Coming Soon</div>
		</div>
	</div>

	<!-- <Counter /> -->
</section>

<style>
	.bhhs {
		color: var(--accent-color);
	}
</style>
