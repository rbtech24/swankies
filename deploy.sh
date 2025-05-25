#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Create a simple import map to resolve the route paths
echo "Fixing import paths for production..."
mkdir -p dist
cat > dist/routes.js <<EOL
// This is a simple shim to make the server-prod.js file work
import { registerRoutes } from './index.js';
export { registerRoutes };
EOL

# Start the production server
echo "Starting the server..."
node run-prod.js