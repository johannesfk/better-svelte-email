import postcss from 'postcss';
import type { Root } from 'postcss';
import precompiledTailwindCss from './precompiled-tailwind';
import { sanitizeCustomCss } from './sanitize-custom-css';

/**
 * Loads precompiled Tailwind CSS generated at build-time from a safelist.
 * This path is runtime-safe for edge environments because it avoids tailwind compilation.
 */
export function setupPrecompiledTailwind(customCSS?: string): Root {
	return postcss.parse(
		`${precompiledTailwindCss}
${customCSS ? sanitizeCustomCss(customCSS) : ''}`
	);
}
