# Turborepo starter

This is an official pnpm starter turborepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `poker`: a package that contains the logic for the poker game

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

## Learn More
- [Turbo Repo](https://turbo.build/) - learn about Turbo Repo.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - learn about Tailwind CSS features and API.
- [Socket.IO](https://socket.io/) - learn about Socket.IO features and API.


## Proficiency Skill Test
- Use Turbo Repo to create a new project
- Setup project using Next.js, SvelteKit or Create React App (CRA) with TypeScript
- Project structure design and code organization (folder structure)
- Fundamental of front-end development (HTML, CSS, JavaScript)
- Using tailwind CSS for styling UI or any CSS framework (if Tailwind CSS is not your choice)
- Implement responsive UI design
- Complete assignment UI design with Figma
- Fetch data from API and render UI
- Subscribe to socket.io event and update UI in real-time
- Programming logic and algorithm
- Unit test with Jest
- Deploy to Vercel or Netlify (optional)

---
# Assignment 1
Pokedex App
### Figma Design
- [Pokedex UI Preview](https://www.figma.com/file/4HiLWxoecEY9K4W42MqlED/Pok%C3%A9dex-(Community)?type=design&node-id=314-3&mode=design&t=n3ggThnliJj1l11c-0)

### API Reference
- [API Document](https://pokeapi.co/docs/v2)
---
# Assignment 2
Poker Game UI
### Figma Design
- [Poker  Preview](https://www.figma.com/file/6pqpZWG5Ki6Y850VHoQRHF/Wireframing-in-Figma?type=design&node-id=0-1&t=Y86J1e76KJEUw5Yu-0)

### API Reference
- [API Document](https://looxer.factory.fun/docs)
- [API Endpoint](https://looxer.factory.fun/api)
- [Socket.IO Endpoint](wss://looxer.factory.fun/socket.io)
  >wss://looxer.factory.fun/socket.io

### Socket.io Client
Join room with socket.io client by sending `joinRoom` event with room id
```javascript
socket.emit("joinRoom", { id: query.id });
```
subscribe to `room` event to receive room data from server
```javascript
socket.on("gameState", onGameState);
```
---
# Assignment 3
## Complete all the test cases
- Run `pnpm run test` to test in poker package directory and complete all the test cases
- implement function in `src/index.ts` to pass all the test cases
---
