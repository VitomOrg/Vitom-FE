# Stage 1: Base image with build tools
FROM oven/bun:canary AS base

# Set the working directory inside the container
WORKDIR /usr/src/app

ARG CLERK_KEY
ARG MESHY_KEY
ARG API_URL
ARG FIREBASE_API_KEY
ARG FIREBASE_AUTH_DOMAIN
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_STORAGE_BUCKET
ARG FIREBASE_MESSAGING_SENDER_ID
ARG FIREBASE_APP_ID

ENV VITE_CLERK_PUBLISHABLE_KEY=${CLERK_KEY}
ENV VITE_MESHY_KEY=${MESHY_KEY}
ENV VITE_API_URL_BE=${API_URL}
ENV VITE_FIREBASE_API_KEY =${FIREBASE_API_KEY}
ENV VITE_FIREBASE_AUTH_DOMAIN =${FIREBASE_AUTH_DOMAIN}
ENV VITE_FIREBASE_PROJECT_ID =${FIREBASE_PROJECT_ID}
ENV VITE_FIREBASE_STORAGE_BUCKET =${FIREBASE_STORAGE_BUCKET}
ENV VITE_FIREBASE_MESSAGING_SENDER_ID =${FIREBASE_MESSAGING_SENDER_ID}
ENV VITE_FIREBASE_APP_ID =${FIREBASE_APP_ID}

# Stage 2: Install dependencies
FROM base AS install

# Create a temporary directory for development dependencies
RUN mkdir -p /temp/dev

# Copy package.json and bun.lockb files
COPY package.json bun.lockb /temp/dev/

# Install development dependencies
RUN cd /temp/dev && bun install --frozen-lockfile

# Stage 3: Build the application
FROM base AS build

# Copy installed dependencies from the install stage
COPY --from=install /temp/dev/node_modules /usr/src/app/node_modules


# Copy the rest of the application code
COPY . .

# Build the React TypeScript application
ENV NODE_ENV=production
RUN bun run build

# Stage 4: Production image with nginx
FROM nginx:alpine AS release

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port on which the application will run
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
