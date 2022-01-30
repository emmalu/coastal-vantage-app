<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="z-50 fixed">
	<nav>
		<!-- <svg viewBox="0 0 1440 320">
			<path
				fill="#1d5599"
				fill-opacity="0.9"
				d="M0,0L34.3,37.3C68.6,75,137,149,206,197.3C274.3,245,343,267,411,245.3C480,224,549,160,617,128C685.7,96,754,96,823,117.3C891.4,139,960,181,1029,181.3C1097.1,181,1166,139,1234,128C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
			/>
		</svg> -->
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Meet & Greet</a>
			</li>
			<li class:active={$page.url.pathname === '/bytes'}>
				<a sveltekit:prefetch href="/bytes">House Bytes</a>
			</li>
			<!-- <li class:active={$page.url.pathname === '/footage'}>
				<a sveltekit:prefetch href="/footage">Footage</a>
			</li> -->
			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
		<!-- <svg viewBox="0 0 1440 320" class="right">
			<path
				fill="#1d5599"
				fill-opacity="0.9"
				d="M0,0L34.3,37.3C68.6,75,137,149,206,197.3C274.3,245,343,267,411,245.3C480,224,549,160,617,128C685.7,96,754,96,823,117.3C891.4,139,960,181,1029,181.3C1097.1,181,1166,139,1234,128C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
			/>
		</svg> -->
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		width: 100%;
		height: max-content;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 7px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--accent-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--heading-color);
		background-color: var(--tertiary-color);
	}
</style>
