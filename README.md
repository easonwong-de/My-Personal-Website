# Personal Website

Personal website built with Next.js and React, styled with CSS Modules and GSAP animations, bundled and exported statically.

## Development

Prerequisites: [Bun](https://bun.sh/)

### 1. Install Dependencies

```bash
bun install
```

### 2. Start Development Server

```bash
bun run dev
```

The application is served at [http://localhost:3000](http://localhost:3000).

### 3. Check & Format

```bash
bun run typecheck
bun run lint
bun run fmt
```

### 4. Build Static Export

```bash
bun run build
```

Static files are output to `out/`.
