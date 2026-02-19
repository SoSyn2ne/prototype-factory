# map-ui template

Minimal Next.js App Router map UI scaffold with pluggable provider architecture.

## Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Vendored shadcn-style UI primitives in `components/ui`
- Provider interface under `lib/map/provider.ts`

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Provider architecture
- `lib/map/provider.ts`: `MapProvider` interface (`init`, `setMarkers`, `setOnSelect`)
- `lib/map/mock-provider.ts`: mock implementation with placeholder canvas + clickable marker list
- `lib/map/create-provider.ts`: provider factory for easy swap to Kakao/Naver/Mapbox later

## Notes
- No external map SDK or API key is included.
