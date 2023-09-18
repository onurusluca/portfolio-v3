<script>
	import Header from './Header.svelte';
	import './styles.scss';
	import Blob from '../lib/images/blob.svelte';
	/* 	import { t, locale, locales } from '$lib/locales/i18n';
	 */
</script>

<div class="app">
	<Header />

	<main>
		<slot />
		<div class="blob"><Blob /></div>
	</main>

	<footer>
		<!-- Change language -->
		<!-- 		<select bind:value={$locale}>
			{#each locales as l}
				<option value={l}>{l}</option>
			{/each}
		</select> -->
	</footer>
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
			overflow-x: hidden;

			.blob {
				width: 30rem;
				height: 30rem;
				right: -10rem;
			}
		}

		footer {
			position: absolute;
			bottom: 0;

			padding: 1rem;
		}
	}
</style>
