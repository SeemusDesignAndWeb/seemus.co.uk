export default {
	content: ['./src/**/*.{html,js,svelte}'],
	safelist: [
		// Opacity variants for custom colors using pattern matching
		{
			pattern: /^(from|to|bg|text)-(primary|secondary|accent|muted)\/(5|10|20|30|40|60)$/,
		},
		// Specific classes that might be missed
		'bg-muted/30',
		'bg-secondary/30',
	],

	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: 'var(--card)',
				'card-foreground': 'var(--card-foreground)',
				popover: 'var(--popover)',
				'popover-foreground': 'var(--popover-foreground)',
				primary: {
					DEFAULT: '#2e8aa9',
					foreground: 'var(--primary-foreground)',
					5: 'color-mix(in srgb, #2e8aa9 5%, transparent)',
					10: 'color-mix(in srgb, #2e8aa9 10%, transparent)',
					20: 'color-mix(in srgb, #2e8aa9 20%, transparent)',
					30: 'color-mix(in srgb, #2e8aa9 30%, transparent)',
					40: 'color-mix(in srgb, #2e8aa9 40%, transparent)',
					60: 'color-mix(in srgb, #2e8aa9 60%, transparent)',
				},
				secondary: {
					DEFAULT: '#be6928',
					foreground: 'var(--secondary-foreground)',
					5: 'color-mix(in srgb, #be6928 5%, transparent)',
					10: 'color-mix(in srgb, #be6928 10%, transparent)',
					20: 'color-mix(in srgb, #be6928 20%, transparent)',
					30: 'color-mix(in srgb, #be6928 30%, transparent)',
					40: 'color-mix(in srgb, #be6928 40%, transparent)',
					60: 'color-mix(in srgb, #be6928 60%, transparent)',
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)',
					30: 'color-mix(in srgb, var(--muted) 30%, transparent)',
				},
				accent: {
					DEFAULT: '#2e8aa9',
					foreground: 'var(--accent-foreground)',
					5: 'color-mix(in srgb, #2e8aa9 5%, transparent)',
					10: 'color-mix(in srgb, #2e8aa9 10%, transparent)',
					20: 'color-mix(in srgb, #2e8aa9 20%, transparent)',
					30: 'color-mix(in srgb, #2e8aa9 30%, transparent)',
					40: 'color-mix(in srgb, #2e8aa9 40%, transparent)',
					60: 'color-mix(in srgb, #2e8aa9 60%, transparent)',
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)',
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
			}
		}
	},

	plugins: []
};
