<script>
	import { t } from '$lib/locales/i18n';
</script>

<svelte:head>
	<title>
		{$t('home.title')}
	</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main">
	<h1>{$t('home.hey')}!</h1>
	<p>{$t('home.intro')}</p>

	<br />
</section>

<style lang="scss">
	.main {
		padding: 2rem 0;

		h1 {
			font-size: 20px;
		}
	}
</style>
