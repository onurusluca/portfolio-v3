<script>
	import { t } from '$lib/locales/i18n';
	import Keyboard from '$lib/components/piano/Keyboard.svelte';
	let logs = [];

	function noteOn(event) {
		logs = [`Note ${event.detail} was pressed!`, ...logs];
	}

	function noteOff(event) {
		logs = [`Note ${event.detail} was released!`, ...logs];
	}
	let whiteButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<svelte:head>
	<title>BLOG</title>
	<meta name="description" content="Blog" />
</svelte:head>
<Keyboard octaves={2} on:noteon={noteOn} on:noteoff={noteOff} />

<div class="buttons">
	<hr />
	<hr />

	{#each whiteButtons as button}
		<button class="white-button" on:click={() => {}} />
	{/each}
</div>

{#each logs as log}
	<div>{log}</div>
{/each}

<style lang="scss">
	$button-bg-color: #f5f5f5;
	$button-active-color: #e0e0e0;
	$transition-time: 0.15s;
	$button-shadow: 0 7px 0px rgb(111, 111, 111);
	$button-pressed-depth: 4px;

	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.3rem;

		margin: 5rem 0;
		.white-button {
			background-color: $button-bg-color;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-size: 16px;
			padding: 12px 24px;
			position: relative;
			transition: transform $transition-time, box-shadow $transition-time;
			box-shadow: $button-shadow;
			height: 8rem;

			&:focus {
				outline: none;
			}

			// Simulate a "pressed" state
			&:active {
				background-color: $button-active-color;
				transform: translateY($button-pressed-depth);
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}

			// For touch devices, you can use the :hover pseudo-class
			// to give a sense of "pressing" on touch.
			&:hover {
				background-color: $button-active-color;
			}
		}
	}
</style>
