import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SmoothScroll } from './components/SmoothScroll'

// Prevent double-tap to zoom on iOS: small handler
if (typeof window !== 'undefined' && 'ontouchstart' in window) {
  let lastTouch = 0;
  window.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouch <= 300) {
      // double-tap detected - prevent zoom
      e.preventDefault();
    }
    lastTouch = now;
  }, { passive: false });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
)
