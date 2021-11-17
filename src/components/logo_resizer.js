import React from "react";
import { useState } from "react";
import axios from 'axios';
import './../App.css';

let height, width, aspect_ratio;

const LogoResizer = () => {
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(false);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading67,setLoading67]=useState(false);
  const [loading100,setLoading100]=useState(false);
  const [image, setImage] = useState('');
  const [image67,setImage67]=useState('');
  const [image100,setImage100]=useState('');



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
        apiCall(aspect_ratio, c.src);
        apiCall267_67(aspect_ratio,c.src);
        apiCall100_100(aspect_ratio,c.src)
        
        
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
        apiCall(aspect_ratio, img.src);
        apiCall267_67(aspect_ratio,img.src);
        apiCall100_100(aspect_ratio,img.src)
        
      };
      img.src = url.value;
    }
  }


  const showUrl = (ref) => {
    setSelect(true);
    if (ref === 'url') {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }

  //visibility reset for 400 x 100 and 267 x 67
  const reset=(arr)=>{
    for(let i=20;i<=400;i+=20){
      arr[i]="false";
   }
  }

  
 
   //API Call dunction for 400x100
  const apiCall = (ar, url) => {
    console.log("as", ar)
    console.log("url", url)
    var width = (ar * 100);
    console.log("width", width)
    var n_w_width = `${width}`;

    console.log("new width", n_w_width)
    console.log("API Call")

    var arr=[];

    for(let i=20;i<=400;i+=20){
         arr[i]="false";
    }

    
    for(let i=20;i<=400;i+=20){
        let low=i-10;
        let high=i+10;
        if(n_w_width>=low && n_w_width<high){
              arr[i]="true"
              console.log(i);
        }
    
    }
    if(n_w_width>400){
      arr[400]="true";
    }
    setLoading(true)

    axios.post('https://studio.pixelixe.com/api/graphic/automation/v2', {
      "template_name": "400x100",
      "api_key": "dd8SrZnkmnXbzcjjVu9lTUPJylA2",
      "format": "json",
      "modifications": [
        {
          "name": "img20",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[20]
        },
        {
          "name": "img40",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[40]
        },
        {
          "name": "img60",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[60]
        },
        {
          "name": "img80",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[80]
        },
        {
          "name": "img100",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[100]
        },
        {
          "name": "img120",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[120]
        },
        {
          "name": "img140",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[140]
        },
        {
          "name": "img160",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[160]
        },
        {
          "name": "img180",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[180]
        },
        {
          "name": "img200",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[200]
        },
        {
          "name": "img220",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[220]
        },
        {
          "name": "img240",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[240]
        },
        {
          "name": "img260",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[260]
        },
        {
          "name": "img280",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[280]
        },
        {
          "name": "img300",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[300]
        },
        {
          "name": "img320",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[320]
        },
        {
          "name": "img340",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[340]
        },
        {
          "name": "img360",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[360]
        },
        {
          "name": "img380",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[380]
        },
        {
          "name": "img400",
          "type": "image",
          "image_url": url,
          "width": `${n_w_width}px`,
          "height": "100px",
          "visible": arr[400]
        }
      ]
    }).then(function (response) {
      let image = response.data.image_url;
      setImage(image);
      console.log("res", response.data)
      setStatus(true)
      setLoading(false)
      reset(arr)
    })
      .catch(function (error) {
        console.log(error);
      });


  }

  //API Call 267 X 67
  const apiCall267_67 = (ar,url) => {
    console.log("as", ar)
    console.log("url", url)
    var width = (ar * 67);
    console.log("width67", width)
    var n_w_width = `${width}`;
    console.log("new width", n_w_width);
    console.log("API Call");
    setLoading67(true);

     

    var arr=[];
    for(let i=20;i<=260;i+=20){
         arr[i]="false";
    }

    for(let i=20;i<=260;i+=20){
      let low=i-10;
      let high=i+10;
      if(width>=low && width<high){
            arr[i]="true"
            console.log(i);
      }
  
  }
  if(width>260){
    arr[260]="true";
  }
 
    axios.post('https://studio.pixelixe.com/api/graphic/automation/v2',
    {
      "template_name": "267x67",
      "api_key": "dd8SrZnkmnXbzcjjVu9lTUPJylA2",
      "format":"json",
      "modifications": [
          {
              "name": "img20",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[20]
          },
          {
              "name": "img40",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[40]
          },
          {
              "name": "img60",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[60]
          },
          {
              "name": "img80",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[80]
          },
          {
              "name": "img100",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[100]
          },
          {
              "name": "img120",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[120]
          },
          {
              "name": "img140",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[140]
          },
          {
              "name": "img160",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[160]
          },
          {
              "name": "img180",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[180]
          },
          {
              "name": "img200",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[200]
          },
          {
              "name": "img220",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[220]
          },
          {
              "name": "img240",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[240]
          },
          {
              "name": "img260",
              "type": "image",
              "image_url": url,
              "width": `${n_w_width}px`,
              "height": "67px",
              "visible": arr[260]
          }
      ]
  }
     ).then(function (response) {
      let image = response.data.image_url;
      setImage67(image);
      console.log("res", response.data)
      setStatus(true)
      setLoading67(false)
      reset(arr)
    })
      .catch(function (error) {
        console.log(error);
      });

  }


    //API Call 100 X 100
    const apiCall100_100 = (ar,url) => {
      console.log("as", ar)
      console.log("url", url)
      console.log("API Call 100X100");
      setLoading100(true);


      var width100;
      var height100;

      var arr_v=[];
      var arr_h=[];
      for(let i=20;i<=100;i+=20){
          arr_v[i]="false"
      }
      for(let i=20;i<=100;i+=20){
          arr_h[i]="false"
      }
      const reset100=(arr)=>{
        for(let i=20;i<=100;i++){
          arr[i]="false"
        }
      }

      if(ar>1){
        reset100(arr_v);
        height100=(100)/ar;
        for(let i=20;i<=100;i++){
           let low=i-10;
           let high=i+10;
           if(height100>=low && height100<high){
               arr_h[i]="true"
           }
        }
        if(height100>100){
          arr_h[100]="true"
        }
      }
      else{
          reset100(arr_h)
          width100=(ar*100);
          for(let i=20;i<=100;i++){
            let low=i-10;
            let high=i+10;
            if(width100>=low && width100<high){
                arr_v[i]="true"
            }
         }
         if(width100>100){
           arr_v[100]="true"
         }
      }
      

      axios.post('https://studio.pixelixe.com/api/graphic/automation/v2',
      {
        "template_name": "100x100",
        "api_key": "dd8SrZnkmnXbzcjjVu9lTUPJylA2",
        "format":"json",
        "modifications": [
            {
                "name": "img20v",
                "type": "image",
                "image_url": url,
                "width": `${width100}px`,
                "height": "100px",
                "visible": arr_v[20]
            },
            {
                "name": "img40v",
                "type": "image",
                "image_url": url,
                "width": `${width100}px`,
                "height": "100px",
                "visible": arr_v[40]
            },
            {
                "name": "img60v",
                "type": "image",
                "image_url": url,
                "width": `${width100}px`,
                "height": "100px",
                "visible": arr_v[40]
            },
            {
                "name": "img80v",
                "type": "image",
                "image_url": url,
                "width": `${width100}px`,
                "height": "100px",
                "visible": arr_v[80]
            },
            {
                "name": "img100v",
                "type": "image",
                "image_url": url,
                "width": `${width100}px`,
                "height": "100px",
                "visible": arr_v[100]
            },
            {
                "name": "img20h",
                "type": "image",
                "image_url": url,
                "width": "100px",
                "height":`${height100}px`,
                "visible": arr_h[20]
            },
            {
                "name": "img40h",
                "type": "image",
                "image_url": url,
                "width": "100px",
                "height":`${height100}px`,
                "visible": arr_h[40]
            },
            {
                "name": "img60h",
                "type": "image",
                "image_url": url,
                "width": "100px",
                "height":`${height100}px`,
                "visible": arr_h[60]
            },
            {
                "name": "img80h",
                "type": "image",
                "image_url": url,
                "width": "100px",
                "height":`${height100}px`,
                "visible": arr_h[80]
            },
            {
                "name": "img100h",
                "type": "image",
                "image_url": url,
                "width": "100px",
                "height":`${height100}px`,
                "visible": arr_h[100]
            }
        ]
    }
      ).then(function (response) {
        let image = response.data.image_url;
        setImage100(image);
        console.log("res", response.data)
        setStatus(true)
        setLoading100(false)
        reset100(arr_h)
        reset100(arr_v)
      })
        .catch(function (error) {
          console.log(error);
        });

      

    }

  return (
    <div className="app">
      <h1 style={{fontSize: '48px'}}>Logo Resizer</h1>
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

          <input  type="button" value="submit" onClick={() => {
            if (show) {
              myUrl()
              setUrl("")
            }
            else {
              myfunc()
              document.getElementById("img").value = ""
            }
          }
          } />


          <input type="hidden" value={width} name="width" />
          <input type="hidden" value={aspect_ratio} name="aspect_ratio" />
          
        </div>
      ) : null}

      {status?(
        <div>
        <p>Width: {width} height:{width/aspect_ratio}</p>
        <p>Aspect Ratio: {aspect_ratio}</p>

   </div>
      ):null}

     
      

      
      
      <br/>
      {/* 400X100 */}
      <h3>Response is of size 400x100</h3>
      {loading ? <p>Loading</p> : null}
      
      {status ? <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontSize: "80%" }}>
          {image}
        </p>
        <img src={image} style={{ width: "auto", height: "100px", margin: "auto", border: "2px solid #555" }} alt="400 X 100 img"/>
      </div> : null}
      
      {/* 267X67 */}
      <h3>Response is of size 267x67</h3>
      {loading67 ? <p>Loading</p> : null}
      {status ? <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontSize: "80%" }}>
          {image67}
        </p>
        <img src={image67} style={{ width: "auto", height: "67px", margin: "auto", border: "2px solid #555" }} alt="267 X 67 img"/>
      </div> : null}

       {/* 100X100 */}
      <h3>Response is of size 100x100</h3>
      {loading100 ? <p>Loading</p> : null}
      {status ? <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontSize: "80%" }}>
          {image100}
        </p>
        <img src={image100} style={{ width: "100px", height: "100px", margin: "auto", border: "2px solid #555",}} alt="100 X 100 img"/>
      </div> : null}


      
    </div>
  );
};

export default LogoResizer;
