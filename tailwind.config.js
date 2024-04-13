import { nextui } from "@nextui-org/react";
import colors from "tailwindcss/colors";
import p1 from "@headlessui/tailwindcss";
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				// light
				"tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
				"tremor-card":
					"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"tremor-dropdown":
					"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
				// dark
				"dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
				"dark-tremor-card":
					"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"dark-tremor-dropdown":
					"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			},
			borderRadius: {
				"tremor-small": "0.375rem",
				"tremor-default": "0.5rem",
				"tremor-full": "9999px",
			},
			fontSize: {
				"tremor-label": ["0.75rem", { lineHeight: "1rem" }],
				"tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
				"tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
				"tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
			},
			fontFamily: {
				Montserrat: ["Montserrat"],
			},
			colors: {
				tremor: {
					brand: {
						faint: colors.blue[50],
						muted: colors.blue[200],
						subtle: colors.blue[400],
						DEFAULT: colors.blue[500],
						emphasis: colors.blue[700],
						inverted: colors.white,
					},
					background: {
						muted: colors.gray[50],
						subtle: colors.gray[100],
						DEFAULT: colors.white,
						emphasis: colors.gray[700],
					},
					border: {
						DEFAULT: colors.gray[200],
					},
					ring: {
						DEFAULT: colors.gray[200],
					},
					content: {
						subtle: colors.gray[400],
						DEFAULT: colors.gray[500],
						emphasis: colors.gray[700],
						strong: colors.gray[900],
						inverted: colors.white,
					},
				},
				// dark mode
				"dark-tremor": {
					brand: {
						faint: "#0B1229",
						muted: colors.blue[950],
						subtle: colors.blue[800],
						DEFAULT: colors.blue[500],
						emphasis: colors.blue[400],
						inverted: colors.blue[950],
					},
					background: {
						muted: "#131A2B",
						subtle: colors.gray[800],
						DEFAULT: colors.gray[900],
						emphasis: colors.gray[300],
					},
					border: {
						DEFAULT: colors.gray[800],
					},
					ring: {
						DEFAULT: colors.gray[800],
					},
					content: {
						subtle: colors.gray[600],
						DEFAULT: colors.gray[500],
						emphasis: colors.gray[200],
						strong: colors.gray[50],
						inverted: colors.gray[950],
					},
				},
				"main-background": "var(--primary-background)",
				"secondary-background": "var(--secondary-background)",
				"foreground-color": "var(--foreground-color)",
				"primary-color": "#3c79a5",
			},
		},
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	plugins: [
		p1,
		nextui({
			themes: {
				light: {
					extend: "light",
					colors: {
						background: "#ffffff",
						foreground: "#000000",
						success: {
							100: "#FBFEEE",
							200: "#F6FEDD",
							300: "#EFFCCB",
							400: "#E8FABD",
							500: "#ffffff",
							600: "#B3D57A",
							700: "#1E4776",
							800: "#13325F",
							900: "#0B234F",
							DEFAULT: "#71da25",
							foreground: "#ffffff",
						},
						warning: {
							DEFAULT: "#F5A524",
							foreground: "#ffffff",
						},
						danger: {
							DEFAULT: "#F31260",
							foreground: "#ffffff",
						},
						primary: {
							100: "#DAF4FA",
							200: "#B7E6F6",
							300: "#8CC9E3",
							400: "#69A6C9",
							500: "#3C79A5",
							600: "#2B5F8D",
							700: "#1E4776",
							800: "#13325F",
							900: "#0B234F",
							DEFAULT: "#3C79A5",
							foreground: "#ffffff",
						},
					},
				},
			},
		}),
	],

	darkMode: "class",
};
