import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import { StateProvider } from './StateProvider';
import { initialState } from './reducer';
import  reducer  from './reducer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
 <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
 
 
);

 