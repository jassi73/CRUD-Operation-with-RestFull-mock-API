import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Read from './Components/Read'
import Update from './Components/Update'
import Delete from './Components/Delete'
import Header from './Components/Header';
import ListData from './Components/ListData'
ReactDOM.render(
  <ChakraProvider>
  <React.StrictMode>
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/read" element={<Read />}/>
      <Route path="/update" element={<Update />}/>
      <Route path="/delete" element={<Delete />}/>
      <Route path="/list" element={<ListData />}>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
