import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Routes} from 'react-router';
import { Route } from 'react-router';
import { CharacterPage } from './components/CharacterPage/CharacterPage.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/character/:id" element={<CharacterPage />} />
        </Routes>
    </BrowserRouter>
)
