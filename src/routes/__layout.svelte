<script lang="ts">
	import logo from '$lib/header/logo.svg';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		Coastal Vantage &copy; 2021
		<img src={logo} alt="MapMazeLu Portfolio" />
		<a class="button text-black" href="https://emmalu.github.io/portfolio" target="_blank">
			Developed by <span class="font-semibold">MapMazeLu</span> &rarr;
		</a>
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 80vh;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--tertiary-color);
		margin-bottom: 0;
		font-size: smaller;
	}

	footer img {
		width: 2em;
		height: 2em;
		display: inline;
	}
	
	@media (min-width: 480px) {
		footer {
			padding: 20px 0;
		}
	}
</style>
