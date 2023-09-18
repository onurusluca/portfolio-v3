<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
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
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
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
			width: 3rem;
			height: 3rem;

			a {
				height: 100%;

				img {
					width: inherit;
					height: inherit;
					object-fit: contain;
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

					&:hover {
						color: var(--accent-2);
					}
				}
			}
		}

		@media (max-width: 768px) {
			height: max-content;
		}
	}
</style>
