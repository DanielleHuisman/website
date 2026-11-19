import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from './components/root';
import './index.css';

const container = document.getElementById('root');
if (container) {
    createRoot(container).render(
        <StrictMode>
            <Root />
        </StrictMode>,
    );
}
