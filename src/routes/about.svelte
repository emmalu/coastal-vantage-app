<script context="module">
	import { browser, dev } from '$app/env';

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
	<title>About</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 bg-transparent py-3 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
		/>
		<div class="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<p class="font-extrabold">What is Coastal Vantage?</p>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<p>
							It's the magic of bridging photography and data together, for the sake of better
							decision-making.
						</p>
						<ul class="list-disc space-y-2">
							<li class="flex items-start">
								<span class="h-6 flex items-center sm:h-7">
									<svg
										class="flex-shrink-0 h-5 w-5 text-cyan-500"
										viewBox="0 0 20 20"
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
									Customizing your
									<code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
								</p>
							</li>
							<li class="flex items-start">
								<span class="h-6 flex items-center sm:h-7">
									<svg
										class="flex-shrink-0 h-5 w-5 text-cyan-500"
										viewBox="0 0 20 20"
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
									Extracting classes with
									<code class="text-sm font-bold text-gray-900">@apply</code>
								</p>
							</li>
							<li class="flex items-start">
								<span class="h-6 flex items-center sm:h-7">
									<svg
										class="flex-shrink-0 h-5 w-5 text-cyan-500"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
								<p class="ml-2">Code completion with instant preview</p>
							</li>
						</ul>
						<p>
							Perfect for learning how the framework works, prototyping a new idea, or creating a
							demo to share online.
						</p>
					</div>
					<div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
						<p>Want to dig deeper into Tailwind?</p>
						<p>
							<a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700">
								Read the docs &rarr;
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
