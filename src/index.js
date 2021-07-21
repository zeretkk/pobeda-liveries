import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {mainContext} from "./context";

function AppProvider(){
    const [lang, setLang] = useState()
    const setDefaultLang =()=>{
        let locallang = localStorage.getItem('lang')
        if (locallang){
            setLang(locallang)
        }else {
            localStorage.setItem('lang', 'RU')
            setLang('RU')
        }
    }
    useEffect(()=>{setDefaultLang()},
        //eslint-disable-next-line
        [])
    return(
        <React.StrictMode>
            <mainContext.Provider value={{lang, setLang}}>
                <App />
            </mainContext.Provider>
        </React.StrictMode>
    )
}

ReactDOM.render(
  <AppProvider/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
