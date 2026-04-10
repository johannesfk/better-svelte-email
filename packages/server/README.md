# @better-svelte-email/server

Server-side renderer for Better Svelte Email: compile Tailwind-aware Svelte components into **email-safe HTML** (styles inlined, markup adapted for clients).

Used by [`better-svelte-email`](https://www.npmjs.com/package/better-svelte-email), [`@better-svelte-email/components`](../components), [`@better-svelte-email/preview`](../preview), and the [`@better-svelte-email/cli`](../cli).

## Install

```bash
npm i @better-svelte-email/server
```

**Peer dependency:** `svelte` >= **5.14.3**

## Exports

The main entry exposes:

- **`Renderer`** — configure Tailwind (`tailwindConfig`), optional injected **`customCSS`** (e.g. theme variables), choose **`tailwindMode`** (`precompiled` or `runtime`), then **`render(component, options)`** to produce HTML
- **`toPlainText`** — derive a plain-text version from rendered HTML
- **Types** — `TailwindConfig`, `RendererOptions`, `RenderOptions`, `AST`, etc.
- **`pixelBasedPreset`** — Tailwind-related helper for pixel-oriented email styling

See JSDoc in the source and the [project documentation](https://better-svelte-email.konixy.dev/docs) for examples.

## Monorepo

[github.com/Konixy/better-svelte-email](https://github.com/Konixy/better-svelte-email) — `packages/server`.

## Development

```bash
bun run build --filter=@better-svelte-email/server
bun run test --filter=@better-svelte-email/server
```

Package-local:

```bash
bun run build
bun run test
bun run lint
```

## Tailwind modes

`Renderer` supports two Tailwind modes:

- **`precompiled`**: Uses a bundled build-time safelisted CSS artifact. This mode avoids runtime Tailwind compilation and is safer for edge/runtime-constrained environments.
- **`runtime` (default)**: Compiles Tailwind utilities at render time via `tailwindcss`. Use this when you need full dynamic utility generation in Node-only environments.

If you pass a custom `tailwindConfig`, runtime mode is used automatically.

## License

MIT
