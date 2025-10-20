# ---- Build stage ----
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Install build dependencies
RUN apk add --no-cache python3 make g++ bash

# Copy manifests
COPY package.json package-lock.json* ./
COPY tsconfig.json .
COPY prisma ./prisma

# Install dependencies
RUN npm ci --silent

# Copy source
COPY src ./src

# Generate Prisma client using environment variables passed at build time if needed
# (If you prefer to generate at runtime, remove this step and run prisma generate in the entrypoint)
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS runner
WORKDIR /usr/src/app

# Production deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --silent

# Copy runtime assets
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY prisma ./prisma
COPY .env.production ./.env.production

# If you use local Prisma engines for native queries, copy them too; otherwise Prisma will use the client in node_modules

# Expose port (match your app)
EXPOSE 3000

# Use a non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

# Start command (adjust if your build output has different entry)
CMD ["node", "dist/server.js"]
