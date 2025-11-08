import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostProvider } from "./contexts/PostContext";
import { FeaturedPostProvider } from "./contexts/FeaturedPostContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <FeaturedPostProvider>
        <App />
      </FeaturedPostProvider>
    </PostProvider>
  </StrictMode>,
)
