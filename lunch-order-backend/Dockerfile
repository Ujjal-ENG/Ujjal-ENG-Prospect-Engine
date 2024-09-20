# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies (production or development based on your needs)
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Nest.js app (if needed)
RUN npm run build

# Expose the port that the Nest.js app runs on (default is 3000)
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "run", "start:prod"]
