import { derived, writable } from 'svelte/store';
import translations from './translations';

let initialLocale = 'en'; // Default value

// Check if we are in a browser environment
if (typeof window !== 'undefined') {
	// Check if the locale is stored in localStorage.
	let storedLocale = localStorage.getItem('userLocale');

	// If there's no stored locale, use the browser's language or 'en' as a fallback.
	let browserLang = navigator.language.split('-')[0];
	initialLocale = storedLocale || (browserLang in translations ? browserLang : 'en');
}

export const locale = writable(initialLocale);

// Save the selected locale in localStorage whenever it's updated.
locale.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('userLocale', value);
	}
});

export const locales = Object.keys(translations);

function translate(locale, key, vars) {
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	// Grab the translation from the translations object.
	let text = translations[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key, vars = {}) =>
			translate($locale, key, vars)
);
