//import logo from './logo.svg';
import './App.css';
import Screen from './second.jpg';
import {useRef,useState,useEffect} from 'react';
import { uploadFile } from './services/api';
function App() {
  const [file,setFile]=useState('');
  const [result,setResult]=useState('')
  const fileinputref=useRef();
  
  const onUploadClick=()=>{
    fileinputref.current.click();
  }

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response=await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  console.log(file);
  return (
    <div className="container">
  <img src={Screen} alt="banner"/>
  <div className="wrapper">
  <h1>Simple file Sharing</h1>
  <p> Upload and Share the download link.</p>

  <button onClick={()=>onUploadClick()}>Upload</button>
  <input type="file" ref={fileinputref} style={{display:'none'}}
   onChange={(e=>setFile(e.target.files[0]))}
  />
  <a href={result} target="_blank">{result}</a>

  </div>











    </div>
  );
}

export default App;
