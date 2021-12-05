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
		Developed by
		<a href="https://emmalu.github.io/portfolio" target="_blank">
			<img src={logo} alt="MapMazeLu Portfolio" />
		</a>
		<span class="font-semibold">MapMazeLu</span> | Coastal Vantage &copy; 2021
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		color: var(--primary-color);
		margin-bottom: 0;
	}

	footer img {
		width: 2em;
		height: 2em;
		/* object-fit: contain; */
		display: inline;
	}
	@media (min-width: 480px) {
		footer {
			padding: 20px 0;
		}
	}
</style>
