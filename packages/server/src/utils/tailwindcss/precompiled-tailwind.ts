const precompiledTailwindCss = `
:root {
	--color-red-500: #ef4444;
	--color-red-100: #fee2e2;
	--color-blue-300: #93c5fd;
	--color-slate-900: #0f172a;
}

.text-center {
	text-align: center;
}

.text-left {
	text-align: left;
}

.font-bold {
	font-weight: 700;
}

.p-4 {
	padding: 1rem;
}

.text-red-500 {
	color: var(--color-red-500);
}

.text-red-300 {
	color: #fca5a5;
}

.bg-red-500 {
	background-color: var(--color-red-500);
}

.bg-red-100 {
	background-color: var(--color-red-100);
}

.bg-slate-900 {
	background-color: var(--color-slate-900);
}

.bg-gray-100 {
	background-color: #f3f4f6;
}

.bg-gray-900 {
	background-color: #111827;
}

.text-lg {
	font-size: 1.125rem;
	line-height: 1.75rem;
}

.border {
	border-width: 1px;
	border-style: solid;
	border-color: #e5e7eb;
}

@media (min-width: 40rem) {
	.sm\\:bg-blue-300 {
		background-color: var(--color-blue-300);
	}

	.sm\\:mx-auto {
		margin-left: auto;
		margin-right: auto;
	}

	.sm\\:max-w-lg {
		max-width: 32rem;
	}

	.sm\\:rounded-lg {
		border-radius: 0.5rem;
	}
}

@media (min-width: 48rem) {
	.md\\:text-left {
		text-align: left;
	}

	.md\\:bg-blue-500 {
		background-color: #3b82f6;
	}

	.md\\:px-10 {
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}

	.md\\:py-12 {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
}
`;

export default precompiledTailwindCss;
