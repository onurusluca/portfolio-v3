<script>
	import { t } from '$lib/locales/i18n';
	import JapanFlagIcon from '../lib/components/icons/JapanFlag.svelte';

	import atsumari from '../lib/assets/images/projects/atsumari/atsumari.png';
	import atsumari2 from '../lib/assets/images/projects/atsumari/atsumari-2.png';

	import portfolioV2 from '../lib/assets/images/projects/portfolio-v2.png';
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
	<p>
		{$t('home.intro')}
	</p>
	<p>
		{$t('home.intro2')}<span class="flag-icon">
			<JapanFlagIcon />
		</span>
	</p>

	<p class="currently-working-on">
		{$t('home.currentlyWorkingOn')}
		<!-- <a target="_blank" href="/atsumari">Atsumari</a> --> Atsumari -
		<i>{$t('home.atsumariDescription')}</i>
	</p>

	<div class="atsumari">
		<img src={atsumari} alt="Atsumari demo" />
		<img src={atsumari2} alt="Atsumari demo" />
	</div>

	<hr />

	<div class="tech-stack">
		<h2>{$t('home.techStackTitle')}</h2>
		<p>
			{$t('home.techStackDescription')}
		</p>
		<p>
			{$t('home.techStackDescription2')}
			<a
				target="_blank"
				href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL"
			>
				WebGL</a
			>,
			<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API"
				>WebRTC</a
			>,
			{$t('misc.and')}

			<a target="_blank" href="https://bun.sh/L">Bun</a>.
		</p>
	</div>

	<hr />

	<h2>{$t('home.myProjects')}</h2>
	<div class="hobby-projects">
		<a
			target="_blank"
			class="no-image-project"
			href="https://github.com/onurusluca/atsumari"
			title="Atsumari"
		>
			{$t('home.firstImplementationOfAtsumari')}
			-
			<br />
			{$t('home.oldCodeBase')}
		</a>

		<a
			target="_blank"
			class="no-image-project"
			href="https://github.com/onurusluca/nuxt3-boilerplate-karpuz"
			title="Karpuz"
		>
			Karpuz 🍉 - {$t('home.karpuz')}
		</a>

		<a target="_blank" href="https://portfolio-v2-onurusluca.vercel.app/" title="Portfolio v2">
			<img src={portfolioV2} alt="Portfolio v2" />
		</a>
		<a target="_blank" href="https://github.com/onurusluca/denmou-company" title="Denmou">
			<img src={denmou} alt="Denmou" />
		</a>
		<a target="_blank" href="https://github.com/onurusluca/egaki" title="Egaki">
			<img src={egaki} alt="Egaki" />
		</a>
		<a target="_blank" href="https://github.com/onurusluca/ongaku-music-player" title="Ongaku">
			<img src={ongaku} alt="Ongaku" />
		</a>
		<a target="_blank" href="https://kaidanfit.netlify.app/" title="Kaidan">
			<img src={kaidan} alt="Kaidan" />
		</a>
	</div>

	<hr />

	<h2>{$t('home.myDesigns')}</h2>

	<div class="hobby-projects">
		<a
			target="_blank"
			href="https://www.figma.com/file/EZLvdvFgHZ7O7mXPaeUJfD/Ennka---Japanese-Enka-Music--Platform-Concept--(%E6%BC%94%E6%AD%8C%E9%9F%B3%E6%A5%BD%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0)-Spotify-Clone?type=design&mode=design"
			><img src={ennka} alt="Ennka" />
		</a>
		<a
			target="_blank"
			href="https://www.figma.com/file/Ltj16yqUVXDgjXWlzeAhWC/OhBento!---Japanese-Bentou-Shopping-Concept-App-(%E3%81%8A%E5%BC%81%E5%BD%93%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%B3%E3%82%BB%E3%83%97%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA)?type=design&mode=design"
			><img src={ohbento} alt="Ohbento" />
		</a>
		<a
			target="_blank"
			href="https://www.figma.com/file/4Oihnv3HYx5UEEOGAWGIbr/Sosyal---Social-Media-Clones-(%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%B3)?type=design&mode=design"
			><img src={sosyal} alt="Sosyal" />
		</a>
	</div>
</section>

<style lang="scss">
	.main {
		padding: 2rem 0;

		h1 {
			font-size: 20px;
		}

		.flag-icon {
			display: inline-block;
			margin-left: 0.5rem;
			vertical-align: middle;
		}

		.currently-working-on {
			line-height: 1.3rem;
			margin: 1rem 0 1rem 0;
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
				border: 1px solid var(--accent);
				&:hover {
					opacity: 1;
				}
			}
			@media (max-width: 768px) {
				img {
					width: 50%;
				}
			}

			@media (max-width: 480px) {
				// Responsive grid 1 column
				display: grid;
				grid-template-columns: repeat(1, 1fr);

				img {
					width: 100%;
				}
			}
		}
		.tech-stack {
			/* 		.technologies-wrapper {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;

				.technologies {
					list-style: square;
					list-style-position: inside;
					margin: 0;
					padding: 0;
					line-height: 1.1rem;

					.technology {
						font-size: 15px;
					}
				}
			} */
		}

		h2 {
			margin-top: 2rem;
			font-size: 16px;
		}

		.hobby-projects {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			flex-wrap: wrap;
			width: 100%;

			.no-image-project {
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;

				text-decoration: none;

				width: 21rem;
				height: 12.5rem;
				border-radius: 0.4rem;
				border: 1px solid var(--accent);
				opacity: 0.8;
				font-weight: bold;

				cursor: pointer;

				&:hover {
					color: var(--accent);
					opacity: 1;
				}
			}
			a {
				img {
					width: 21rem;
					height: 12.5rem;
					object-fit: cover;
					border-radius: 0.4rem;
					opacity: 0.8;
					border: 1px solid var(--accent);

					cursor: pointer;
					transition: opacity 0.2s ease-in-out;
					&:hover {
						opacity: 1;
					}
				}
			}
			@media (max-width: 768px) {
				// Responsive grid 2 columns
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 0.5rem;

				a {
					img {
						width: 100%;
					}
				}
				.no-image-project {
					width: 100%;
				}
			}

			@media (max-width: 576px) {
				// Responsive grid 1 column
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				a {
					width: 100%;

					img {
						width: 100%;
						height: auto;
					}
				}
			}
		}
	}
</style>
