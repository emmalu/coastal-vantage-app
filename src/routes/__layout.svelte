<script lang="ts">
	import logo from '$lib/header/logo.svg';
	import Header from '$lib/header/Header.svelte';
	import { Icon } from 'svelte-awesome';
	import { instagram, phone, at } from 'svelte-awesome/icons';
	import '../app.css';

	var year = new Date().getFullYear();
</script>

<Header />
<aside class="fixed mt-16 md:mt-32 py-3 ml-3 px-3 z-10">
	<ul class="hidden sm:block text-center content-center">
		<li class="hover:bg-gray-200 p-3 rounded-full shadow-neumolight">
			<a href="https://emma.myhomecharleston.com" target="_blank">
				<img class="w-14" src="/logos/bhhs-seal.png" alt="BHHS Logo" />
			</a>
		</li>
		<li class="hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a href="tel:+18433888118" class="bhhs bhhs-button">
				<Icon data={phone} scale={2} label="Call" />
			</a>
		</li>
		<li class="hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a href="https://instagram.com/coastal.vantage" target="_blank" class="bhhs bhhs-button">
				<Icon data={instagram} scale={2} label="Instagram" />
			</a>
		</li>
		<li class="transition duration-300 hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a
				href="mailto: hello@coastal-vantage.com?subject=Hello%20Coastal%20Vantage"
				class="bhhs bhhs-button"
			>
				<Icon data={at} scale={2} label="Email" />
			</a>
		</li>
		<!-- <li class="transition duration-300 hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a href="#translate" class="bhhs bhhs-button">
				<Icon data={globe} scale={2} label="Espanol" />
			</a>
		</li> -->
	</ul>
</aside>

<main>
	<slot />
</main>
<footer class="flex flex-col absolute pt-4 px-4 sm:px-20 pb-4 text-xs bg-white bg-opacity-75">
	<div class="grid grid-cols-4 sm:hidden place-items-center py-2">
		<button
			class="bg-white hover:bg-blue-200 text-gray-800 py-2 px-3 rounded-full shadow-neumodark"
		>
			<a href="tel:+18433888118" class="bhhs bhhs-button">
				<Icon data={phone} scale={2} label="Call" />
			</a>
		</button>
		<button class="bg-white hover:bg-blue-200 text-gray-800 p-2 rounded-full shadow-neumodark">
			<a href="https://emma.myhomecharleston.com" target="_blank">
				<img class="w-8" src="/logos/bhhs-seal.png" alt="BHHS Logo" />
			</a>
		</button>
		<button
			class="bg-white hover:bg-blue-200 text-gray-800 py-2 px-3 rounded-full shadow-neumodark"
		>
			<a href="https://instagram.com/coastal_vantage" target="_blank" class="bhhs bhhs-button">
				<Icon data={instagram} scale={2} label="Instagram" />
			</a>
		</button>

		<button
			class="bg-white hover:bg-blue-200 text-gray-800 py-2 px-3 rounded-full shadow-neumodark"
		>
			<a
				href="mailto:hello@coastal-vantage.com?subject=Hello%20Coastal%20Vantage"
				class="bhhs bhhs-button"
			>
				<Icon data={at} scale={2} label="Email" />
			</a>
		</button>
	</div>
	<div class="grid grid-cols-1 pt-3">
		<div class="text-xxs">
			&copy;{year} BHH Affiliates, LLC. An independently owned and operated franchisee of BHH Affiliates,
			LLC. Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered
			service marks of Columbia Insurance Company, a Berkshire Hathaway affiliate. Equal Housing Opportunity.
			<div class="pt-2">
				&copy;{year} Coastal Vantage, LLC.
				<img class="w-10 inline" src={logo} alt="MapMazeLu Portfolio" />
				<a
					class="button text-gray-600 transition ease-in-out hover:-translate-x-2 hover:scale-110 duration-300"
					href="https://emmalu.github.io/portfolio"
					target="_blank"
				>
					Developed by <span class="font-semibold">MapMazeLu.</span>
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		margin: 0 auto;
		padding-top: 3rem;
		box-sizing: border-box;
	}
</style>
