This repo is a container where I push my study and my improvement about backend's stuff

Tech stack
Language Typescript
Framework ExpressJS
ORM Prisma
DB Prostgresql on Supabase
[//]: # (Converted to clearer Markdown below)

# REST_API

This repository is a workspace where I push my study notes and improvements related to backend development.

## Tech stack

- **Language:** TypeScript
- **Framework:** Express.js
- **ORM:** Prisma
- **Database:** PostgreSQL (hosted on Supabase)

## Overview

This project contains example code and experiments for building REST APIs using TypeScript, Express, and Prisma with a PostgreSQL database provided by Supabase. Use the `src/` directory as the main application source.

## Files of interest

- `src/` — application source code
- `prisma/schema.prisma` — Prisma schema and migrations
- `package.json` — project scripts and dependencies

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Set up your Supabase/Postgres connection and add the connection string to your environment variables (for example `DATABASE_URL`).

3. Run Prisma migrations (example):

```bash
npx prisma migrate dev
```

4. Start the dev server:

```bash
npm run dev
```
