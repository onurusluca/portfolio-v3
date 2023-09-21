<script>
	import { t } from '$lib/locales/i18n';
	import atsumari from '../lib/assets/images/projects/atsumari/atsumari.png';
	import atsumari2 from '../lib/assets/images/projects/atsumari/atsumari-2.png';

	import denmou from '../lib/assets/images/projects/denmou.png';
	import ongaku from '../lib/assets/images/projects/ongaku.png';
	import egaki from '../lib/assets/images/projects/egaki.png';
	import kaidan from '../lib/assets/images/projects/kaidan.png';

	import ennka from '../lib/assets/images/projects/ennka.png';
</script>

<svelte:head>
	<title>
		{$t('home.title')}
	</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main">
	<h1>{$t('home.hey')}</h1>
	<p>{$t('home.intro')}</p>
	<p class="currently-working-on">
		{$t('home.currentlyWorkingOn')}
		<a href="https://atsumari.vercel.app/" target="_blank">Atsumari</a> -
		<i>{$t('home.atsumariDescription')}</i>
	</p>

	<div class="atsumari">
		<img class="atsumari-demo-img" src={atsumari} alt="Atsumari demo" />
		<img class="atsumari-demo-img" src={atsumari2} alt="Atsumari demo" />
	</div>
	<hr />
	<h2>{$t('home.myProjects')}</h2>
	<div class="hobby-projects">
		<a href="https://github.com/onurusluca/denmou-company">
			<img class="atsumari-demo-img" src={denmou} alt="Denmou" />
		</a>
		<a href="https://github.com/onurusluca/egaki">
			<img class="atsumari-demo-img" src={egaki} alt="Egaki" />
		</a>
		<a href="https://github.com/onurusluca/ongaku-music-player"
			><img class="atsumari-demo-img" src={ongaku} alt="Ongaku" />
		</a>
		<a href="https://kaidanfit.netlify.app/"
			><img class="atsumari-demo-img" src={kaidan} alt="Kaidan" />
		</a>
	</div>

	<h2>{$t('home.myDesigns')}</h2>
</section>

<style lang="scss">
	.main {
		padding: 2rem 0;

		h1 {
			font-size: 20px;
		}

		.currently-working-on {
			line-height: 1.3rem;
			margin-bottom: 2rem;
		}

		.atsumari {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
			img {
				width: 21rem;
				height: auto;
				border-radius: 0.4rem;
				opacity: 0.8;

				transition: opacity 0.2s ease-in-out;
				&:hover {
					opacity: 1;
				}
			}
		}

		h2 {
			margin-top: 2rem;
			font-size: 16px;
		}

		.hobby-projects {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 0.5rem;
			cursor: pointer;
			img {
				width: 21rem;
				height: auto;
				border-radius: 0.4rem;
				opacity: 0.8;

				transition: opacity 0.2s ease-in-out;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
</style>
