<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="pt-4 px-2">
		<img class="w-96" src="/logos/bhhs-cover.png" alt="BHHS logo" />
	</div>
	<div class="pt-8 pb-4">
		<img class="w-72 h-72" src="/logos/logo-am.svg" alt="Coastal Vantage logo" />
	</div>
	<div class="flex">
		<div class="min-w-full rounded-lg shadow-lg bg-gray-100 px-5 py-4 pb-4 text-xl">
			<div class="divide-y divide-gray-300 pt-5 pb-5 text-center">
				A <span class="animate-pulse cycle font-semibold" /> view of our Lowcountry
			</div>
			<!-- <img class="object-cover w-40" src="/cover.png" alt="Beaufort Aerial" /> -->
			<!-- <div class="max-w-md mx-auto"><BHHS /></div> -->
		</div>
	</div>
</section>
