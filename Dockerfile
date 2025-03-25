# Use official Node.js image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start application
CMD ["npm", "start"]

