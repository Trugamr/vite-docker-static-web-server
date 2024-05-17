FROM node:20.13.1-alpine3.19 as build

# Enable pnpm support using corepack
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

####################

FROM joseluisq/static-web-server:2.30-alpine

WORKDIR /app

COPY --from=build /app/dist .

EXPOSE 80

# Serve the static files
CMD ["static-web-server", "--page-fallback", "index.html", "-d", "."]