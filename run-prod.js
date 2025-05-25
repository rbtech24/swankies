import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static assets from the dist directory
app.use(express.static(path.join(__dirname, 'dist/public')));

// For all other requests, send to the client app
app.get('*', (req, res) => {
  // Skip API routes (though they won't be used in this simplified version)
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

// Use the PORT environment variable provided by Render
const port = process.env.PORT || 10000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});