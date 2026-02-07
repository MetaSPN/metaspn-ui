# MetaSPN UI - Season 1

Next.js web app for Season 1 staking, signal map, and founder admin workflows.

## Included Views

- Landing/Hero (`/`)
- Player Dashboard (`/dashboard`)
- Games Browser (`/games`)
- Game Detail (`/games/[id]`)
- Network Signal Map (`/network`)
- Reward Dashboard (`/rewards`)
- Season Summary (`/season`)
- Founder Admin Panel (`/admin`)

Founder Stake remains visible in a fixed bottom panel across all routes.

## Wallet Support

- Phantom
- Solflare

## Run

```bash
npm install
npm run dev
```

## Notes

Season state machine UX is client-side and includes all required states:

- `not_connected`
- `connected_no_towel`
- `active_staker`
- `season_complete_claimable`
