<script>
	import Header from './Header.svelte';
	import './styles.scss';
	import Blob from '../lib/images/blob.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
		<div class="blob"><Blob /></div>
	</main>

	<footer />
</div>

<style lang="scss">
	.app {
		position: relative;
		width: 768px;

		.blob {
			position: absolute;
			right: 0;
			top: 5rem;

			width: 30rem;
			height: 30rem;
			z-index: -2;
			opacity: 0.2;
		}

		@media (max-width: 768px) {
			width: 100vw;
		}
	}
</style>
