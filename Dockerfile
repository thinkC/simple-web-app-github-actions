# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Copy wait-for-it.sh into the image
# COPY wait-for-it.sh .

# Copy the init.sql script to the PostgreSQL initialization directory
# COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Expose port 3000 for the Node.js application
EXPOSE 3000

# Command to start the Node.js application
CMD ["node", "app.js"]
# Command to start the Node.js application with wait-for-it.sh
# CMD ["./wait-for-it.sh", "postgres:5432", "--", "node", "app.js"]