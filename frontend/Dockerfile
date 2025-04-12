# Example Dockerfile for React app

# Use a Node.js image for building the React app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code and build the React app
COPY . ./
RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:alpine

# Copy the build files from the previous step into Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80
