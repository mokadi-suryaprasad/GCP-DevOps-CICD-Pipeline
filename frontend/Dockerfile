# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Only copy package.json if package-lock.json doesn't exist
COPY package.json ./
# COPY package-lock.json ./   # Uncomment this if you do have a lockfile

RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
