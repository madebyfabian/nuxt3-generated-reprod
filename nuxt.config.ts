// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: ['nuxt-seo-kit'],

	runtimeConfig: {
		public: {
			siteUrl: 'https://example.com',
			siteName: 'Site name from nuxt.config',
			language: 'en', // prefer more explicit language codes like `en-AU` over `en`
		},
	},

	app: {
		head: {
			titleTemplate: '%pageTitle %titleSeparator %siteName',
		},
	},
})
