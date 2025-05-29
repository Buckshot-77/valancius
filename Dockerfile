# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json
COPY package.json ./

COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# install dependencies
RUN pnpm i

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN pnpm build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]