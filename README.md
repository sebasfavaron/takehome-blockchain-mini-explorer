## Considerations taken

- No env file needed. The apis used are public and no secrets were used in the project
- More info that was required shown. For the purpose of having enough content to show the responsive design
- Incremental Static Regeneration. The revalidate time was left at 60 seconds for all endpoints. Considering the coingecko docs mention a 1 to 5 minute update time for free tiers, the zero user custom data (basically a blog) and the few pages needed (5), I decided to go for ISG over SSR to avoid making the user wait for API data i could fetch and prerender every 2 minutes

## To run locally

### Install dependencies

```bash
npm i
```

### Run

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
