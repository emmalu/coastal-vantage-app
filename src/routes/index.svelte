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
	<div class="welcome">
		<img src="logo/svg/3.svg" alt="Coastal Vantage logo" />
	</div>
	<div class="flex cv">
		<div class="flex-wrap rounded-lg shadow-lg bg-gray-50 px-5 py-5 pb-5">
			<div class="divide-y divide-gray-200">
				A <span class="font-semibold">future-focused</span> view of the Lowcountry
				<!-- <picture>
					<source src="cover.png" type="image/svg" />
					<img src="cover.png" alt="Coastal Vantage" />
				</picture> -->
			</div>
			<div class="bhhs text-sm text-center pt-5">Coming Soon</div>
		</div>
	</div>

	<!-- <Counter /> -->
</section>

<style>
	.bhhs {
		color: var(--accent-color);
	}
	.welcome {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
		background-size: 125%;
		background-repeat: repeat-x;
		animation: animatedBackground 15s linear alternate infinite;
	}
</style>
