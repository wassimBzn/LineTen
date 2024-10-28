# Starting with an official Node.js image (version 18 here, but adjust if needed)
# This includes Node.js and npm, saving us setup time
FROM node:18
LABEL authors="wassimbezine"

# Set the working directory in the container
# Think of this as the 'home' folder for our app within the container
WORKDIR /app

# Copy over only the package.json and package-lock.json first
# Why? By copying these separately, we can take advantage of Docker's cache,
# avoiding a reinstallation of dependencies if they haven’t changed.
COPY package*.json ./

# Install dependencies (npm install)
# This will install everything listed in package.json for our app to run
RUN npm install

# Copy the rest of the app's code into the container
# Now that dependencies are installed, we bring in all other files
COPY . .

# Expose port 3000 to allow traffic into the container at this port
# This should match the port your app is configured to run on
EXPOSE 3000

# Start the app
# CMD defines the default command when a container starts
CMD ["npm", "start"]