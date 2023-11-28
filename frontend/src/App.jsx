import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const [prod, setProd] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/productdetails')
  //     .then((res) => {
  //       // console.log(res.data);
  //       setProd(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios.get('/api/productdetails').then(res => {setProd(res.data);}).catch(err => console.log(err));
  }, [])

  return (
    <>
      <h1>--Intro to proxy and CORS--</h1> <span>Products: {prod.length}</span>
     
      {
        prod.map((product, index) => {
          
          return (<div key={product.id}>
            <h1>{product.cost}</h1>
          </div>)
})
        
      }

      


    </>
  )
}

export default App
