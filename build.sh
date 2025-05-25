#!/bin/bash

# Build the React app
npm run build

# Move the build to a directory Render expects
mkdir -p public
cp -r dist/* public/