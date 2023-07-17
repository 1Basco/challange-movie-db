# The Movie DB Challenge

### How to run:

- Clone the repo
- After that run this command on your command line:

```
cd challenge-movie-db && npm install

```

- Follow the .env.example and create you .env.local file and add your credentials
- then:

```
npm run dev
```

- Follow the CLI to open the app on your browser
- Enjoy! :fire:
- You can also check the app that [I hosted on Vercel](https://challange-movie-db.vercel.app/)

### Tech:

I choose to use only the base that has on the NextJS 13, so that means a lot of Server Side Components, I know I could use React Query but for what as asked in the challenge the SSC was enough. Was kinda nice to use the new app Router, not a lot of problems around it. For testing I'm using Cypress for e2e and also for components although I'm using only in one component that is the only that has some logic on it.
