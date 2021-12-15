<script lang="ts">
	import logo from '$lib/header/logo.svg';
	import Header from '$lib/header/Header.svelte';
	import { Icon } from 'svelte-awesome';
	import { instagram, phone, envelopeO, arrowRight } from 'svelte-awesome/icons';
	import '../app.css';
</script>

<Header />
<aside class="fixed mt-16 md:mt-32 py-3 ml-3 px-3 z-10">
	<ul class="hidden sm:block text-center content-center">
		<li class="hover:bg-gray-200 p-2 rounded-full">
			<a href="https://emma.myhomecharleston.com" target="_blank">
				<img class="w-14" src="/logos/bhhs-seal.png" alt="BHHS Logo" />
			</a>
		</li>
		<li class="hover:bg-gray-200 py-2 rounded-lg">
			<a href="tel:+18433888118" class="bhhs bhhs-button">
				<Icon data={phone} scale={3} label="Call" />
			</a>
		</li>
		<li class="hover:bg-gray-200 py-2 rounded-lg">
			<a href="https://instagram.com/coastal_vantage" target="_blank" class="bhhs bhhs-button">
				<Icon data={instagram} scale={3} label="Instagram" />
			</a>
		</li>
		<li class="transition duration-300 hover:bg-gray-200 py-2 rounded-lg">
			<a
				href="mailto: hello@coastal-vantage.com?subject=Hello%20Coastal%20Vantage"
				class="bhhs bhhs-button"
			>
				<Icon data={envelopeO} scale={3} label="Email" />
			</a>
		</li>
	</ul>
</aside>

<main>
	<slot />
</main>
<footer class="flex flex-col relative justify-center items-center mb-0 text-xs">
	<p>
		&copy; 2021 Coastal Vantage.
		<span class="hidden sm:inline">
			<img class="w-10 inline" src={logo} alt="MapMazeLu Portfolio" />
			<a
				class="button text-gray-600 transition ease-in-out hover:-translate-x-2 hover:scale-110 duration-300"
				href="https://emmalu.github.io/portfolio"
				target="_blank"
			>
				Developed by <span class="font-semibold">MapMazeLu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 inline"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</span>
	</p>
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
	/* footer {
		display: flex;
		flex-direction: column;
		/* justify-content: center; 
		align-items: center;
		color: var(--tertiary-color);
		margin-bottom: 0;
		font-size: smaller;
		position: relative;
	} */

	/* footer img {
		width: 2em;
		height: 2em;
		display: inline;
	} 

	@media (min-width: 480px) {
		footer {
			padding: 20px 0;
		}
	}*/
</style>
