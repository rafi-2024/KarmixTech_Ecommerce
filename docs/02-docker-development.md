# 02: Docker Development Environment

## What We Added

Task 1.2 packages the minimal Next.js application in a reproducible development container:

- `Dockerfile` installs the locked npm dependency tree and runs Next.js.
- `.dockerignore` keeps local dependencies, build output, secrets, and documentation out of the build context.
- `compose.yaml` builds and runs the application with source-code updates.
- Named volumes keep Linux dependencies and Next.js build output separate from the host.

PostgreSQL is deliberately not included yet. It will be introduced as a separate service in Phase 2.

## Dockerfile Stages

The `dependencies` stage copies only `package.json` and `package-lock.json` before running `npm ci`. Docker can reuse this layer until a dependency file changes, so normal source edits do not reinstall every package.

The `development` stage copies those installed dependencies and the application source. It starts `next dev` on `0.0.0.0` so the server is reachable through the container port.

The application runs as the Node image's existing non-root `node` user. This limits container privileges and catches file-permission assumptions early.

## Compose Service

The `app` service:

- builds the `development` Dockerfile stage;
- maps host port `127.0.0.1:3000` to container port `3000`;
- bind-mounts the repository at `/app` for live source updates;
- stores `/app/node_modules` in a named volume so host and Linux packages do not mix;
- stores `/app/.next` in a named volume so generated output stays outside the source tree;
- runs the Webpack development server with polling so file updates are detected reliably through Docker Desktop;
- checks the homepage until Next.js returns a successful response.

Binding the port to `127.0.0.1` makes the development server available from this computer without exposing it to the local network.

Next.js also allows `127.0.0.1` as a development origin so hot-module updates work whether the browser uses `localhost` or the loopback IP address.

## Commands

Build and start the application:

```bash
docker compose up --build
```

Run it in the background:

```bash
docker compose up --build -d
```

View logs:

```bash
docker compose logs -f app
```

Stop the container:

```bash
docker compose down
```

Use `docker compose down --volumes` only when you intentionally want to discard the dependency and build-cache volumes. Rebuild after changing `package.json` or `package-lock.json` so the container installs the new dependency tree.

## Native Workflow

Docker is the reproducible development environment, but the native npm workflow remains useful for learning and troubleshooting:

```bash
npm ci
npm run dev
```

Do not run the native and containerized development servers at the same time because both use port `3000`.

## Verification

```bash
docker compose config
docker compose build
docker compose up -d
docker compose ps
```

Open <http://localhost:3000>. The `app` service should become `healthy`.
