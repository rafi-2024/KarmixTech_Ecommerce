#!/usr/bin/env sh
set -e

if [ "$SKIP_PRISMA" != "true" ]; then
  echo "[entrypoint] Generating Prisma client..."
  npx prisma generate

  echo "[entrypoint] Applying Prisma migrations..."
  npx prisma migrate deploy

  echo "[entrypoint] Seeding database..."
  npx prisma db seed
fi

exec "$@"
