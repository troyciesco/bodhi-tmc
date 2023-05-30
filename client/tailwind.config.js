const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "#377679",
				secondary: "#D18E44",
				accent: "#ECE6DB",
				accent2: "#DAD3C8",
				accent3: "#747575",
				dark: "#193637",
				sand: "#ECE6DB",
				"wet-sand": "#DAD3C8",
				"black-sand": "#747575",
				"golden-hour": "#D18E44",
				sea: "#377679",
				"deep-sea": "#193637"
			},
			fontFamily: {
				sans: ["Syne Variable", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio")
	]
}
