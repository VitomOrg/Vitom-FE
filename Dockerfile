# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm i npm-run-all --save-dev
RUN npm i --package-lock-only

# Copy the rest of the application code to the working directory
COPY . .

# Build the React TypeScript application
RUN npm run build

# Use a lightweight web server to serve the built application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port on which the application will run
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]