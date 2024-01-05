# Dockerfile
FROM node:18-alpine
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build
# Set the environment variable to run the Next.js application in production mode
ENV NODE_ENV production
ENV PORT 80

# Expose the port that the application will run on
EXPOSE 80

# Start the application
CMD ["npm", "start"]