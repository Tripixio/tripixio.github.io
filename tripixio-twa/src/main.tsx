import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// this manifest is used temporarily for development purposes
// const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';
const manifestUrl = 'https://tripixio.github.io/tripixio-twa/tonconnect-manifest.json';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)
//Use this token to access the HTTP API:

// 7453714231:AAEhXxnn8PaJdb1mnBVQE0AyPUbrjBpNiWk
//git clone https://github.com/Tripixio/tripixio.github.io


