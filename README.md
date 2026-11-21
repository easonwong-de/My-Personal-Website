# Personal Website

Personal website built with Next.js and React, styled with CSS Modules and GSAP animations, bundled and exported statically.

## Development

Prerequisites: [Bun](https://bun.sh/)

### Install Dependencies

```bash
bun install
```

### Start Development Server

```bash
bun run dev
```

The application is served at [http://localhost:3000](http://localhost:3000).

### Check & Format

```bash
bun run typecheck
bun run lint
bun run fmt
```

### Build Static Export

```bash
bun run build
```

Static files are output to `out/`.

## Deployment

Run the **Release** workflow to publish the image to GHCR.

### Docker Compose

```yaml
services:
    yixinwang:
        image: ghcr.io/easonwong-de/my-personal-website:latest
        container_name: yixinwang
        ports:
            - "127.0.0.1:5000:8080"
        deploy:
            resources:
                limits:
                    cpus: "0.25"
                    memory: 128M
        restart: unless-stopped
```

```bash
docker compose up -d
```

### Update

```bash
docker compose pull && docker compose up -d
```
