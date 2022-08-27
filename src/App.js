import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [product,setProduct] = useState([]);

  useEffect(()=>{
    axios.get("https://s3.amazonaws.com/open-to-cors/assignment.json"
    ).then((res)=>{
      console.log(res.data.products)
      setProduct(res.data.products)
    })
  },[])

   

  return (
    <div className="App">
     {Object.entries(product).map((index)=>{
      return(
        <div key={index}>
        <h4>{c
          index.title}</h4>
        </div>
      )
     })}
    </div>
  );
}

export default App;
