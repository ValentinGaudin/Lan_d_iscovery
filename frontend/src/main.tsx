import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';

import MainRoot from '@/routes/MainRoot';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MainRoot />
	</React.StrictMode>
);
