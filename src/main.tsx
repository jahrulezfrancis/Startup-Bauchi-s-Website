import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/Utils/ScrollHandler/handleScroll.tsx'


const theme = createTheme({
  fontFamily: 'Hanken Grotesk, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Rubik, sans-serif' },
  components: {
    Text: {
      defaultProps: {
        fontSize: ""
      },
      styles: () => ({
        root: {
          fontSize: "17px",
        },
      }),
    },
  }
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <ScrollToTop />
        <Notifications />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
