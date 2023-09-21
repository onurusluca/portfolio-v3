<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/images/logo.png';
	import LocalesDropdown from '$lib/components/locales-dropdown.svelte';
	import { t, locale, locales } from '$lib/locales/i18n';

	/**
	 * Handle change of the locale.
	 * @param {CustomEvent<string>} event
	 */
	function handleChange(event) {
		$locale = event.detail;
	}
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="Onur Usluca's portfolio website logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
					{$t('nav.home')}
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">
					{$t('nav.about')}
				</a>
			</li>
			<!-- Border -->
			<li><span class="separator" /></li>
			<li>
				<!-- Change language -->
				<LocalesDropdown bind:selected={$locale} options={locales} on:change={handleChange} />
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 5rem;
		// background-color: #0e0e0e47;
		// border-bottom: 1px solid var(--accent);

		.logo {
			a {
				width: 3.5rem;
				height: 3.5rem;

				img {
					width: inherit;
					height: inherit;
					object-fit: contain;
					opacity: 0.8;

					transition: opacity 0.1s ease-in-out;
					&:hover {
						opacity: 1;
					}
				}
			}
		}

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			list-style: none;

			li {
				&[aria-current='page'] a {
					color: var(--accent);
				}

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					color: #fff;
					text-decoration: none;
					transition: color 0.1s ease-in-out;

					&:hover {
						color: var(--accent-2);
					}
				}
				.separator {
					border: 1px solid #ffffff3a;
					width: 1px;
				}
			}
		}

		@media (max-width: 768px) {
			height: max-content;
		}
	}
</style>
