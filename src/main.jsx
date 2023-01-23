import React from 'react'
import ReactDOM from 'react-dom/client'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import store from "./Redux/Store/store";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer autoClose={5000} />
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
