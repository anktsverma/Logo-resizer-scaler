import React, { useState } from 'react';
import './App.css';
import LogoResizer from './components/logo_resizer';
import LogoScaler from './components/logo_scaler';

const App=()=>{
     const[resizer,setResizer]=useState(false)
     const[scaler,setScaler]=useState(false)
      return(
        <div>
        <div style={{display:'flex',justifyContent:'center',padding:'30px 0px'}}>
          <input type='button' value='logo resizer' onClick={()=>{
            setResizer(true)
            setScaler(false)
          }} />
          <input type='button' value='logo Scaler'  onClick={()=>{
            setScaler(true)
            setResizer(false)
          }}/>
        </div>
          {resizer && <LogoResizer/>}
          {scaler && <LogoScaler/>}
        </div>
      )
}

export default App;