import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import LoadingSpinner from './components/Spinner';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <React.StrictMode>
      <App />
      <LoadingSpinner isLoading={isLoading} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
