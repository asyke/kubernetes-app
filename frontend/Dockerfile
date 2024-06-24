# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application to the working directory
COPY . .

# Build the React application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["yarn", "start"]
