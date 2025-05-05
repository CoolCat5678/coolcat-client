<p align="center">
  <a href="https://github.com/CoolCat5678" target="blank"><img src="https://avatars.githubusercontent.com/u/117610979?v=4" width="120" alt="CoolCat5678" /></a>
</p>

## Description

A Vue 3 + TypeScript frontend project powered by Vite, with auto-generated API types from Swagger.

## Project setup

```
$ pnpm install
```

## Start development server
```
$ pnpm dev
```
Uses `.env.development` by default.

## Run production mode (locally)
```
$ pnpm prod
```
Uses `.env.production` settings.

## Build the project

# Build with development environment
```
$ pnpm build:dev
```
# Build for production
```
$ pnpm build:prod
```

## Generate API types

Automatically generates TypeScript types from your Swagger/OpenAPI definition.
```
$ pnpm generate:api-types
```
This command will fetch the Swagger JSON from the API (configured via `VITE_API_URL`) and generate `src/types/api.d.ts`.

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).