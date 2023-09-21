<script>
	import { t } from '$lib/locales/i18n';
	import atsumari from '../lib/assets/images/projects/atsumari/atsumari.png';
	import atsumari2 from '../lib/assets/images/projects/atsumari/atsumari-2.png';

	import denmou from '../lib/assets/images/projects/denmou.png';
	import ongaku from '../lib/assets/images/projects/ongaku.png';
	import egaki from '../lib/assets/images/projects/egaki.png';
	import kaidan from '../lib/assets/images/projects/kaidan.png';

	import ennka from '../lib/assets/images/projects/ennka.png';
	import ohbento from '../lib/assets/images/projects/ohbento.png';
	import sosyal from '../lib/assets/images/projects/sosyal.png';
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

	<div class="hobby-projects">
		<a
			href="https://www.figma.com/file/EZLvdvFgHZ7O7mXPaeUJfD/Ennka---Japanese-Enka-Music--Platform-Concept--(%E6%BC%94%E6%AD%8C%E9%9F%B3%E6%A5%BD%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0)-Spotify-Clone?type=design&mode=design"
			><img class="atsumari-demo-img" src={ennka} alt="Ennka" />
		</a>
		<a
			href="https://www.figma.com/file/Ltj16yqUVXDgjXWlzeAhWC/OhBento!---Japanese-Bentou-Shopping-Concept-App-(%E3%81%8A%E5%BC%81%E5%BD%93%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%82%BB%E3%83%97%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA)?type=design&mode=design"
			><img class="atsumari-demo-img" src={ohbento} alt="Ohbento" />
		</a>
		<a
			href="https://www.figma.com/file/4Oihnv3HYx5UEEOGAWGIbr/Sosyal---Social-Media-Clones-(%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%B3)?type=design&mode=design"
			><img class="atsumari-demo-img" src={sosyal} alt="Sosyal" />
		</a>
	</div>
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
			flex-wrap: wrap;
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
			@media (max-width: 768px) {
				img {
					width: 100%;
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
			@media (max-width: 768px) {
				img {
					width: 100%;
				}
			}
		}
	}
</style>
