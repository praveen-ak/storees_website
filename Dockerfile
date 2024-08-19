# Use the official Node.js image as a base image
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the runtime environment
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the builder image
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port that the application runs on
EXPOSE 8080

# Start the Next.js application
CMD ["npm", "start"]