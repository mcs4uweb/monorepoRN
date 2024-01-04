import * as ReactDOM from 'react-dom/client';
import App from './app/app';

class NextElement extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<App />);
  }
}

customElements.define('next-app', NextElement);
