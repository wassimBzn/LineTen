# Starting with an official Node.js image (version 18 here)
FROM node:18
LABEL authors="wassimbezine"
# Set the working directory in the container

WORKDIR /app

# copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies (npm install)
# This will install everything listed in package.json for our app to run
RUN npm install

# Copy the rest of the app's code into the container
COPY . .

# Expose port 3000 to allow traffic into the container at this port
EXPOSE 3000

# Start the app

CMD ["npm", "start"]