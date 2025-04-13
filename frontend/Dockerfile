# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Only copy package.json and package-lock.json if package-lock.json exists
COPY package.json ./ 
COPY package-lock.json ./  # It's important to copy the lock file if you have it

RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
