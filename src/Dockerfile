# Step 1: Use Node.js base image for building Astro project
FROM node:18-alpine as builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Build the project for production
RUN npm run build

# Step 7: Use NGINX to serve the built static files
FROM nginx:alpine as production

# Step 8: Copy the built files to the NGINX server
COPY --from=builder /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 for the container
EXPOSE 80

# Step 10: Start NGINX
CMD ["nginx", "-g", "daemon off;"]
