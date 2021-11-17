import React from "react";
import { useState } from "react";
import './../App.css';

let height, width, aspect_ratio;

const LogoScaler = () => {
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(false);
  const [status, setStatus] = useState(false);
  const [imageLocal,setImageLocal]=useState('')
  const [widthScale,setWidthScale]=useState('');
  const [heightScale,setHeightScale]=useState('')
  const [maintainRatio,setMaintainRatio]=useState(true)
  const [heightScaler,setHeightScaler]=useState('')
  const [widthScaler,setWidthScaler]=useState('')
  const [scalerShow,setScalerShow]=useState(false)
  const [height_width,setHeight_Width]=useState(false)


  function myfunc() {
    let a = document.getElementById("img");
    let b = a.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
      let c = new Image();
      c.src = e.target.result;
      c.onload = function () {
        width = c.width;
        height = c.height;
        aspect_ratio = width / height;
        setImageLocal(c.src)
        
      };
    };
    reader.readAsDataURL(b);
  }

  function myUrl() {
    var url = document.getElementById("img_url");
    if (url.value !== "") {
      var img = new Image();
      img.onload = function () {
        aspect_ratio = this.width / this.height;
        width = this.width;
        console.log("Aspect Ratio", aspect_ratio, img.src)
        setImageLocal(img.src)
      };
      img.src = url.value;
    }
  }


  const showUrl = (ref) => {
    setSelect(true);
    if (ref === 'url') {
      setShow(true)
      setHeight_Width(true)
    }
    else {
      setShow(false)
      setHeight_Width(true)
    }
  }



    //Logo Scaler Submit Handler
    const scalerSubmitHandler=()=>{
        setStatus(true)
        if (show) {
            myUrl()
            setUrl("")
          }
          else {
            myfunc()
            document.getElementById("img").value = ""
          }
        if(maintainRatio===false && (heightScale!=='' && widthScale!=='')){
          setHeightScaler(heightScale)
          setWidthScaler(widthScale)
          setScalerShow(true)
        }
        if(maintainRatio===false && (heightScale==='' || widthScale==='')){
          window.alert('Height and Width Field Must Not be Empty')
        }
         if(maintainRatio===true && heightScale!=='' && widthScale==''){
          setHeightScaler(heightScale)
          setWidthScaler(heightScale*aspect_ratio)
          setScalerShow(true)
        }
        if(maintainRatio===true && widthScale!=='' && heightScale==''){
          setWidthScaler(widthScale)
          setHeightScaler(widthScale/aspect_ratio)
          setScalerShow(true)
        }
        if(maintainRatio===true && widthScale==='' && heightScale===''){
          window.alert('Height and Width Field Must Not be Empty')
        }
      
        if(maintainRatio===true && widthScale!=='' && heightScale!==''){
          window.alert('Aspect Ratio Selected Provide either Height or Width not both')
        }
       
    }

  return (
    <div className="app">
      <h1 style={{fontSize: '48px'}}>Logo Scaler</h1>
      <ul style={{
        listStyle: "none",
      }}>
        <li style={{ margin: "10px" }}>
          <button style={{height:"30px", width:"150px",borderRadius:"5px"}} onClick={() => { showUrl('url') }} >URL</button>
        </li>
        <li style={{ margin: "10px" }}>
          <button style={{height:"30px", width:"150px",borderRadius:"5px"}} onClick={() => { showUrl('upload') }}>Upload</button>

        </li>
      </ul>
      {select ? (
        <div style={{ margin: "10px", border: "2px solid #555",borderRadius:"5px" }}>

          {show ? (
            <input
              type="text"
              placeholder="Enter Url"
              id="img_url"
              name="url"
              onChange={(e) => { setUrl(e.target.value) }}
              value={url}
              style={{ border:"2px black", marginBottom: "10px" }}
            />
          ) : <input type="file" id="img" style={{ marginBottom: "5px" }} />}

         {/* <input  type="button" value="submit" onClick={() => {
            if (show) {
              myUrl()
              setUrl("")
            }
            else {
              myfunc()
              document.getElementById("img").value = ""
            }
          }
          } />*/}
          
        </div> 
      ) : null}

      {status?(
        <div>
           <p>Original Width: {width} Original height:{width/aspect_ratio}</p>
           <p>Original Aspect Ratio: {aspect_ratio}</p>
        </div>
      ):null}

      <br/>


      {/* Logo Scaler */}
      {height_width?(<div>
      <input type='text' value={widthScale} onChange={(e)=>{setWidthScale(e.target.value) }} placeholder="width" onKeyPress={(event)=>{
        if(event.key==='Enter'){
          scalerSubmitHandler();
        }
      }}/>
      <input type='text' value={heightScale} onChange={(e)=>{setHeightScale(e.target.value)}} placeholder="height" onKeyPress={(event)=>{
        if(event.key==='Enter'){
          scalerSubmitHandler();
        }
      }}/>
      <div>
      <input type="checkbox" value={maintainRatio} onChange={()=>{maintainRatio?setMaintainRatio(false):setMaintainRatio(true) }

      }
       checked={maintainRatio }
      />Aspect Ratio </div>
      <input type='button' value="submit" onClick={scalerSubmitHandler} /> </div>):null}
      {scalerShow?(<div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src={imageLocal} style={{ width:`${widthScaler}px`, height: `${heightScaler}px`, margin: "auto", border: "2px solid #555",}} alt="scaled img" />
    </div>):null}
    
    </div>
    
  );
};

export default LogoScaler;
