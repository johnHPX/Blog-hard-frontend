import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostProvider } from "./contexts/PostContext";
import { FeaturedPostProvider } from "./contexts/FeaturedPostContext";
import { PerfilProvider } from './contexts/PerfilContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <FeaturedPostProvider>
        <PerfilProvider>
          <App />
        </PerfilProvider>
      </FeaturedPostProvider>
    </PostProvider>
  </StrictMode>,
)
