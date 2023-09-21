<script>
	import { onMount } from 'svelte';

	/** @type {string[]} */
	export let options = [];
	/** @type {string} */
	export let selected = '';

	let isOpen = false;

	/** @type {HTMLElement} */
	let dropdownRef;

	/**
	 * Toggles dropdown state.
	 */
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	/**
	 * @param {KeyboardEvent} event
	 */
	function handleKeydown(event) {
		if (event.key === 'Enter' || event.key === 'Space') {
			toggleDropdown();
		}
	}

	/**
	 * @param {string} option
	 */
	function selectOption(option) {
		selected = option;
		isOpen = false;
	}

	/**
	 * @param {MouseEvent} event
	 */
	const handleClickOutside = (event) => {
		// @ts-ignore
		if (dropdownRef && !dropdownRef.contains(event.target)) {
			isOpen = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div
	bind:this={dropdownRef}
	class="dropdown-container"
	aria-expanded={isOpen}
	on:click={toggleDropdown}
	on:keydown={handleKeydown}
	tabindex="0"
	role="button"
>
	<div class="dropdown-display">{selected}</div>
	{#if isOpen}
		<div class="dropdown-options">
			{#each options as option (option)}
				<div
					class="dropdown-option"
					on:click={() => selectOption(option)}
					on:keydown={(e) => e.key === 'Enter' && selectOption(option)}
					tabindex="0"
					role="option"
					aria-selected={selected === option}
				>
					{option}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown-container {
		position: relative;
		cursor: pointer;
		user-select: none;

		.dropdown-display {
			color: #fff;
			cursor: pointer;
			transition: all 0.1s ease-in-out;
			&:hover {
				color: var(--accent-2);
				border-color: var(--accent-2);
			}
		}

		.dropdown-options {
			position: absolute;
			top: 100%;
			left: -0.7rem;
			margin-top: 0.5rem;
			width: 2.5rem;
			text-align: center;
			border: 1px solid #aaa;
			background-color: #1f1f1f;
			border-radius: 4px;
			z-index: 10;

			.dropdown-option {
				border-radius: 4px;

				padding: 8px;
				cursor: pointer;
				transition: all 0.1s ease-in-out;

				&:hover {
					background-color: rgb(78, 78, 78);
					color: #fff;
				}
			}
		}
	}

	.dropdown-container[aria-expanded='true'] .dropdown-options {
		display: block;
	}
</style>
