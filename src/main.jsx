import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const storageData = window.localStorage.getItem('todo-list')

const DATA = storageData ? JSON.parse(storageData) : []; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App tasks = {DATA} /> {/*passing DATA to App as a prop called task*/}
    
  </StrictMode>,
)
