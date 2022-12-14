# About NextJS 13 Boilerplate 2023

This boilerplate contains support and implementatior for:

1. SASS
2. Redux Toolkit
3. Prisma ORM
4. Airbnb ESlint
5. Prettier
6. Strict CSP (security)
7. Environment variables
8. Framer Motion (animations)
9. E2E Testing with Cypress
10. start-server-and-test support for cypress testing purposes
11. Internationalization (i18n) + custom way of using translations
12. One command full setup
13. Typescript (latest)
14. Custom Lottie dynamic component
15. Custom API service with Axios

NextJS 13 Updated!

Don't forget to setup your env file! 

It was created to make your life easier and to have a starting point for any scalable project.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Make sure you have docker installed and run `$ yarn setup`. This script will install the project, setup Prisma, create a docker PostgreSQL container and migrate the database. A whole setup in one command.

2. You are ready to go.

## Demo URLs

Main URL: `localhost:3000/`

Framer Motion demo: `localhost:3000/framer-example`

Route with params: `localhost:3000/post/{write anything here}`

API post get: `localhost:3000/api/post`

# Lottie Component

Created a dynamic lottie component that only loads dynamically to prevent too much resource consumption.
Used lottie example from [here](https://lottiefiles.com/120096-ai-assistant-animation)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
