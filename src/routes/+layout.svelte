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
		width: 700px;

		.blob {
			position: absolute;
			right: -5rem;
			top: 5rem;

			width: 35rem;
			height: 35rem;
			z-index: -2;
			opacity: 0.3;
		}

		@media (max-width: 768px) {
			width: 100vw;
			padding: 1rem;

			.blob {
				width: 30rem;
				height: 30rem;
				right: -10rem;
			}
		}
	}
</style>
