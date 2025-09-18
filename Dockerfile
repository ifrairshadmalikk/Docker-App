# Step 1: Build React app
FROM node:20 AS build   
WORKDIR /app

# Install dependencies
COPY client/package*.json ./client/
RUN cd client && npm install

# Copy source code
COPY client ./client

# Build react app
RUN cd client && npm run build

# Step 2: Serve with nginx
FROM nginx:alpine

# Copy React build (dist folder) to nginx html folder
COPY --from=build /app/client/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
