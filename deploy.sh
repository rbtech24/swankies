#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Start the production server
echo "Starting the server..."
node server-prod.js