<script context="module">
	import { browser, dev } from '$app/env';
	import BHHS from '$lib/bhhs.svelte';

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
	<title>C/V</title>
</svelte:head>

<div class="min-h-screen bg-transparent flex flex-col justify-start sm:pt-8 md:pt-4">
	<div class="relative px-4 py-4 sm:p-16">
		<div class="max-w-md mx-auto">
			<div>
				<p class="text-2xl font-extrabold">
					Meet <span class="text-blue-900">Coastal Vantage</span>
				</p>
			</div>
			<div class="divide-y divide-blue-900">
				<div class="py-3 text-base leading-5 space-y-4 text-gray-700 sm:text-lg sm:leading-6">
					<p>
						We know. You've fallen in <svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 inline bhhs"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clip-rule="evenodd"
							/>
						</svg> with the coast!
					</p>
					<p>
						The goal is simple: to help you navigate the process of finding <svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 inline bhhs"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
							/>
						</svg>.
					</p>
					<p>What can you count on?</p>
					<ul class="list-disc space-y-2">
						<li class="flex items-start">
							<span class="h-6 flex items-center sm:h-7">
								<svg
									class="flex-shrink-0 h-5 w-5 text-bhhs"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<p class="ml-2">
								<strong>Footage</strong> of favorite places &amp; hidden gems
							</p>
						</li>
						<li class="flex items-start">
							<span class="h-6 flex items-center sm:h-7">
								<svg
									class="flex-shrink-0 h-5 w-5 text-bhhs"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<p class="ml-2"><strong>Neighborhood-focused</strong> data & resources</p>
						</li>
						<li class="flex items-start">
							<span class="h-6 flex items-center sm:h-7">
								<svg
									class="flex-shrink-0 h-5 w-5 text-bhhs"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<p class="ml-2">
								Local expertise focused on <strong>resiliency & preparedness</strong>
							</p>
						</li>
						<li class="flex items-start">
							<span class="h-6 flex items-center sm:h-7">
								<svg
									class="flex-shrink-0 h-5 w-5 text-bhhs"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<p class="ml-2">
								A little <strong>peace</strong> of mind
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 inline"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</p>
						</li>
					</ul>
				</div>
				<BHHS />
			</div>
		</div>
	</div>
</div>
