# SWANKIES Elite Detail & Restoration Website

A comprehensive auto, boat, and motorcycle detailing website for SWANKIES Elite Detail & Restoration, serving Northeast Oklahoma and Northwest Arkansas.

## Features

- Modern responsive design with neon green accents
- Comprehensive information about detailing services
- Service area pages for specific locations
- Online booking system
- Detailed gallery and testimonials
- Full SEO optimization

## Deployment Instructions for Render

### Prerequisites

- A Render account (https://render.com)
- Access to the GitHub repository with this code

### Steps to Deploy

1. Log in to your Render account.

2. Navigate to the Dashboard and click on "New" > "Web Service".

3. Connect your GitHub repository where this code is stored.

4. Configure the Web Service with the following settings:
   - **Name**: swankies-elite-detail (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm ci`
   - **Start Command**: `./deploy.sh`

5. Add the following environment variables:
   - `NODE_ENV`: production

6. Click "Create Web Service".

7. Render will automatically build and deploy your application. Once the deployment is complete, you can access your website via the URL provided by Render.

### Custom Domain Setup (Optional)

1. In your Render dashboard, navigate to your web service.

2. Click on the "Settings" tab.

3. Scroll down to the "Custom Domain" section and follow the instructions to add your domain.

4. Update your domain's DNS records as instructed by Render.

## Local Development

### Requirements

- Node.js (version 18.x or later)

### Getting Started

1. Clone the repository:
   ```
   git clone [repository-url]
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Building for Production

To build the application for production:

```
npm run build
```

## Technologies Used

- React.js
- Express.js
- Tailwind CSS
- Vite
- Node.js