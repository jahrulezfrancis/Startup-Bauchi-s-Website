import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from "@mantine/core"
import {Notifications} from "@mantine/notifications"
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
     <Notifications />
          <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
