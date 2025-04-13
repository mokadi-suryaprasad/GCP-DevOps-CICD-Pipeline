# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package.json ./ 
COPY package-lock.json ./  # It's important to copy the lock file if you have it

RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the React build to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
