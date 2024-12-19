## Blog Application

### Overview

This is a simple blog application built using Next.js with the Blogger API as the data source. The application allows users to:

- View a list of blog posts

- View individual post details

- Create new posts (if supported by the Blogger API)

The project demonstrates:

- Routing and dynamic pages in Next.js

- Server-side rendering (SSR) using the pages/ directory approach

- Data fetching from an external API (Google Blogger API)

### Features

- Responsive and mobile-friendly design

- Server-side rendering for SEO optimization and dynamic content updates

- Modern React features (Server Components and async/await syntax)

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 16 or higher)

- npm or yarn

### Dependencies

The project uses the following major dependencies:

- Next.js: For building the application

- React: For component-based UI

- Google Blogger API: For fetching blog posts

- dotenv: For managing environment variables (API key, etc.)

### Setup Instructions

1. #### Clone Repository
   ```
     git clone https://github.com/your-username/blog-app.git
     cd blog-app
   ```
2. #### Install Dependencies
   ```
    npm install
     or
    yarn install
   ```
3. #### Set Up Environment Variables
   
   Create a ```.env.local``` file in the root of the project and add the following:
   ```
     API_KEY=your_api_key
     BLOG_ID=your_blog_id
   ```
4. #### Run the Development Server
  ```
    npm run dev
     or
    yarn dev
  ```
### Approach

- Server-Side Rendering: Used Next.js’s pages/ directory for server-side rendering to ensure the latest blog posts are fetched on every request.

- API Integration: Used Google Blogger API to fetch and display blog posts. The API key is securely stored in environment variables.

- Responsive Design: The UI is designed to be mobile-friendly using Tailwind CSS.

- Error Handling: Implemented error handling for API requests to manage cases where the API fails or returns incomplete data.

### Contact

For any questions or suggestions, feel free to contact me at guelmiscortina@gmail.com.
    
